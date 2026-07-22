import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { unified } from '@astrojs/markdown-remark';
import rehypeMidArticleCta from './src/plugins/rehype-mid-article-cta.mjs';

export default defineConfig({
  site: 'https://agrowthagency.github.io',
  output: 'static',
  markdown: {
    processor: unified({ rehypePlugins: [rehypeMidArticleCta] })
  },
  integrations: [sitemap({
    filter: (page) => !page.endsWith('/search/') && !page.endsWith('/404.html')
  })],
  vite: {
    plugins: [tailwindcss()]
  }
});
