export type DeskFaq = { question: string; answer: string };

export const deskFaqs: Record<string, DeskFaq[]> = {
  'meta-ads': [
    {
      question: 'What should I check first after a Meta Ads restriction?',
      answer: 'Identify the exact object named in the notice: the ad, Page, person, ad account, Business Portfolio, payment function, or commerce asset. Preserve the notice and recent-change history before editing connected assets.'
    },
    {
      question: 'Does an approved appeal restore every connected Meta asset?',
      answer: 'Not necessarily. Meta can apply decisions at different levels, so a restored ad account may not resolve a restricted person, Page, payment function, or Business Portfolio.'
    },
    {
      question: 'Can an agency guarantee Meta account reinstatement?',
      answer: 'No. Meta controls enforcement and review outcomes. An agency can help organize evidence, remediation, access, and operations, but cannot guarantee reinstatement.'
    }
  ],
  'google-ads': [
    {
      question: 'What should I check first after a Google Ads suspension?',
      answer: 'Start with the policy named in the suspension notice, then map the advertiser, payment profile, domains, linked accounts, manager hierarchy, verification records, and recent changes that may be relevant.'
    },
    {
      question: 'Should I open another Google Ads account while suspended?',
      answer: 'Do not create replacement accounts to bypass enforcement. Correct confirmed issues and use the official appeal or support route for the affected advertiser.'
    },
    {
      question: 'Can an agency guarantee Google Ads reinstatement?',
      answer: 'No. Google makes suspension and appeal decisions. A provider can support diagnosis and evidence preparation, but cannot promise approval or immunity from future enforcement.'
    }
  ],
  'tiktok-ads': [
    {
      question: 'What should I check first after a TikTok Ads suspension?',
      answer: 'Confirm whether the notice affects an ad, advertiser account, Business Center, identity, payment function, or catalog item. Save the Account Health notice and recent activity before making changes.'
    },
    {
      question: 'Is a TikTok ad rejection the same as an account suspension?',
      answer: 'No. An ad-level rejection applies to a specific object, while an account suspension can stop broader advertising capabilities. The evidence and review route should match the actual decision level.'
    },
    {
      question: 'Can an agency guarantee TikTok account recovery?',
      answer: 'No. TikTok controls its enforcement decisions. Agencies can assist with operational review, documentation, and compliant account management, but cannot guarantee recovery.'
    }
  ]
};
