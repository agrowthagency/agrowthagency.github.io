export type TopicSection = {
  slug: string;
  shortLabel: string;
  eyebrow: string;
  title: string;
  description: string;
  accent: string;
  topics: string[];
  intro: string;
};

export const platformSections: TopicSection[] = [
  {
    slug: 'meta-ads',
    shortLabel: 'Meta Ads',
    eyebrow: 'Meta / Facebook Ads',
    title: 'Navigate Meta account restrictions with clarity',
    description: 'A structured view of enforcement, account restrictions, security, verification, billing, commerce, and business asset governance across Meta Ads.',
    intro: 'Start with the decision surface—ad, person, Page, ad account, Business Portfolio, payment function, or commerce asset—then document the evidence before making changes.',
    accent: 'meta',
    topics: [
      'Facebook ad account restricted',
      'Meta ad account disabled',
      'Business Manager restricted',
      'Payment restriction',
      'Account review',
      'Appeal and recovery',
      'Meta agency ad account',
      'Verified and high-limit accounts',
      'Meta Advertising Standards enforcement',
      'Meta ads rejected',
      'Meta ad review process',
      'Meta ad account security',
      'Meta business verification',
      'Meta Ads billing and payments',
      'Meta Ads landing page requirements',
      'Meta Ads restricted businesses',
      'Personal advertising access restricted',
      'Facebook Page restricted from advertising',
      'Meta business asset governance',
      'Meta commerce account restricted'
    ]
  },
  {
    slug: 'google-ads',
    shortLabel: 'Google Ads',
    eyebrow: 'Google Ads',
    title: 'Understand Google Ads suspensions and reinstatement',
    description: 'A structured view of policy, billing, MCC, and account-level suspension issues across Google Ads.',
    intro: 'Google Ads enforcement can span policy, payments, linked accounts, and business verification. A useful diagnosis separates the stated reason from the underlying account history.',
    accent: 'google',
    topics: [
      'Google Ads account suspended',
      'Google Ads account banned',
      'Circumventing systems',
      'Billing suspension',
      'MCC suspension',
      'Appeal and reinstatement',
      'Google agency ad account',
      'Verified and high-spend accounts',
      'Google Ads account security',
      'Google Ads advertiser verification',
      'Google Ads billing and payments',
      'Google Ads business operations verification',
      'Google Ads destination requirements',
      'Google Ads disapproved ads',
      'Google Ads misrepresentation',
      'Google Ads policy enforcement',
      'Google Ads policy strikes',
      'Google Ads restricted businesses',
      'Google Ads third-party policy',
      'Google Ads unacceptable business practices'
    ]
  },
  {
    slug: 'tiktok-ads',
    shortLabel: 'TikTok Ads',
    eyebrow: 'TikTok Ads',
    title: 'Resolve TikTok Ads and Business Center issues',
    description: 'A structured view of policy enforcement, Account Health, suspensions, security, verification, billing, industry entry, catalogs, and Business Center governance.',
    intro: 'Start with the decision object—ad, ad group, advertiser account, Business Center, payment function, identity, or catalog product—then preserve the evidence before changing the system.',
    accent: 'tiktok',
    topics: [
      'TikTok Ads account suspended',
      'TikTok Ads account banned',
      'Business Center restricted',
      'Ad disapproval',
      'Appeal process',
      'TikTok agency ads account',
      'Verified Business Center and account providers',
      'TikTok Ads policy enforcement',
      'TikTok Ads Account Health',
      'TikTok ad review process',
      'TikTok Ads account security',
      'TikTok business verification',
      'TikTok Ads billing and payments',
      'TikTok Ads payment issues',
      'TikTok Ads landing page requirements',
      'TikTok Ads industry eligibility',
      'TikTok Ads misleading and false content',
      'TikTok Business Center asset governance',
      'TikTok Business Center roles and permissions',
      'TikTok catalog ads compliance'
    ]
  }
];

export const guideSections: TopicSection[] = [
  {
    slug: 'appeals-compliance',
    shortLabel: 'Appeals & Compliance',
    eyebrow: 'Appeals & Compliance',
    title: 'Build stronger appeals on a compliant foundation',
    description: 'Organize evidence, understand policy signals, and improve the quality of account review submissions.',
    intro: 'An effective appeal is specific, evidence-led, and consistent with the account history. It should explain what happened, what changed, and how recurrence will be prevented.',
    accent: 'appeals',
    topics: [
      'Why ad accounts get restricted',
      'Policy compliance',
      'Appeal documents'
    ]
  },
  {
    slug: 'agency-ad-accounts',
    shortLabel: 'Agency Accounts',
    eyebrow: 'Agency Ad Accounts',
    title: 'Evaluate agency account options carefully',
    description: 'Understand provider models, account claims, operational responsibilities, and the risks behind commercial account offers.',
    intro: 'Agency account arrangements vary widely. Evaluate ownership, access, billing, support, policy responsibility, and exit conditions before committing resources.',
    accent: 'agency',
    topics: [
      'Agency ad account provider',
      'Ad account rental',
      'Pre-verified ad accounts',
      'High-limit ad accounts',
      'Multi-platform agency accounts',
      'Ad accounts for media buyers',
      'Ad accounts for affiliate marketers',
      'Ad accounts for dropshipping'
    ]
  },
  {
    slug: 'account-operations',
    shortLabel: 'Operations',
    eyebrow: 'Account Operations',
    title: 'Create reliable advertising account operations',
    description: 'Build repeatable processes for security, billing, access, verification, and cross-platform account health.',
    intro: 'Reliable operations reduce preventable account issues. Document access, protect identity and payment assets, monitor changes, and assign clear responsibility.',
    accent: 'operations',
    topics: [
      'Account verification',
      'Billing and payment issues',
      'Account security',
      'Spending limits',
      'Account warming',
      'Personal vs agency ad accounts'
    ]
  }
];

export const allSections = [...platformSections, ...guideSections];

export const navItems = [
  { href: '/', label: 'Home' },
  { href: '/blog/', label: 'Blog' },
  ...platformSections.map(({ slug, shortLabel }) => ({ href: `/${slug}/`, label: shortLabel })),
  { href: '/appeals-compliance/', label: 'Appeals' },
  { href: '/agency-ad-accounts/', label: 'Agency Accounts' },
  { href: '/account-operations/', label: 'Operations' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' }
];
