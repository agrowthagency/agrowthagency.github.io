export const companyMetrics = [
  { value: '1,000+', label: 'worldwide clients' },
  { value: '20+', label: 'team members' },
  { value: '10+', label: 'years of team experience' },
  { value: '0.2%', label: 'reported banned-account rate' }
];

export const companyProfileUrl = 'https://agrowth.io/pages/about-us';

export const editorialLead = {
  name: 'Alan Tran',
  role: 'BOD of AGrowth',
  description: 'A digital marketing specialist focused on Google Ads and Meta Ads, including PPC strategy, campaign optimization, audience targeting, creative direction, and retargeting.',
  profileUrl: 'https://agrowth.io/blogs/tiktok-ads/tiktok-agency-account'
};

export type PlatformCaseStudy = {
  client: string;
  eyebrow: string;
  summary: string;
  metrics: { value: string; label: string }[];
  sourceUrl: string;
  sourceLabel: string;
};

export const platformCaseStudies: Record<string, PlatformCaseStudy> = {
  'meta-ads': {
    client: 'Schaedelsucht',
    eyebrow: 'Published Meta case study',
    summary: 'AGrowth reports that a fashion ecommerce client combined agency-level account infrastructure with funnel and creative changes after repeated ad rejections.',
    metrics: [
      { value: '+51%', label: 'total sales' },
      { value: '1.2 → 2.8', label: 'ROAS' },
      { value: '18% → 6%', label: 'return rate' }
    ],
    sourceUrl: 'https://agrowth.io/blogs/case-study/schaedelsucht',
    sourceLabel: 'Read the Schaedelsucht case study'
  },
  'google-ads': {
    client: 'Lumeera',
    eyebrow: 'Published Google Ads case study',
    summary: 'AGrowth reports that a lifestyle and dropshipping client paired a Google agency account with Merchant Center setup and a higher campaign budget.',
    metrics: [
      { value: '+128.88%', label: 'conversions' },
      { value: '$8.29K+', label: 'ad spend' },
      { value: '$19.37', label: 'reported CPA' }
    ],
    sourceUrl: 'https://agrowth.io/blogs/case-study/lumeera',
    sourceLabel: 'Read the Lumeera case study'
  },
  'tiktok-ads': {
    client: 'Crypto education advertiser',
    eyebrow: 'Published TikTok audit example',
    summary: 'In an anonymized example, AGrowth reports auditing a learning-limited campaign without changing its creative or offer before moving it to AGrowth account infrastructure.',
    metrics: [
      { value: '3.5 days', label: 'to 50 conversions' },
      { value: 'Day 4', label: 'exited learning' },
      { value: '-27%', label: 'CPA' }
    ],
    sourceUrl: 'https://agrowth.io/blogs/tiktok-ads/tiktok-learning-phase',
    sourceLabel: 'Read the TikTok audit example'
  }
};
