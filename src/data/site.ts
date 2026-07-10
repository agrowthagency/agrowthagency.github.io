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
    description: 'Practical guidance for diagnosing restrictions, preparing reviews, and operating Meta advertising accounts responsibly.',
    intro: 'Start with the restriction surface—ad account, Business Manager, payment profile, or identity review—then document the signals before making changes.',
    accent: 'meta',
    topics: [
      'Facebook ad account restricted',
      'Meta ad account disabled',
      'Business Manager restricted',
      'Payment restriction',
      'Account review',
      'Appeal and recovery',
      'Meta agency ad account',
      'Verified and high-limit accounts'
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
      'Verified and high-spend accounts'
    ]
  },
  {
    slug: 'tiktok-ads',
    shortLabel: 'TikTok Ads',
    eyebrow: 'TikTok Ads',
    title: 'Resolve TikTok Ads and Business Center issues',
    description: 'Operational guidance for ad disapprovals, account suspensions, Business Center restrictions, and review preparation.',
    intro: 'TikTok enforcement may affect a single creative, an advertiser account, or the wider Business Center. Identifying that scope is the first step toward a useful response.',
    accent: 'tiktok',
    topics: [
      'TikTok Ads account suspended',
      'TikTok Ads account banned',
      'Business Center restricted',
      'Ad disapproval',
      'Appeal process',
      'TikTok agency ads account',
      'Verified Business Center and account providers'
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
