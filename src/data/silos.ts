export type SiloSlug = 'meta-ads' | 'google-ads' | 'tiktok-ads' | 'appeals-compliance' | 'account-operations' | 'agency-ad-accounts';

export const siloInfo: Record<SiloSlug, {
  name: string;
  description: string;
  sources: { label: string; href: string }[];
}> = {
  'meta-ads': {
    name: 'Meta Ads',
    description: 'Restrictions, reviews, billing, Business Portfolio operations, and agency access across Meta advertising products.',
    sources: [
      { label: 'Meta Ads Review Policy', href: 'https://www.facebook.com/business/ads/review-policy-guidelines' },
      { label: 'Meta Advertising Standards', href: 'https://transparency.meta.com/policies/ad-standards/' }
    ]
  },
  'google-ads': {
    name: 'Google Ads',
    description: 'Policy enforcement, suspensions, verification, billing, destinations, security, restricted businesses, and agency governance in Google Ads.',
    sources: [
      { label: 'Google Ads policy enforcement', href: 'https://support.google.com/adspolicy/answer/10922738?hl=en' },
      { label: 'Circumventing systems policy', href: 'https://support.google.com/adspolicy/answer/15938075?hl=en' }
    ]
  },
  'tiktok-ads': {
    name: 'TikTok Ads',
    description: 'Account health, suspensions, ad disapprovals, Business Center access, and appeal preparation for TikTok Ads.',
    sources: [
      { label: 'TikTok suspended ad accounts', href: 'https://ads.tiktok.com/help/article/account-suspensions?lang=en' },
      { label: 'TikTok suspension appeals', href: 'https://ads.tiktok.com/help/article/how-to-troubleshoot-a-suspended-ad-account-on-tiktok?lang=en' }
    ]
  },
  'appeals-compliance': {
    name: 'Appeals & Compliance',
    description: 'Cross-platform policy diagnosis, appeal evidence, and repeatable compliance controls.',
    sources: [
      { label: 'Meta Ads Review Policy', href: 'https://www.facebook.com/business/ads/review-policy-guidelines' },
      { label: 'Google Ads policy enforcement', href: 'https://support.google.com/adspolicy/answer/10922738?hl=en' },
      { label: 'TikTok account suspension alerts', href: 'https://ads.tiktok.com/help/article/account-suspension-alerts?lang=en' }
    ]
  },
  'account-operations': {
    name: 'Account Operations',
    description: 'Verification, billing, access security, spending controls, and account ownership across advertising platforms.',
    sources: [
      { label: 'Google Ads billing and payment suspensions', href: 'https://support.google.com/google-ads/answer/13704200?hl=en' },
      { label: 'TikTok Business Center access', href: 'https://ads.tiktok.com/help/article/request-access-to-ad-accounts-in-business-center' }
    ]
  },
  'agency-ad-accounts': {
    name: 'Agency Ad Accounts',
    description: 'Due diligence for agency providers, account ownership models, billing, access, and vertical-specific risks.',
    sources: [
      { label: 'TikTok Business Center account access', href: 'https://ads.tiktok.com/help/article/request-access-to-ad-accounts-in-business-center' },
      { label: 'Meta Ads Review Policy', href: 'https://www.facebook.com/business/ads/review-policy-guidelines' },
      { label: 'Google Ads circumventing systems policy', href: 'https://support.google.com/adspolicy/answer/15938075?hl=en' }
    ]
  }
};

export const articleUrl = (id: string) => `/${id}/`;
