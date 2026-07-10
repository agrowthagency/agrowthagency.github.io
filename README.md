# Ad Account Desk by AGrowth

Practical guides on advertising account restrictions, suspensions, appeals, compliance, and agency ad account solutions across Meta, Google Ads, and TikTok Ads.

## Core Topics

### Meta / Facebook Ads
- Facebook ad account restricted
- Meta ad account disabled
- Business Manager restricted
- Payment restriction
- Account review
- Appeal and recovery
- Meta agency ad account
- Verified and high-limit accounts

### Google Ads
- Google Ads account suspended
- Google Ads account banned
- Circumventing systems
- Billing suspension
- MCC suspension
- Appeal and reinstatement
- Google agency ad account
- Verified and high-spend accounts

### TikTok Ads
- TikTok Ads account suspended
- TikTok Ads account banned
- Business Center restricted
- Ad disapproval
- Appeal process
- TikTok agency ads account
- Verified Business Center and account providers

### Cross-Platform Account Issues
- Why ad accounts get restricted
- Account verification
- Billing and payment issues
- Spending limits
- Account security
- Policy compliance
- Account warming
- Appeal documents
- Personal vs agency ad accounts

### Commercial and Service Topics
- Agency ad account provider
- Ad account rental
- Pre-verified ad accounts
- High-limit ad accounts
- Multi-platform agency accounts
- Ad accounts for media buyers
- Ad accounts for affiliate marketers
- Ad accounts for dropshipping

## Website Structure

- Home
- Meta Ads
- Google Ads
- TikTok Ads
- Appeals & Compliance
- Agency Ad Accounts
- Account Operations
- About AGrowth
- Contact

## Brand

**Ad Account Desk by AGrowth**

Website: https://agrowthagency.github.io/

## Technology

- Astro and TypeScript
- Tailwind CSS through the Vite integration
- Static HTML output for GitHub Pages
- Pagefind for client-side search
- Astro Sitemap for XML sitemap generation
- GitHub Actions for automated checks, builds, and deployment

## Local Development

Requires Node.js 24 or later.

```bash
npm install
npm run dev
```

The local development server runs at `http://localhost:4321` by default.

## Production Build

```bash
npm run build
npm run preview
```

The generated static website is written to `dist/`. The production build also creates the Pagefind search index.

## Content Structure

- `src/data/site.ts` — navigation and silo landing-page data
- `src/content/blog/` — one Markdown file for each article, grouped by silo
- `src/content.config.ts` — article frontmatter validation schema
- `src/data/silos.ts` — silo labels, descriptions, and official source groups
- `src/pages/index.astro` — homepage
- `src/pages/blog/index.astro` — complete article directory
- `src/pages/[slug].astro` — platform and topic silo landing pages
- `src/pages/[silo]/[article].astro` — statically generated SEO article pages
- `src/pages/about.astro` — About AGrowth
- `src/pages/contact.astro` — contact page
- `src/styles/global.css` — design system and responsive styles

## Adding or Editing an Article

Each article is a Markdown file inside its silo directory. The file path determines the public URL:

```text
src/content/blog/meta-ads/facebook-ad-account-restricted.md
→ /meta-ads/facebook-ad-account-restricted/
```

Required frontmatter:

```yaml
---
silo: "meta-ads"
topic: "Facebook ad account restricted"
title: "Facebook Ad Account Restricted: Diagnosis and Review Checklist"
description: "A search-focused description between 100 and 165 characters."
overview: "A concise answer used in the article summary box."
publishedDate: 2026-07-10
updatedDate: 2026-07-10
---
```

Write the article body below the frontmatter with standard Markdown headings, paragraphs, ordered lists, and unordered lists. Level-two headings automatically appear in the table of contents.

## Deployment

Pushes to `main` run `.github/workflows/deploy.yml`. In the repository settings, select **GitHub Actions** as the source under **Settings → Pages**.

If an Actions run is named **Build with Jekyll**, GitHub Pages is still configured to deploy from a branch. Change **Settings → Pages → Build and deployment → Source** from **Deploy from a branch** to **GitHub Actions**, then run the **Deploy Astro site to GitHub Pages** workflow. Jekyll must not build the Astro source files.
