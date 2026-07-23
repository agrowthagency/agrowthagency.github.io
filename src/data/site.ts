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
    title: 'Meta Ads restricted or under review? Identify the affected asset first.',
    description: 'Policy-led guidance for Meta Ads restrictions, reviews, security, verification, billing, commerce, agency access, and Business Portfolio governance.',
    intro: 'Start with the exact asset named in the notice—ad, person, Page, ad account, Business Portfolio, payment function, or commerce asset—then preserve the evidence before making changes.',
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
    title: 'Google Ads suspended? Diagnose the stated issue before you appeal.',
    description: 'Policy-led guidance for Google Ads suspensions, policy enforcement, billing, verification, MCCs, destinations, linked accounts, appeals, and reinstatement.',
    intro: 'Start with the policy named in the suspension notice, then compare it with payment, verification, destination, linked-account, manager-hierarchy, and recent-change records before making account changes.',
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
    title: 'TikTok Ads restricted? Identify the affected account or asset first.',
    description: 'Policy-led guidance for TikTok Ads suspensions, Account Health, security, verification, billing, industry eligibility, catalogs, appeals, and Business Center governance.',
    intro: 'Start with the exact object named in the notice—ad, ad group, advertiser account, Business Center, payment function, identity, or catalog product—then preserve the evidence before making changes.',
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
    title: 'Build an appeal from verified facts, corrections, and evidence.',
    description: 'Cross-platform guidance to diagnose restrictions, document corrective action, prepare consistent review submissions, and prevent repeat issues.',
    intro: 'A useful appeal explains the decision, the verified cause, what was corrected, the evidence supporting the correction, and the controls intended to prevent recurrence.',
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
    title: 'Set ownership and controls before agency account spend begins.',
    description: 'Practical guidance for agency account ownership, provider review, permissions, billing, verification, security, compliance, suspension response, portability, and offboarding.',
    intro: 'Define who owns the account, access, payment profile, identity, data, support relationship, and exit process before committing client spend or responding to a restriction.',
    accent: 'agency',
    topics: [
      'Agency ad account provider',
      'Client-owned vs agency-owned ad accounts',
      'Ad account rental',
      'Pre-verified ad accounts',
      'High-limit ad accounts',
      'Agency ad account access and permissions',
      'Agency ad account billing and reconciliation',
      'Agency advertiser verification',
      'Agency policy compliance governance',
      'Agency account suspension response',
      'Agency ad account security',
      'Agency ad account data ownership',
      'Agency account offboarding and migration',
      'Agency account contracts and SLAs',
      'White-label ad account resellers',
      'Agency support and reinstatement claims',
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
    title: 'Reduce preventable restrictions with documented account operations.',
    description: 'Practical controls for access, identity, billing, verification, security, spending, change tracking, and cross-platform account health.',
    intro: 'Document ownership and access, protect identity and payment assets, monitor material changes, and assign responsibility before an issue reaches platform review.',
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
  { href: '/blog/', label: 'Guides' },
  ...platformSections.map(({ slug, shortLabel }) => ({ href: `/${slug}/`, label: shortLabel })),
  { href: '/agency-ad-accounts/', label: 'Agency Accounts' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' }
];
