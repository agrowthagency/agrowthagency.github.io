import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://agrowthagency.github.io',
  output: 'static',
  integrations: [sitemap({
    filter: (page) => !page.endsWith('/search/') && !page.endsWith('/404.html')
  })],
  vite: {
    plugins: [tailwindcss()]
  }
});
