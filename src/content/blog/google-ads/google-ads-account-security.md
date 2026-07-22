---
silo: "google-ads"
topic: "Google Ads account security"
title: "Google Ads Account Security: Protect the Control Paths, Not Just the Login"
description: "An operational framework for Google Ads account security covering users, managers, authentication, OAuth, billing, detection, recovery, and evidence."
overview: "Google Ads account security extends beyond a password. Direct users, manager hierarchies, email, OAuth applications, billing permissions, scripts, and recovery channels can all change spend or advertiser identity."
publishedDate: 2026-07-10
updatedDate: 2026-07-10
---

A Google Ads account can have perfect campaign hygiene and still become a distribution system for someone else’s ads within minutes.

The usual explanation—“a login was hacked”—is too narrow. An attacker may enter through an administrator’s email, an inherited manager account, an OAuth application, a former agency user, a compromised workstation, or a recovery channel. Once inside, the attacker can add managers, launch campaigns, change destinations, raise budgets, alter billing, or remove legitimate users.

Google Ads account security is therefore the governance of every path that can change advertising activity, not merely the strength of one password.

## Map the control surface before hardening it

Begin with an access graph:

- Direct account users and their access levels.
- Manager accounts in the hierarchy.
- Related managers outside the expected hierarchy.
- Administrative owner and upstream ownership inheritance.
- Google Accounts and email addresses behind each user.
- OAuth applications, API credentials, scripts, and automation tools.
- Billing users, payments profile administrators, and paying managers.
- Merchant Center, Analytics, tag management, feeds, and other linked products.
- Recovery email, recovery phone, and organization-managed identity controls.

The graph should identify a named human or controlled service behind every privileged node. Shared inboxes, shared credentials, unidentified vendor accounts, and former employees are exceptions to resolve, not normal operating shortcuts.

Google’s current [security best practices](https://support.google.com/google-ads/answer/12864492?hl=en) emphasize minimum necessary access, review of related managers, and stronger authentication controls. Apply those principles to the whole graph.

## Manager access is a security boundary

MCC structures multiply reach. A privileged manager user may be able to modify many client accounts. Ownership can add further administrative capabilities, and access may flow down a hierarchy.

This creates an asymmetric risk: one weak manager identity can expose a portfolio whose individual client users all use strong authentication.

For every manager relationship, document:

- Business purpose.
- Owner and approver.
- Accounts in scope.
- Required access level.
- Whether ownership is necessary.
- Review date.
- Offboarding condition.

Do not grant manager ownership merely because it is convenient. Google distinguishes linking from ownership and provides several user levels for different responsibilities. Administrative privileges should match an explicit need.

Review the Related managers view, not only the expected hierarchy. An unfamiliar manager link is a security event until explained.

## Authentication must protect the person behind the privilege

Two-Step Verification reduces risk, but it is not the entire identity control. A user can approve a malicious OAuth application, reuse a compromised password on email, accept a fraudulent support request, or leave an authenticated device unattended.

Privileged-user standards should include:

- Organization-managed accounts where practical.
- Strong multifactor authentication resistant to phishing for administrators.
- Protected recovery channels.
- No credential sharing.
- Device security and session review.
- Approved password-management practices.
- Verification of unexpected support contacts and login prompts.
- Immediate access removal during offboarding.

Separate daily campaign work from the most sensitive administrative actions where the organization’s model supports it. Not every buyer needs permission to add users or change billing.

## Detection begins with change visibility

Security controls fail silently when nobody monitors account change.

Define alerts and review procedures for:

- New users or manager links.
- Access-level or ownership changes.
- Sudden budget increases.
- New campaigns in unfamiliar languages or geographies.
- Destination or tracking-template changes.
- New payment methods or billing contacts.
- Automated rules, scripts, and API activity.
- Removal of legitimate administrators.
- Policy disapprovals inconsistent with normal business activity.

Maintain a baseline of expected accounts, domains, users, managers, countries, and spend patterns. Detection is faster when the reviewer can compare activity to a known state instead of deciding from memory.

Preserve change history and alerts. If activity is unauthorized, timestamps, customer IDs, manager IDs, altered budgets, and user changes are evidence for both containment and recovery.

## A compromised account requires containment before optimization

Google’s current [compromised-account process](https://support.google.com/google-ads/answer/9355975?hl=en) may involve temporary suspension, campaign pausing, removal of compromised users, unlinking unauthorized managers, administrator reauthentication, an account activity change log, cleanup consent, and possible reimbursement after recovery requirements are met.

When compromise is suspected:

1. Report the compromised account through the current Google Ads route.
2. Secure the affected Google Accounts and their email and recovery channels.
3. Preserve change history, alerts, billing records, and suspicious messages.
4. Inventory unauthorized users, managers, campaigns, rules, destinations, and payment changes.
5. Coordinate one incident owner across advertising, IT/security, finance, and the agency.
6. Review Google’s activity change log carefully before consenting to cleanup.
7. Validate the restored state before relaunch.

Do not focus first on deleting fraudulent campaigns. Removing visible objects without preserving their identifiers and history can weaken the investigation. Do not file a chargeback before finance distinguishes unauthorized activity from legitimate unsettled charges and understands the platform process.

This is operational guidance, not legal or banking advice. Payment disputes should be coordinated with the organization’s financial and legal owners.

## A composite scenario: the legitimate login that became a portfolio incident

Consider a composite agency whose senior buyer has Administrative access to the MCC. The buyer uses Two-Step Verification, but authorizes an apparently legitimate reporting application through OAuth. The application is compromised.

An attacker links another manager, creates campaigns in several client accounts, changes tracking templates, and raises budgets. The agency initially resets the buyer’s password and deletes one campaign. Unauthorized activity continues through the manager and application paths.

The correct response revokes the application, secures the underlying identity, maps every affected account, preserves the change history, removes unauthorized relationships through the recovery process, reconciles spend, and notifies clients using one verified incident timeline.

The password was only one control path. Treating it as the entire incident extended the compromise.

## Recovery is not complete when ads resume

After access is restored, conduct a controlled validation:

- Confirm every direct user and manager.
- Confirm ownership and billing roles.
- Revoke unknown OAuth applications and credentials.
- Review campaigns, assets, rules, scripts, budgets, and destinations.
- Check linked products and tag infrastructure.
- Reconcile charges and record reimbursement status.
- Review policy actions caused by unauthorized content.
- Rotate relevant credentials and close the initial entry path.

Then write a short post-incident review: initial access vector, detection gap, affected scope, recovery actions, financial impact, policy impact, and controls added. Preserve it for future verification, billing, or appeal questions.

## Security is a property of the operating model

An account is not secure because no suspicious campaign is visible today. It is secure when every privileged path has an owner, access is proportionate, material changes are observable, and the organization can recover without guessing who controls what.

As advertising stacks become more connected, account security and policy compliance converge. A compromised identity can produce malicious destinations, false representation, billing disputes, and account enforcement. The security program must therefore protect the advertiser’s ability to prove which activity was authorized.

Use the [Google Ads billing suspension framework](/google-ads/billing-suspension/) when unauthorized activity creates a payment enforcement issue. For manager-level blast radius and client relationships, continue with the [Google Ads MCC suspension analysis](/google-ads/mcc-suspension/). If stakeholders describe the outcome only as a “ban,” first use the [banned-versus-suspended distinction](/google-ads/google-ads-account-banned/) to identify the actual security and enforcement state.

## Official references

- [Secure your Google Ads account: Best Practices](https://support.google.com/google-ads/answer/12864492?hl=en)
- [What to do if your Google Ads account is compromised](https://support.google.com/google-ads/answer/9355975?hl=en)
- [Manager account user access levels](https://support.google.com/google-ads/answer/9977851?hl=en)
- [Ownership of client accounts](https://support.google.com/google-ads/answer/7456532?hl=en)
