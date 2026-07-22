import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { extname, join, relative } from 'node:path';

const root = process.cwd();
const dist = join(root, 'dist');
const content = join(root, 'src', 'content', 'blog');
const failures = [];

const walk = (directory, extension) => readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
  const path = join(directory, entry.name);
  if (entry.isDirectory()) return walk(path, extension);
  return !extension || extname(entry.name) === extension ? [path] : [];
});

const articles = walk(content, '.md');
const htmlFiles = walk(dist, '.html');
const articleOutputs = articles.map((file) => {
  const route = relative(content, file).replaceAll('\\', '/').replace(/\.md$/, '');
  return join(dist, ...route.split('/'), 'index.html');
});

for (const output of articleOutputs) {
  if (!existsSync(output)) {
    failures.push(`Missing article output: ${relative(root, output)}`);
    continue;
  }

  const html = readFileSync(output, 'utf8');
  if (!html.includes('class="article-cta"') || !html.includes('href="https://agrowth.io/"')) {
    failures.push(`Missing mid-article AGrowth CTA: ${relative(root, output)}`);
  }
  if (!html.includes('"@type":"Article"') || !html.includes('"@type":"FAQPage"') || !html.includes('"@type":"BreadcrumbList"')) {
    failures.push(`Incomplete article schema: ${relative(root, output)}`);
  }
  if (!html.includes('class="related-grid"')) {
    failures.push(`Missing related guides: ${relative(root, output)}`);
  }
}

const internalTargets = new Set();
for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  for (const match of html.matchAll(/href="([^"#]+)(?:#[^"]*)?"/g)) {
    const href = match[1];
    if (!href.startsWith('/') || href.startsWith('//')) continue;
    internalTargets.add(href.split('?')[0]);
  }
}

for (const href of internalTargets) {
  let target;
  if (href === '/') target = join(dist, 'index.html');
  else if (href.endsWith('/')) target = join(dist, ...href.slice(1, -1).split('/'), 'index.html');
  else target = join(dist, ...href.slice(1).split('/'));
  if (!existsSync(target)) failures.push(`Broken internal target: ${href}`);
}

for (const slug of ['meta-ads', 'google-ads', 'tiktok-ads']) {
  const html = readFileSync(join(dist, slug, 'index.html'), 'utf8');
  if (!html.includes('desk-faq-section') || !html.includes('"@type":"FAQPage"')) {
    failures.push(`Missing visible FAQ or FAQ schema: /${slug}/`);
  }
}

if (failures.length) {
  console.error(`Site audit failed with ${failures.length} issue(s):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`Site audit passed: ${articleOutputs.length} guides, ${htmlFiles.length} HTML pages, ${internalTargets.size} unique internal targets.`);
