export type SiloSlug = 'meta-ads' | 'google-ads' | 'tiktok-ads' | 'appeals-compliance' | 'account-operations' | 'agency-ad-accounts';

export type Article = {
  silo: SiloSlug;
  slug: string;
  topic: string;
  title: string;
  description: string;
  overview: string;
  signals: string[];
  actions: string[];
  avoid: string[];
  prevention: string[];
};

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
    description: 'Suspensions, billing enforcement, manager accounts, appeals, and responsible account operations in Google Ads.',
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

const articles: Article[] = [
  {
    silo: 'meta-ads', slug: 'facebook-ad-account-restricted', topic: 'Facebook ad account restricted',
    title: 'Facebook Ad Account Restricted: Diagnosis and Review Checklist',
    description: 'Learn how to identify the scope of a Facebook ad account restriction, preserve evidence, correct likely causes, and prepare a clear Meta review request.',
    overview: 'A Facebook ad account restriction can affect delivery, creation, payments, or access without necessarily disabling every connected business asset. The useful first question is not “How do I open another account?” but “Which asset is restricted, what notice did Meta provide, and what changed immediately before it happened?”',
    signals: ['The Account Quality or Business Support view names a specific ad account rather than the whole business.', 'Ads stop delivering while other Pages, pixels, or accounts remain accessible.', 'A notification references policy history, identity, payments, security, or connected assets.'],
    actions: ['Capture the restriction notice, account ID, date, affected assets, and recent account changes.', 'Review rejected ads, landing pages, payment activity, administrator access, and business information for inconsistencies.', 'Correct confirmed issues before requesting review, then explain the cause, remediation, and preventive control.', 'Track the review case in one internal incident record so every response remains consistent.'],
    avoid: ['Do not create replacement accounts to bypass enforcement.', 'Do not submit repeated appeals with different explanations or unsupported claims.'],
    prevention: ['Review Account Quality on a schedule.', 'Use named, authenticated administrators and least-privilege access.', 'Keep business, domain, and billing information current.']
  },
  {
    silo: 'meta-ads', slug: 'meta-ad-account-disabled', topic: 'Meta ad account disabled',
    title: 'Meta Ad Account Disabled: What It Means and What to Do Next',
    description: 'A practical process for assessing a disabled Meta ad account, checking connected assets, documenting the event, and preparing an evidence-based response.',
    overview: '“Disabled” commonly describes an account that can no longer serve or create ads, but the enforcement notice is more important than the label. Determine whether Meta acted on the advertiser account, a user profile, a Page, a Business Portfolio, or a payment function because each scope requires different evidence.',
    signals: ['Campaign delivery is stopped across the account.', 'Account controls are unavailable or an explicit disabled status appears.', 'The notice points to repeated violations, integrity concerns, identity, or another connected asset.'],
    actions: ['Confirm the exact disabled asset and whether any administrator or business-level restrictions also exist.', 'Export or record campaign, billing, user, and support history while access remains available.', 'Audit the advertised offer and destination as a complete user journey, not only the ad creative.', 'Use the review path shown in Business Support Home and provide concise, verifiable facts.'],
    avoid: ['Do not assume deleting campaigns erases enforcement history.', 'Do not purchase or borrow another account as a recovery shortcut.'],
    prevention: ['Maintain an asset inventory with owners and administrators.', 'Review policy-sensitive offers before launch.', 'Investigate warning signals before they accumulate.']
  },
  {
    silo: 'meta-ads', slug: 'business-manager-restricted', topic: 'Business Manager restricted',
    title: 'Meta Business Manager Restricted: Scope, Causes, and Response',
    description: 'Understand business-level Meta advertising restrictions, how connected assets can be affected, and how to prepare a structured Business Support review.',
    overview: 'A restriction on Meta Business Manager—now commonly represented through a Business Portfolio—can affect multiple ad accounts, Pages, pixels, catalogs, and people. Because the scope is broader than one campaign, the review should focus on business identity, asset relationships, administrator behavior, and patterns across accounts.',
    signals: ['Multiple advertiser accounts or business assets lose capabilities at the same time.', 'Business Support Home names the business entity rather than only one ad account.', 'New asset creation, partner access, or advertising permissions become limited.'],
    actions: ['Map every owned and shared asset, its owner, and its current status.', 'Review administrators for unfamiliar, duplicate, compromised, or unnecessary access.', 'Verify business details, domain ownership, payment relationships, and policy history across the portfolio.', 'Submit business-level evidence and describe remediation that applies across all affected assets.'],
    avoid: ['Do not remove assets impulsively before documenting ownership and dependencies.', 'Do not shift the same activity into a different business to avoid the restriction.'],
    prevention: ['Use separate roles for finance, media buying, and administration.', 'Audit partner access quarterly.', 'Keep a change log for business-level settings and asset transfers.']
  },
  {
    silo: 'meta-ads', slug: 'payment-restriction', topic: 'Payment restriction',
    title: 'Meta Ads Payment Restriction: Billing Troubleshooting Guide',
    description: 'Troubleshoot Meta Ads payment restrictions by checking balances, payment ownership, failed charges, account access, and billing consistency.',
    overview: 'A Meta payment restriction may pause advertising even when the ads themselves are compliant. The underlying issue can involve a failed charge, unpaid balance, card verification, unusual activity, mismatched billing information, or access by an unauthorized user.',
    signals: ['A payment method is declined, disabled, or cannot be added.', 'The account has an outstanding balance or repeated failed charges.', 'Billing changes coincide with a login, location, administrator, or spending anomaly.'],
    actions: ['Record the exact billing error and check the account balance and transaction history.', 'Confirm with the issuer that the method supports the transaction and has not been blocked.', 'Make sure the legal business, cardholder, currency, country, and billing profile are explainable and consistent.', 'Use Meta billing support for unresolved platform restrictions and provide transaction evidence with sensitive details redacted.'],
    avoid: ['Do not cycle through many cards rapidly.', 'Do not use payment instruments without documented authorization from their owner.'],
    prevention: ['Assign a billing owner and backup reviewer.', 'Monitor failed charges and threshold changes.', 'Secure finance roles with strong authentication.']
  },
  {
    silo: 'meta-ads', slug: 'account-review', topic: 'Account review',
    title: 'Meta Account Review: How to Prepare Before You Submit',
    description: 'Prepare a stronger Meta account review with a clear timeline, policy audit, evidence package, remediation summary, and consistent business information.',
    overview: 'A Meta account review is an opportunity to correct an error or demonstrate that a genuine issue has been resolved. A strong submission is not long for its own sake: it connects the platform notice to specific evidence, actions taken, and controls that reduce recurrence.',
    signals: ['Business Support Home offers a request-review action.', 'Meta requests identity, business, domain, or payment verification.', 'The account status remains restricted while a case is pending.'],
    actions: ['Write a one-page incident timeline before opening the review form.', 'Match each stated issue to evidence and a completed corrective action.', 'Verify that the account, website, company, and payment details tell the same business story.', 'Submit once, preserve the case ID, and respond to follow-up requests through the same record.'],
    avoid: ['Do not claim compliance without checking the destination and business model.', 'Do not send fabricated, edited, expired, or unrelated documents.'],
    prevention: ['Keep review-ready corporate records.', 'Document creative and landing-page approvals.', 'Retain change and access logs.']
  },
  {
    silo: 'meta-ads', slug: 'appeal-and-recovery', topic: 'Appeal and recovery',
    title: 'Meta Ads Appeal and Recovery: A Responsible Playbook',
    description: 'Use a disciplined Meta Ads appeal and recovery process covering diagnosis, remediation, evidence, review tracking, and post-reinstatement controls.',
    overview: 'Recovery begins before the appeal is submitted. The team needs to preserve the account record, identify the enforcement scope, correct any genuine issue, and agree on one factual explanation. Reinstatement is never guaranteed, but a disciplined process prevents avoidable contradictions and additional policy risk.',
    signals: ['The restriction includes an available review channel or support case.', 'A previous review requests more information or remains unresolved.', 'Access returns partially but delivery, payments, or assets remain limited.'],
    actions: ['Freeze unnecessary changes while investigating the incident.', 'Create an evidence folder containing notices, IDs, screenshots, policies reviewed, and remediation.', 'Assign one owner for communication with Meta and one reviewer for factual accuracy.', 'After recovery, stage campaign changes gradually while monitoring account status and billing.'],
    avoid: ['Do not promise stakeholders a guaranteed recovery date.', 'Do not resume the same unresolved ads or landing pages immediately after reinstatement.'],
    prevention: ['Run a post-incident review.', 'Update campaign launch gates from the root cause.', 'Monitor connected assets for related restrictions.']
  },
  {
    silo: 'meta-ads', slug: 'meta-agency-ad-account', topic: 'Meta agency ad account',
    title: 'Meta Agency Ad Accounts: Ownership, Access, and Due Diligence',
    description: 'Evaluate a Meta agency ad account by reviewing ownership, partner access, billing, data control, support, policy responsibility, and exit terms.',
    overview: 'A Meta agency ad account should be understood as an operating and contractual relationship, not a technical exemption from advertising rules. The client, agency, and account owner need written clarity on asset ownership, billing, data, permissions, policy responsibility, and what happens when the relationship ends.',
    signals: ['The agency grants partner access to an account it owns or manages.', 'Billing and media spend are consolidated through the provider.', 'The client does not control every underlying asset or support relationship.'],
    actions: ['Document who owns the ad account, Page, pixel, catalog, domain, audiences, and creative.', 'Verify that access is granted through supported business roles rather than shared credentials.', 'Review invoicing, refunds, deposits, support escalation, data export, and termination terms.', 'Confirm that the provider does not market the account as a way to bypass previous enforcement.'],
    avoid: ['Do not accept anonymous ownership or shared personal logins.', 'Do not rely on claims of “restriction-proof” or guaranteed spend.'],
    prevention: ['Keep client-controlled copies of data and creative.', 'Review permissions monthly.', 'Include a documented offboarding process.']
  },
  {
    silo: 'meta-ads', slug: 'verified-high-limit-accounts', topic: 'Verified and high-limit accounts',
    title: 'Verified and High-Limit Meta Accounts: Claims, Reality, and Risk',
    description: 'Learn how to evaluate claims about verified or high-limit Meta ad accounts without confusing verification, spending capacity, and policy compliance.',
    overview: 'Verification and spending capacity are separate from policy standing. A verified business can still be restricted, and historical spend does not guarantee future limits or enforcement outcomes. Treat “high-limit” as a claim requiring account-level evidence, not as a permanent product feature.',
    signals: ['A provider promotes verification or prior spend as the main account value.', 'Ownership, billing entity, and verified business do not match the advertiser.', 'The proposed spending limit cannot be confirmed inside the authorized account interface.'],
    actions: ['Verify the legal entity, asset owner, billing arrangement, and access method independently.', 'Ask what the “limit” actually refers to: billing threshold, daily budget capability, credit line, or provider policy.', 'Review account history and restrictions without requesting sensitive credentials.', 'Assess whether your business and promoted offer are eligible in the target market.'],
    avoid: ['Do not buy identity or verification artifacts.', 'Do not treat historical spend as permission to run any offer.'],
    prevention: ['Build limits through legitimate account history and reliable payments.', 'Keep verification data accurate.', 'Plan budgets without depending on undocumented limits.']
  },

  {
    silo: 'google-ads', slug: 'google-ads-account-suspended', topic: 'Google Ads account suspended',
    title: 'Google Ads Account Suspended: Diagnosis and Appeal Process',
    description: 'Understand a Google Ads suspension notice, investigate policy and account signals, correct root causes, and prepare a thorough, honest appeal.',
    overview: 'A Google Ads suspension stops advertising at the account level and may relate to an egregious violation, repeated violations, billing, verification, or connected accounts. Google explicitly warns against creating new accounts to bypass enforcement, so the safest path is to understand the cited policy and address the original system.',
    signals: ['An in-account banner and email name the suspension policy.', 'Ads stop serving across the account, not only in one campaign.', 'Related manager, billing, merchant, domain, or advertiser-verification information is referenced.'],
    actions: ['Preserve the full suspension notice and identify the exact policy page it links to.', 'Audit ads, assets, destinations, business claims, linked accounts, payments, and verification data.', 'Correct the root cause across every related campaign and destination.', 'Use the Contact Us appeal path and submit a factual explanation with evidence.'],
    avoid: ['Do not create a replacement account while suspended.', 'Do not appeal until you understand and address the cited issue.'],
    prevention: ['Track policy warnings and disapprovals.', 'Review all destination changes.', 'Keep account and payment ownership transparent.']
  },
  {
    silo: 'google-ads', slug: 'google-ads-account-banned', topic: 'Google Ads account banned',
    title: 'Google Ads Account Banned: Suspension vs Permanent Enforcement',
    description: 'Clarify what advertisers mean by a Google Ads ban, how to read the actual suspension status, and which evidence matters in an appeal.',
    overview: 'Advertisers often say “banned,” while Google’s interface generally describes an account as suspended. The actual notice determines whether the issue concerns a specific policy, billing, verification, repeated violations, or an enforcement decision that is unlikely to be reversed without compelling evidence.',
    signals: ['The account cannot serve ads and displays a suspension banner.', 'An appeal has been rejected or the notice describes an egregious violation.', 'Connected accounts or new accounts receive related enforcement.'],
    actions: ['Use the policy wording from the account, not an informal label from a forum or provider.', 'Separate correctable account errors from business-model or destination issues.', 'Build a timeline of ownership, prior accounts, domains, payments, and appeals.', 'Appeal only with accurate facts and material evidence that addresses the named policy.'],
    avoid: ['Do not disguise the same advertiser through new domains or accounts.', 'Do not pay third parties that promise guaranteed reinstatement.'],
    prevention: ['Centralize account governance.', 'Review policy-sensitive business models before launch.', 'Keep linked-account relationships documented.']
  },
  {
    silo: 'google-ads', slug: 'circumventing-systems', topic: 'Circumventing systems',
    title: 'Google Ads Circumventing Systems: Policy Risks and Remediation',
    description: 'Understand Google Ads circumventing systems enforcement, including cloaking, multiple-account abuse, false verification, and compliant remediation.',
    overview: 'Google treats attempts to interfere with review or enforcement as an egregious policy issue. Examples include cloaking, using new accounts to re-enter after suspension, hiding non-compliant content, spreading violations across accounts, and providing false verification information.',
    signals: ['The suspension notice explicitly cites Circumventing systems.', 'Ads, users, and reviewers may reach materially different destination experiences.', 'Multiple related accounts, domains, or identities were created after enforcement.'],
    actions: ['Stop account and domain proliferation while the issue is investigated.', 'Verify that redirects, tracking, geolocation, and personalization do not conceal the promoted offer.', 'Map all related advertisers, domains, billing profiles, manager accounts, and prior suspensions.', 'Remove prohibited behavior and appeal with a transparent explanation of the relationships and changes.'],
    avoid: ['Do not test ways to evade detection or present different content to reviewers.', 'Do not submit false identity, business, or certification information.'],
    prevention: ['Approve tracking and redirect architecture centrally.', 'Maintain one truthful advertiser identity.', 'Treat prior enforcement as a compliance incident, not an account-sourcing problem.']
  },
  {
    silo: 'google-ads', slug: 'billing-suspension', topic: 'Billing suspension',
    title: 'Google Ads Billing Suspension: Payment Review and Appeal Guide',
    description: 'Diagnose Google Ads billing suspensions involving unpaid balances, suspicious payments, declined methods, verification, or payment-profile inconsistencies.',
    overview: 'Google may suspend an account for unpaid balances, concerns about future payment, suspicious payment activity, chargebacks, or verification issues. Billing remediation requires more than swapping cards: the team must explain ownership and resolve any balance or issuer problem.',
    signals: ['The notice names Billing and Payment rather than an ad-content policy.', 'The Billing Summary shows declined charges, overdue balance, verification, or a disabled setup.', 'The cardholder, payment profile, advertiser, and legal business are difficult to reconcile.'],
    actions: ['Review Billing Summary, payment-profile status, balance, decline reason, and recent changes.', 'Contact the bank or issuer about declined or unauthorized activity before retrying.', 'Complete any payment-method verification requested through Google Payments.', 'Appeal with proof of authorized ownership and resolution, redacting unrelated sensitive data.'],
    avoid: ['Do not add many unrelated cards after repeated declines.', 'Do not dispute legitimate advertising charges as a recovery tactic.'],
    prevention: ['Use an authorized business payment method.', 'Maintain a backup method where supported.', 'Reconcile spend and charges regularly.']
  },
  {
    silo: 'google-ads', slug: 'mcc-suspension', topic: 'MCC suspension',
    title: 'Google Ads MCC Suspension: Manager-Account Incident Response',
    description: 'Respond to a Google Ads MCC or manager-account suspension by mapping linked accounts, ownership, policy patterns, billing, and access.',
    overview: 'A Google Ads manager account connects multiple advertiser accounts, users, and sometimes billing relationships. When enforcement affects the manager layer, diagnosis must look for patterns across linked accounts rather than treating each advertiser as isolated.',
    signals: ['The manager account loses functionality or linked accounts receive related notices.', 'Multiple client accounts share a policy, destination, billing, or access pattern.', 'Administrative actions or account creation are limited at the manager level.'],
    actions: ['Export a map of linked accounts, owners, domains, billing, status, and responsible operators.', 'Separate legitimate independent clients from commonly controlled advertisers.', 'Investigate repeat policy issues, bulk account creation, compromised access, and shared destinations.', 'Coordinate appeals so each account states its relationships truthfully and consistently.'],
    avoid: ['Do not unlink accounts merely to hide relationships.', 'Do not move affected clients into a fresh MCC to bypass enforcement.'],
    prevention: ['Set onboarding standards for clients.', 'Monitor policy health across the portfolio.', 'Limit account-creation and administrative privileges.']
  },
  {
    silo: 'google-ads', slug: 'appeal-and-reinstatement', topic: 'Appeal and reinstatement',
    title: 'Google Ads Appeal and Reinstatement: Evidence-Led Checklist',
    description: 'Prepare a Google Ads suspension appeal with a policy-specific audit, documented remediation, accurate relationships, and post-reinstatement controls.',
    overview: 'Google states that suspended accounts are reinstated only in compelling circumstances. An appeal should therefore demonstrate either a material mistake or a real correction, using evidence tied directly to the cited policy rather than a generic request for another chance.',
    signals: ['The in-account suspension banner provides a Contact Us appeal link.', 'Google asks for advertiser or payment verification before processing the appeal.', 'A rejection identifies unresolved concerns or allows another appeal.'],
    actions: ['Read the complete cited policy and write down how each relevant example was tested.', 'Correct violations across ads, assets, destinations, linked services, and accounts.', 'Explain ownership and previous account relationships accurately.', 'Submit a focused appeal and preserve the confirmation, case status, and response.'],
    avoid: ['Do not flood support with simultaneous appeals.', 'Do not conceal related accounts, agencies, domains, or billing profiles.'],
    prevention: ['Add policy review to campaign QA.', 'Retain evidence for regulated or restricted verticals.', 'Perform a post-reinstatement audit before relaunch.']
  },
  {
    silo: 'google-ads', slug: 'google-agency-ad-account', topic: 'Google agency ad account',
    title: 'Google Agency Ad Accounts: Manager Access and Client Ownership',
    description: 'Structure Google Ads agency access with clear client ownership, manager links, billing responsibilities, data portability, and policy accountability.',
    overview: 'A sound Google Ads agency model normally preserves the real advertiser’s identity and uses supported manager-account access. The commercial relationship does not change Google Ads policies, and an agency should not obscure who owns the business, destination, payments, or promoted offer.',
    signals: ['The agency links a client-owned advertiser account to its manager account.', 'The agency manages media under a written billing and access agreement.', 'Conversion data and destinations belong to or are licensed by the client.'],
    actions: ['Document advertiser ownership, manager access, payment profile, conversion data, domains, and offboarding.', 'Grant named users the minimum roles needed and remove departed staff promptly.', 'Define who monitors disapprovals, who approves changes, and who submits appeals.', 'Ensure invoices distinguish media spend, taxes, fees, and credits.'],
    avoid: ['Do not share one login across agency staff or clients.', 'Do not represent pooled or anonymous accounts as exempt from enforcement.'],
    prevention: ['Review linked accounts quarterly.', 'Use client onboarding checks.', 'Keep an export and access-removal plan.']
  },
  {
    silo: 'google-ads', slug: 'verified-high-spend-accounts', topic: 'Verified and high-spend accounts',
    title: 'Verified and High-Spend Google Ads Accounts: Due Diligence',
    description: 'Evaluate claims about verified and high-spend Google Ads accounts by separating advertiser verification, billing thresholds, credit, and policy history.',
    overview: 'Advertiser verification confirms specific information at a point in time; it does not transfer automatically to another business or guarantee policy standing. Likewise, historical spend, payment thresholds, and monthly invoicing are different concepts and should not be marketed as a permanent unrestricted limit.',
    signals: ['A seller treats verification or past spend as a transferable asset.', 'The verified entity does not match the actual advertiser or website.', 'The claimed limit is not defined as budget capacity, billing threshold, or approved credit.'],
    actions: ['Verify the legal advertiser, payment profile, account ownership, manager relationships, and destination.', 'Ask for a precise definition and in-product evidence of any spending claim.', 'Review account policy history and whether the intended business requires certification.', 'Prefer a client-owned account with legitimate verification and billing.'],
    avoid: ['Do not submit another company’s documents as your own.', 'Do not assume spend history overrides current review or policy.'],
    prevention: ['Complete verification truthfully.', 'Build payment history under the correct entity.', 'Forecast using confirmed billing terms only.']
  },

  {
    silo: 'tiktok-ads', slug: 'tiktok-ads-account-suspended', topic: 'TikTok Ads account suspended',
    title: 'TikTok Ads Account Suspended: Account Health and Appeal Guide',
    description: 'Diagnose a TikTok Ads suspension through Account Health, review common policy signals, correct issues, and prepare a single supported appeal.',
    overview: 'TikTok reviews both ads and account behavior. A suspended advertiser may lose delivery and some account capabilities, while the Account Health area and suspension notice provide the best starting evidence. Severe issues can trigger immediate action, so do not assume every case begins with a warning.',
    signals: ['Ads Manager displays “Your account has been suspended.”', 'Account Health shows Attention Needed or Poor and lists violations.', 'Delivery stops and access to features such as pixels or account settings is limited.'],
    actions: ['Record the notice, Account Health status, affected campaigns, account ID, and date.', 'Review creatives, landing pages, business qualifications, user complaints, and recent destination changes.', 'Resolve verified issues before using the Account Suspension Appeal ticket path.', 'Submit one complete appeal and monitor the associated email and support ticket.'],
    avoid: ['Do not create a new ad account while the appeal is under review.', 'Do not submit multiple tickets for the same incident in a short period.'],
    prevention: ['Monitor Account Health.', 'Review landing-page changes after launch.', 'Maintain valid business and industry documents.']
  },
  {
    silo: 'tiktok-ads', slug: 'tiktok-ads-account-banned', topic: 'TikTok Ads account banned',
    title: 'TikTok Ads Account Banned: Temporary vs Permanent Suspension',
    description: 'Understand what a TikTok Ads ban may mean, how temporary and permanent suspensions differ, and how to preserve appeal options.',
    overview: '“Banned” is an informal term that can hide important status details. TikTok distinguishes account health warnings, temporary suspension, and permanent suspension. The notice, timing, and available support action determine whether remediation or appeal is still possible.',
    signals: ['The account status shows suspended and all advertising delivery has stopped.', 'A deadline or temporary remediation period appears in the notice.', 'The interface indicates permanent suspension or no further appeal path.'],
    actions: ['Capture the exact status and any deadline instead of relying on the word “banned.”', 'Check Account Health and support responses for the cited behavior or policy.', 'Preserve balances, invoices, ownership evidence, and campaign records.', 'Use the available official appeal path promptly and answer requests completely.'],
    avoid: ['Do not source replacement accounts to continue the same unresolved activity.', 'Do not misstate ownership or business information in a new review.'],
    prevention: ['Respond to warning notifications early.', 'Track repeated violations across campaigns.', 'Keep qualifications current.']
  },
  {
    silo: 'tiktok-ads', slug: 'business-center-restricted', topic: 'Business Center restricted',
    title: 'TikTok Business Center Restricted: Asset and Access Audit',
    description: 'Assess a restricted TikTok Business Center by mapping advertiser accounts, partners, admins, verification, billing, and related enforcement.',
    overview: 'TikTok Business Center is the management layer for advertisers, people, partners, pixels, catalogs, and other business assets. A restriction at this level can affect more than one advertiser, so the response should document relationships and permissions across the organization.',
    signals: ['Multiple advertiser accounts or shared assets become unavailable.', 'Business Center verification or administration features show restrictions.', 'Partner requests, account creation, funding, or asset management are limited.'],
    actions: ['Map owned and requested-access accounts, assets, partners, admins, and operators.', 'Check whether any linked advertiser is disapproved or suspended.', 'Review Business Center verification details and outstanding document requests.', 'Use Business Support with a clear organization-level timeline and asset list.'],
    avoid: ['Do not deactivate or unlink assets before preserving ownership records.', 'Do not recreate the Business Center to avoid a pending enforcement review.'],
    prevention: ['Audit partner access.', 'Separate admin and operator duties.', 'Maintain an accurate Business Center asset register.']
  },
  {
    silo: 'tiktok-ads', slug: 'ad-disapproval', topic: 'Ad disapproval',
    title: 'TikTok Ad Disapproval: Creative, Landing Page, and Appeal Checklist',
    description: 'Troubleshoot a TikTok ad disapproval by checking creative, claims, destination, industry eligibility, consistency, and the appropriate review path.',
    overview: 'An ad disapproval is narrower than an account suspension, but repeated or severe violations can affect account health. Review the full user experience: video, audio, text, targeting context, displayed brand, landing page, product, qualifications, and market-specific rules.',
    signals: ['A specific ad or group is rejected while the advertiser remains active.', 'The interface identifies a creative, industry, landing-page, or claim issue.', 'Similar creatives receive repeated rejections and Account Health declines.'],
    actions: ['Read the stated reason and compare it with the exact version reviewed.', 'Check creative claims, prohibited elements, landing-page functionality, pricing, contact details, and product consistency.', 'Edit only after identifying the issue so the new submission is materially compliant.', 'Appeal if the ad was evaluated incorrectly and provide relevant context or qualifications.'],
    avoid: ['Do not make cosmetic variations to repeatedly resubmit the same violation.', 'Do not change the landing page after approval to a materially different offer.'],
    prevention: ['Use a pre-launch policy checklist.', 'Archive approved creative and destination versions.', 'Track disapproval patterns by offer.']
  },
  {
    silo: 'tiktok-ads', slug: 'appeal-process', topic: 'Appeal process',
    title: 'TikTok Ads Appeal Process: Evidence, Ticket, and Follow-Up',
    description: 'Prepare and submit a TikTok Ads appeal with the correct support category, a concise incident timeline, evidence, remediation, and disciplined follow-up.',
    overview: 'TikTok’s support flow distinguishes ad review from account-suspension appeal. A useful appeal identifies the account and decision, explains why it may be incorrect or what was corrected, and provides relevant evidence without opening duplicate tickets.',
    signals: ['Ads Manager or Ad Assistant provides an Account/Ad Review category.', 'A suspension notice, disapproved ad, or account-approval decision is available to reference.', 'Support requests business, identity, industry, or destination documents.'],
    actions: ['Prepare the advertiser ID, decision date, campaign IDs, screenshots, and business documents before filing.', 'Choose the support category that matches the actual decision.', 'Write a short explanation of the issue, evidence, correction, and prevention.', 'Keep the ticket ID and respond through the same thread when possible.'],
    avoid: ['Do not open repeated tickets to seek a different reviewer.', 'Do not submit irrelevant or altered documents.'],
    prevention: ['Maintain a review-ready evidence folder.', 'Assign one appeal owner.', 'Record support outcomes for future campaign QA.']
  },
  {
    silo: 'tiktok-ads', slug: 'tiktok-agency-ads-account', topic: 'TikTok agency ads account',
    title: 'TikTok Agency Ads Accounts: Business Center Access and Controls',
    description: 'Evaluate TikTok agency advertising access through Business Center, including ownership, permissions, billing, support, data, and offboarding.',
    overview: 'TikTok Business Center supports formal access requests for agencies managing advertiser accounts. A responsible agency arrangement uses these permissions, identifies the primary media relationship accurately, and documents who owns the advertiser, data, billing, and connected assets.',
    signals: ['An agency requests Admin, Operator, or Analyst access through Business Center.', 'The advertiser owner approves access rather than sharing credentials.', 'The relationship defines whether the agency is the primary media agency.'],
    actions: ['Confirm who owns the advertiser account and which Business Center grants access.', 'Choose the minimum role needed for finance, campaign, and reporting work.', 'Document pixel, audience, creative, balance, invoice, support, and exit responsibilities.', 'Review the provider’s policy record and prohibit unauthorized account substitution.'],
    avoid: ['Do not accept shared logins or undisclosed account ownership.', 'Do not assume agency status prevents suspension.'],
    prevention: ['Review permissions monthly.', 'Keep advertiser-controlled reporting access.', 'Use written onboarding and offboarding checklists.']
  },
  {
    silo: 'tiktok-ads', slug: 'verified-business-center-account-providers', topic: 'Verified Business Center and account providers',
    title: 'Verified TikTok Business Center Providers: Due Diligence Guide',
    description: 'Assess verified TikTok Business Center and account-provider claims through entity, ownership, access, billing, qualification, and policy checks.',
    overview: 'Business verification supports trust and access to features, but it is not a transferable guarantee of compliance. A provider should be able to explain the legal entity, ownership model, supported access flow, billing, market eligibility, and what happens to client assets when service ends.',
    signals: ['The provider uses “verified” as proof that no restrictions will occur.', 'The verified entity and actual advertiser have no documented relationship.', 'Access requires credentials rather than Business Center roles.'],
    actions: ['Verify the provider entity and relationship to the Business Center.', 'Confirm account ownership, roles, balance handling, data access, and support escalation.', 'Check industry and country qualifications for the intended offer.', 'Require clear termination, refund, and asset-release terms.'],
    avoid: ['Do not buy or submit verification documents from unrelated entities.', 'Do not rely on screenshots as the only proof of account status.'],
    prevention: ['Use platform-supported access.', 'Revalidate provider controls periodically.', 'Keep client-owned copies of assets and reports.']
  },

  {
    silo: 'appeals-compliance', slug: 'why-ad-accounts-get-restricted', topic: 'Why ad accounts get restricted',
    title: 'Why Ad Accounts Get Restricted: A Cross-Platform Framework',
    description: 'Understand why advertising accounts are restricted across Meta, Google, and TikTok using policy, identity, billing, security, and connected-asset signals.',
    overview: 'Ad platforms evaluate more than individual creative. Enforcement may reflect the advertised product, landing page, business identity, payment behavior, account security, repeated violations, user complaints, or relationships with other assets. A cross-platform diagnosis starts by separating the visible notice from the underlying system.',
    signals: ['Repeated ad rejections or warning notifications precede account action.', 'Business, identity, payment, or domain information cannot be verified consistently.', 'The account connects to compromised users, restricted assets, or previously enforced advertisers.'],
    actions: ['Classify the issue as creative, destination, business model, identity, billing, security, or relationship risk.', 'Build a timeline covering campaigns, website changes, users, payments, verification, and support.', 'Read the named platform policy and test every relevant asset against it.', 'Correct root causes before asking for review.'],
    avoid: ['Do not assume a new account removes the underlying signal.', 'Do not focus only on the last rejected ad.'],
    prevention: ['Use cross-functional launch reviews.', 'Monitor account health indicators.', 'Maintain consistent business records.']
  },
  {
    silo: 'account-operations', slug: 'account-verification', topic: 'Account verification',
    title: 'Advertising Account Verification: Documents and Consistency',
    description: 'Prepare advertising account verification by aligning legal business details, identity, domain, payments, qualifications, ownership, and submitted documents.',
    overview: 'Verification helps platforms understand who is advertising and whether the business is eligible for certain products or markets. Problems often arise from inconsistency rather than a single missing document: names, addresses, domains, payment owners, and account administrators should describe the same legitimate operation.',
    signals: ['The platform requests identity, business license, address, tax, domain, or industry evidence.', 'A document is rejected as expired, unreadable, altered, or mismatched.', 'The account’s legal entity and advertised brand are not clearly connected.'],
    actions: ['List every requested field and its authoritative source document.', 'Reconcile spelling, legal names, addresses, websites, and payment ownership.', 'Provide clear, complete, current documents through the official interface.', 'Explain legitimate brand, agency, subsidiary, or payment relationships when they are not obvious.'],
    avoid: ['Do not edit documents to force a match.', 'Do not borrow another business’s verification identity.'],
    prevention: ['Maintain a current corporate-document pack.', 'Update platforms after legal changes.', 'Document agency authorization.']
  },
  {
    silo: 'account-operations', slug: 'billing-payment-issues', topic: 'Billing and payment issues',
    title: 'Ad Account Billing and Payment Issues: Operations Checklist',
    description: 'Prevent and resolve advertising billing issues by assigning ownership, reconciling charges, managing payment methods, and documenting authorization.',
    overview: 'Billing failures can stop campaigns and can also trigger broader integrity reviews. Reliable operations distinguish ordinary issuer declines from platform restrictions, unauthorized activity, unpaid balances, chargebacks, verification requests, and inconsistent ownership.',
    signals: ['Charges fail, remain pending, or do not match the platform ledger.', 'A balance becomes overdue or a billing profile is disabled.', 'Payment changes coincide with new administrators, locations, or unusual spend.'],
    actions: ['Compare platform transactions with issuer records and internal approvals.', 'Identify the legal owner and authorized users of every payment method.', 'Resolve issuer declines and balances before repeatedly retrying.', 'Escalate through official billing support with transaction IDs and redacted evidence.'],
    avoid: ['Do not use untraceable third-party cards.', 'Do not initiate chargebacks before reconciling legitimate spend.'],
    prevention: ['Assign billing owner and backup.', 'Set reconciliation alerts.', 'Restrict finance permissions.']
  },
  {
    silo: 'account-operations', slug: 'spending-limits', topic: 'Spending limits',
    title: 'Advertising Account Spending Limits: Budget, Billing, and Risk',
    description: 'Understand the difference between campaign budgets, account spending limits, billing thresholds, credit terms, and platform risk controls.',
    overview: '“Spending limit” can refer to several different controls: a user-set account cap, campaign budget, billing threshold, credit line, or a platform-imposed risk limit. Confusing them leads to unreliable forecasts and risky provider claims.',
    signals: ['Campaign budgets are allowed but delivery stops at an account-level cap.', 'The billing threshold changes independently of campaign settings.', 'A provider advertises a limit that cannot be confirmed in the account.'],
    actions: ['Name the exact control, owner, currency, renewal behavior, and evidence.', 'Check account, campaign, and billing settings separately.', 'Forecast cash flow based on actual charge timing and approved credit.', 'Escalate unexplained platform limits through official support rather than account substitution.'],
    avoid: ['Do not confuse a high budget setting with approved spend capacity.', 'Do not scale faster than payment and compliance operations can support.'],
    prevention: ['Use staged budget approvals.', 'Monitor spend and thresholds daily during scale.', 'Keep backup cash-flow plans.']
  },
  {
    silo: 'account-operations', slug: 'account-security', topic: 'Account security',
    title: 'Advertising Account Security: Access and Incident Controls',
    description: 'Protect ad accounts with named access, strong authentication, least privilege, login monitoring, payment controls, and an incident-response plan.',
    overview: 'Compromised advertising accounts can create unauthorized spend, malicious campaigns, stolen audiences, changed destinations, and enforcement that outlasts the intrusion. Security therefore belongs inside advertising operations, not only the IT department.',
    signals: ['Unknown users, locations, campaigns, payment changes, or API integrations appear.', 'Administrators share credentials or use personal accounts without recovery controls.', 'Departed staff or vendors retain access.'],
    actions: ['Secure the identity provider and email accounts before changing ad-platform settings.', 'Remove unknown access, rotate credentials and tokens, and review active sessions.', 'Pause unauthorized activity and preserve logs, IDs, invoices, and screenshots.', 'Notify the platform, payment issuer, and internal security owner through documented channels.'],
    avoid: ['Do not delete evidence before the incident is understood.', 'Do not restore access to shared credentials.'],
    prevention: ['Require phishing-resistant MFA where available.', 'Run quarterly access reviews.', 'Use role-based permissions and vendor offboarding.']
  },
  {
    silo: 'appeals-compliance', slug: 'policy-compliance', topic: 'Policy compliance',
    title: 'Advertising Policy Compliance: A Repeatable Review System',
    description: 'Build a cross-platform advertising compliance workflow covering offer eligibility, creative, claims, destination, targeting, evidence, and change management.',
    overview: 'Compliance is not a one-time creative check. Platforms review the whole experience, including advertiser identity, product eligibility, claims, targeting, destination content, payments, and behavior over time. A repeatable system makes ownership and evidence explicit.',
    signals: ['The same policy issue appears across several campaigns or platforms.', 'Landing-page or offer changes bypass the original approval process.', 'Teams cannot produce evidence for claims, licenses, or consent.'],
    actions: ['Create a policy matrix by platform, country, vertical, and funnel stage.', 'Assign reviewers for offer, creative, legal claims, destination, data, and targeting.', 'Archive the approved versions and supporting evidence.', 'Require re-review after material changes to price, product, claim, domain, or audience.'],
    avoid: ['Do not copy an approval from one platform or market to another.', 'Do not treat a live ad as proof of compliance.'],
    prevention: ['Track policy changes.', 'Train operators on escalation triggers.', 'Audit samples after launch.']
  },
  {
    silo: 'account-operations', slug: 'account-warming', topic: 'Account warming',
    title: 'Ad Account Warming: Compliant Launch Planning vs Evasion',
    description: 'Understand account warming as controlled operational ramp-up—not a method to evade review—and build a compliant launch plan based on readiness and evidence.',
    overview: '“Account warming” is often used loosely. A legitimate ramp-up means verifying the business, securing access, confirming billing, testing measurement, launching compliant campaigns, and increasing budgets only when operations are stable. It should never mean manufacturing behavior or bypassing enforcement.',
    signals: ['A team wants to scale before verification, billing, tracking, and policy review are complete.', 'A provider recommends artificial activity to make an account look older or trusted.', 'Budget increases exceed the team’s ability to monitor support, payments, and fulfillment.'],
    actions: ['Complete business, domain, access, and payment readiness first.', 'Launch a genuine, policy-reviewed campaign with measurable objectives.', 'Monitor delivery, user feedback, billing, account health, and destination performance.', 'Increase spend through normal budget controls based on real capacity and results.'],
    avoid: ['Do not generate fake activity or use warming to conceal account ownership.', 'Do not create accounts in advance to replace possible suspensions.'],
    prevention: ['Use a documented launch gate.', 'Scale against fulfillment and payment capacity.', 'Retain campaign QA records.']
  },
  {
    silo: 'appeals-compliance', slug: 'appeal-documents', topic: 'Appeal documents',
    title: 'Ad Account Appeal Documents: Evidence Package Checklist',
    description: 'Organize appeal documents for ad account reviews, including notices, identity, business records, payments, domains, qualifications, remediation, and access logs.',
    overview: 'The best document package is relevant, current, readable, and internally consistent. More files do not automatically create a stronger appeal; each item should answer a specific question about identity, ownership, authorization, eligibility, payment, or remediation.',
    signals: ['The platform requests a business license, identity, payment, domain, or industry document.', 'A previous submission failed because details did not match.', 'Several teams hold different pieces of the incident record.'],
    actions: ['Create an index linking every platform request to one or more authoritative documents.', 'Include the enforcement notice, IDs, timeline, correction log, and supporting records.', 'Check expiry, visibility, legal names, addresses, and translations before submission.', 'Redact unrelated sensitive information only where the platform permits.'],
    avoid: ['Do not alter, fabricate, or reuse documents from another entity.', 'Do not upload large unrelated archives that obscure the evidence.'],
    prevention: ['Maintain an encrypted verification pack.', 'Assign document owners.', 'Review records after organizational changes.']
  },
  {
    silo: 'account-operations', slug: 'personal-vs-agency-ad-accounts', topic: 'Personal vs agency ad accounts',
    title: 'Personal vs Agency Ad Accounts: Ownership and Control',
    description: 'Compare personal and agency ad account models through ownership, access, billing, support, data portability, governance, and exit risk.',
    overview: 'The useful distinction is not simply “personal” versus “agency”; it is who owns the advertiser, who controls the business assets, how access is granted, who pays, and what can be exported when the relationship ends. Platform-supported organizational access is safer than shared personal credentials.',
    signals: ['A founder-owned account depends on one personal identity.', 'An agency-owned account limits direct client administration or data control.', 'Billing and support sit with a different entity from the advertiser.'],
    actions: ['Map ownership and roles for the account, Page or profile, pixel, domain, audiences, catalog, and billing.', 'Evaluate continuity if a person leaves or an agency contract ends.', 'Use supported partner or manager access with named users.', 'Document data export, outstanding balance, refunds, and offboarding.'],
    avoid: ['Do not share personal login credentials.', 'Do not confuse agency access with agency ownership.'],
    prevention: ['Use business-controlled identity and recovery.', 'Review roles regularly.', 'Keep written asset ownership terms.']
  },

  {
    silo: 'agency-ad-accounts', slug: 'agency-ad-account-provider', topic: 'Agency ad account provider',
    title: 'How to Evaluate an Agency Ad Account Provider',
    description: 'Evaluate agency ad account providers through entity, ownership, platform access, billing, support, policy history, data control, and contract terms.',
    overview: 'A provider should be evaluated as a combination of technology access, media operations, finance, compliance, and counterparty risk. The core question is whether the relationship is transparent and supported—not whether the provider promises that restrictions cannot happen.',
    signals: ['The provider can identify its entity, account ownership, and supported access method.', 'Pricing separates spend, fees, tax, deposits, and refunds.', 'Support, policy responsibility, data, and termination are documented.'],
    actions: ['Verify the company, contract, references, platform relationship claims, and account ownership.', 'Request a permissions demonstration without asking for passwords.', 'Review billing reconciliation, deposit protection, refund timing, and dispute terms.', 'Test onboarding, reporting, support escalation, and offboarding before large spend.'],
    avoid: ['Do not send funds to an unrelated individual or unverifiable entity.', 'Do not accept “ban-proof” guarantees.'],
    prevention: ['Start with controlled spend.', 'Reconcile weekly.', 'Maintain an alternative continuity plan.']
  },
  {
    silo: 'agency-ad-accounts', slug: 'ad-account-rental', topic: 'Ad account rental',
    title: 'Ad Account Rental: Ownership, Compliance, and Business Risk',
    description: 'Understand the risks of renting advertising accounts, including unclear ownership, unsupported access, billing exposure, data loss, enforcement, and exit problems.',
    overview: '“Rental” can describe very different arrangements, from legitimate managed-service access to anonymous credentials for an account owned by someone else. The latter creates serious ownership, security, payment, and policy risk. A commercial label never overrides platform terms or enforcement history.',
    signals: ['Access is delivered through shared credentials, remote browsers, or undisclosed identities.', 'The renter cannot verify the account owner, billing entity, or support channel.', 'The offer is marketed as a replacement for a previously suspended account.'],
    actions: ['Ask whether access uses an official manager, partner, or Business Center relationship.', 'Document owner, advertiser, payment flow, data rights, restrictions, and termination.', 'Check whether using the account would misrepresent the advertiser or evade enforcement.', 'Prefer a transparent managed-service or client-owned structure.'],
    avoid: ['Do not rent accounts to bypass a platform suspension.', 'Do not place customer data or large balances in an account you cannot control.'],
    prevention: ['Use supported organizational access.', 'Keep client-owned measurement assets.', 'Perform counterparty due diligence.']
  },
  {
    silo: 'agency-ad-accounts', slug: 'pre-verified-ad-accounts', topic: 'Pre-verified ad accounts',
    title: 'Pre-Verified Ad Accounts: What Buyers Need to Verify',
    description: 'Assess pre-verified ad account offers by checking entity match, document legitimacy, ownership, access, billing, policy standing, and transfer restrictions.',
    overview: 'Verification belongs to a specific identity or business context. Buying access to an account verified for an unrelated entity can create misrepresentation and re-verification risk. The word “verified” does not prove ownership, policy standing, spend capacity, or suitability for your offer.',
    signals: ['Verification documents belong to a business unrelated to the advertiser.', 'The seller cannot explain whether ownership or business details may be changed.', 'The account is promoted as ready for any vertical or market.'],
    actions: ['Identify exactly what was verified and under which legal entity.', 'Confirm whether the advertiser, domain, payment owner, and intended offer match that entity.', 'Review access and transfer rules through the platform’s supported tools.', 'Plan for re-verification rather than relying on inherited status.'],
    avoid: ['Do not submit or purchase someone else’s identity documents.', 'Do not assume verification makes prohibited offers eligible.'],
    prevention: ['Verify the real advertiser.', 'Maintain current documents.', 'Use transparent agency authorization where applicable.']
  },
  {
    silo: 'agency-ad-accounts', slug: 'high-limit-ad-accounts', topic: 'High-limit ad accounts',
    title: 'High-Limit Ad Accounts: How to Validate Spending Claims',
    description: 'Validate high-limit ad account claims by distinguishing budget controls, billing thresholds, credit lines, historical spend, and platform risk limits.',
    overview: 'A high-limit claim is meaningful only when the limit is defined and visible to authorized users. Campaign budget capacity, account spending limits, payment thresholds, invoicing credit, and historical spend are not interchangeable—and none removes policy enforcement.',
    signals: ['The provider cannot name the specific limit or show it through authorized access.', 'Historical screenshots are used as proof of future spend capacity.', 'The account’s payment and advertiser entities do not match the client.'],
    actions: ['Define the limit, currency, reset period, owner, and conditions.', 'Verify current status inside the platform and contract.', 'Assess cash flow, refund risk, policy eligibility, and fulfillment capacity at the proposed scale.', 'Use a staged spend test with clear stop conditions.'],
    avoid: ['Do not prepay large deposits based only on screenshots.', 'Do not treat a high limit as protection from review.'],
    prevention: ['Scale legitimate account history.', 'Keep reliable payment operations.', 'Reconfirm limits before major launches.']
  },
  {
    silo: 'agency-ad-accounts', slug: 'multi-platform-agency-accounts', topic: 'Multi-platform agency accounts',
    title: 'Multi-Platform Agency Accounts: Governance Across Ad Networks',
    description: 'Design governance for agency accounts across Meta, Google, and TikTok with consistent ownership, access, billing, data, policy, and reporting controls.',
    overview: 'Multi-platform access can simplify procurement and reporting, but it also concentrates operational and counterparty risk. Each network still has different account structures, policies, billing, verification, and support paths, so one commercial agreement needs platform-specific schedules.',
    signals: ['One provider manages accounts, billing, or support across several networks.', 'Client data and measurement assets are distributed across provider-owned structures.', 'A shared issue could interrupt several acquisition channels at once.'],
    actions: ['Create a platform-by-platform ownership and access matrix.', 'Separate balances, invoices, credentials, pixels, audiences, and support cases.', 'Define service levels and escalation for each network.', 'Test exports and offboarding before consolidating critical spend.'],
    avoid: ['Do not use one generic access model for every platform.', 'Do not concentrate all measurement and cash balances without a continuity plan.'],
    prevention: ['Run cross-platform access reviews.', 'Keep independent performance records.', 'Maintain channel contingency plans.']
  },
  {
    silo: 'agency-ad-accounts', slug: 'ad-accounts-for-media-buyers', topic: 'Ad accounts for media buyers',
    title: 'Ad Accounts for Media Buyers: Access, Controls, and Accountability',
    description: 'Structure ad account access for media buyers using named roles, approval limits, billing controls, change logs, policy QA, and client ownership.',
    overview: 'Media buyers need enough access to execute campaigns without becoming the uncontrolled owner of identity, billing, or business assets. Good account design separates campaign operations from finance, security, policy approval, and ultimate client ownership.',
    signals: ['Buyers use named roles rather than shared admin credentials.', 'Budget and change approvals are defined by client and campaign.', 'Policy and destination reviews occur outside the individual buyer.'],
    actions: ['Grant the minimum role required for campaign and reporting tasks.', 'Define budget limits, approval thresholds, and emergency pause authority.', 'Log material changes to destinations, tracking, audiences, and spend.', 'Remove access promptly during role or vendor changes.'],
    avoid: ['Do not let one buyer control login recovery and payment ownership.', 'Do not use replacement accounts to hide policy incidents.'],
    prevention: ['Review access monthly.', 'Use peer review for sensitive launches.', 'Maintain client-controlled reporting.']
  },
  {
    silo: 'agency-ad-accounts', slug: 'ad-accounts-for-affiliate-marketers', topic: 'Ad accounts for affiliate marketers',
    title: 'Ad Accounts for Affiliate Marketers: Disclosure and Policy Risk',
    description: 'Manage affiliate ad account risk through offer eligibility, disclosures, claims evidence, landing-page transparency, tracking, and provider due diligence.',
    overview: 'Affiliate marketing is not a blanket exemption from advertising rules. Risk increases when the advertiser cannot substantiate product claims, hides the commercial relationship, uses misleading pre-landers, changes destinations, or lacks control over the merchant experience.',
    signals: ['The advertiser does not control or monitor the final merchant page.', 'Claims, pricing, testimonials, or availability differ across the funnel.', 'Tracking or redirects obscure the destination and responsible business.'],
    actions: ['Verify network, merchant, offer, market, and platform eligibility.', 'Document authorization to use brand assets and promote the offer.', 'Review every funnel step for accurate claims, disclosures, privacy, and contact information.', 'Monitor destination and offer changes continuously.'],
    avoid: ['Do not cloak or show reviewers a different funnel.', 'Do not use agency accounts to relaunch a prohibited offer.'],
    prevention: ['Keep an offer evidence file.', 'Use destination monitoring.', 'Pause campaigns when merchant pages change materially.']
  },
  {
    silo: 'agency-ad-accounts', slug: 'ad-accounts-for-dropshipping', topic: 'Ad accounts for dropshipping',
    title: 'Ad Accounts for Dropshipping: Commerce and Trust Checklist',
    description: 'Reduce dropshipping advertising risk through transparent merchant identity, accurate product claims, shipping, returns, customer support, and supplier controls.',
    overview: 'Dropshipping campaigns are evaluated through the same advertising and commerce standards as other retailers. Common risks arise from misleading product presentation, copied creative, unrealistic claims, hidden shipping timelines, weak refund terms, complaints, and unreliable suppliers.',
    signals: ['The landing page lacks clear business identity, contact, shipping, or return information.', 'Creative and product claims cannot be supported by the actual item.', 'Complaint, refund, delivery, or chargeback rates are rising.'],
    actions: ['Verify supplier, product, inventory signals, rights to creative, and fulfillment capability.', 'Publish accurate pricing, delivery estimates, returns, privacy, and contact details.', 'Order and inspect products before scaling claims or spend.', 'Monitor customer feedback and pause offers that cannot meet promises.'],
    avoid: ['Do not hide long delivery times or use false scarcity.', 'Do not move a non-compliant store to fresh accounts or domains.'],
    prevention: ['Use supplier service-level standards.', 'Audit product pages and support metrics.', 'Scale only within fulfillment capacity.']
  }
];

export const allArticles = articles;

export const getArticlesBySilo = (silo: string) =>
  allArticles.filter((article) => article.silo === silo);

export const getArticleUrl = (article: Article) =>
  `/${article.silo}/${article.slug}/`;
