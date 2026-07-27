import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { unified } from '@astrojs/markdown-remark';
import { globSync, readFileSync } from 'node:fs';
import { relative } from 'node:path';
import rehypeMidArticleCta from './src/plugins/rehype-mid-article-cta.mjs';

const contentRoot = 'src/content/blog';
const articleLastModified = new Map(
  globSync(`${contentRoot}/**/*.md`).flatMap((file) => {
    const match = readFileSync(file, 'utf8').match(/^updatedDate:\s*["']?(\d{4}-\d{2}-\d{2})/m);
    if (!match) return [];
    const route = relative(contentRoot, file)
      .replaceAll('\\', '/')
      .replace(/\.md$/, '/');
    return [[`/${route}`, match[1]]];
  })
);

export default defineConfig({
  site: 'https://agrowthagency.github.io',
  output: 'static',
  markdown: {
    processor: unified({ rehypePlugins: [rehypeMidArticleCta] })
  },
  integrations: [sitemap({
    filter: (page) => {
      const pathname = new URL(page).pathname;
      return pathname !== '/search/' && pathname !== '/404.html' && pathname !== '/404/';
    },
    serialize: (item) => {
      const lastmod = articleLastModified.get(new URL(item.url).pathname);
      if (lastmod) item.lastmod = lastmod;
      return item;
    }
  })],
  vite: {
    plugins: [tailwindcss()]
  }
});
