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
const homepagePath = join(dist, 'index.html');
const homepage = readFileSync(homepagePath, 'utf8');
const sitemapIndexPath = join(dist, 'sitemap-index.xml');
const sitemapPath = join(dist, 'sitemap-0.xml');
const robotsPath = join(dist, 'robots.txt');

if (!homepage.includes('<meta name="google-site-verification" content="04XDXQcLkTzTa5RO50TCZHQTbMoeG-XNgK1j15-2xhI">')) {
  failures.push('Missing or incorrect Google Search Console verification meta tag');
}
if (!homepage.includes('"@type":"WebSite"') || !homepage.includes('"@type":"Organization"') || !homepage.includes('"@type":"WebPage"')) {
  failures.push('Incomplete homepage WebSite, Organization, or WebPage schema');
}

if (!existsSync(sitemapIndexPath) || !existsSync(sitemapPath)) {
  failures.push('Missing generated XML sitemap files');
} else {
  const sitemap = readFileSync(sitemapPath, 'utf8');
  if (sitemap.includes('/search/') || sitemap.includes('/404.html') || sitemap.includes('/404/')) {
    failures.push('Noindex or error routes are present in the XML sitemap');
  }
  for (const file of articles) {
    const route = relative(content, file).replaceAll('\\', '/').replace(/\.md$/, '/');
    if (!sitemap.includes(`<loc>https://agrowthagency.github.io/${route}</loc><lastmod>`)) {
      failures.push(`Missing sitemap lastmod for article: /${route}`);
    }
  }
}

if (!existsSync(robotsPath) || !readFileSync(robotsPath, 'utf8').includes('Sitemap: https://agrowthagency.github.io/sitemap-index.xml')) {
  failures.push('robots.txt does not advertise the production sitemap');
}

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
  const outputPath = relative(dist, file).replaceAll('\\', '/');
  if (/^google[a-z0-9]+\.html$/i.test(outputPath)) continue;
  const html = readFileSync(file, 'utf8');
  if (file !== homepagePath && html.includes('"@type":"WebSite"')) {
    failures.push(`WebSite schema must only appear on the homepage: ${relative(root, file)}`);
  }
  const schemaBlocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  if (schemaBlocks.length === 0) failures.push(`Missing JSON-LD: ${relative(root, file)}`);
  for (const [, schema] of schemaBlocks) {
    try {
      JSON.parse(schema);
    } catch {
      failures.push(`Invalid JSON-LD: ${relative(root, file)}`);
    }
  }
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

for (const slug of ['about', 'contact']) {
  const html = readFileSync(join(dist, slug, 'index.html'), 'utf8');
  if (!html.includes('class="page-breadcrumbs"') || !html.includes('"@type":"BreadcrumbList"')) {
    failures.push(`Missing visible breadcrumb or BreadcrumbList schema: /${slug}/`);
  }
}

const about = readFileSync(join(dist, 'about', 'index.html'), 'utf8');
if (!about.includes('"@type":"AboutPage"') || !about.includes('"@type":"Organization"') || !about.includes('"@type":"Person"')) {
  failures.push('Incomplete AboutPage, Organization, or Person schema: /about/');
}

const contact = readFileSync(join(dist, 'contact', 'index.html'), 'utf8');
if (!contact.includes('"@type":"ContactPage"') || !contact.includes('"@type":"Organization"')) {
  failures.push('Incomplete ContactPage or Organization schema: /contact/');
}

if (failures.length) {
  console.error(`Site audit failed with ${failures.length} issue(s):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`Site audit passed: ${articleOutputs.length} guides, ${htmlFiles.length} HTML pages, ${internalTargets.size} unique internal targets, and valid JSON-LD.`);
