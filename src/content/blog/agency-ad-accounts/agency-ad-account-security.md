---
silo: "agency-ad-accounts"
topic: "Agency ad account security"
title: "Agency Ad Account Security: The Client Graph Is the Attack Surface"
description: "A cross-platform security framework for agencies across manager hierarchies, Business Centers, partners, identities, finance, detection, and recovery."
overview: "An agency login can reach many clients, public identities, payment methods, and data assets. Security must govern the complete relationship graph, not one password or advertiser account."
publishedDate: 2026-07-22
updatedDate: 2026-07-22
---

Agency scale converts one compromised operator into a portfolio event.

A user may access a Google manager hierarchy, Meta Business Portfolios, TikTok Business Centers, Pages, TikTok identities, pixels, catalogs, payment functions, and support cases. The attack surface is the union of those relationships.

## Map privileged paths

Inventory users, manager accounts, Business Centers/Portfolios, partners, client advertisers, public identities, domains, pixels/datasets, catalogs, apps, audiences, payment profiles/methods, integrations, and recovery channels.

Record client owner, agency owner, role, scope, authentication, device policy, start/review date, and offboarding action.

## Minimize blast radius

- Keep small client-controlled and agency-controlled admin groups.
- Use named roles and partner/manager links instead of shared credentials.
- Separate finance and hierarchy administration from campaign work.
- Scope staff to assigned clients.
- Use strong authentication and controlled recovery channels.
- Review upstream and subcontractor access.
- Remove dormant users and partners promptly.

TikTok recommends at least two valid client-controlled Business Center admins while limiting admin access. Google owner-manager privileges can extend transitively through a hierarchy. Design both continuity and concentration consciously.

## Detect against expected operation

Alert on new users, managers, partners, identities, payment methods, domains, markets, budgets, campaigns, or spend outside approved records. Compare platform changes with HR, client inventory, campaign plans, and finance.

Every alert needs an owner and response time. Notifications in a shared inbox are not monitoring.

## Contain a multi-client incident

1. Preserve IDs, times, users, ads, transactions, and notices.
2. Secure trusted email, devices, credentials, authentication, and recovery.
3. Remove unauthorized access while retaining evidence.
4. Pause unauthorized spend and identity use.
5. Identify every client and asset the actor could reach.
6. Notify affected client, finance, security, privacy/legal, and platform contacts.
7. Reconcile charges and policy consequences separately.

Do not put a new payment method into an exposed account or delete unauthorized campaigns before preserving the record.

## Govern subcontractors

Require legal identity, platform business/manager IDs, named users, security controls, staff changes, incident notification, evidence cooperation, and offboarding. A white-label provider should not remain an invisible privileged path.

## Preserve forensic and privacy boundaries

Store personal, identity, session, financial, and client data in restricted incident locations. Separate clients while retaining a central shared-system timeline. Escalate possible data exposure beyond the media team.

## Test recovery

Run a scenario with the primary admin unavailable, unknown spend after hours, several affected clients, and a compromised subcontractor. Confirm who can pause, remove access, notify, contact platforms, and reconcile finance.

The agency is recovered when every critical path can be explained and controlled—not merely when campaigns resume.

## Govern privileged access as a lifecycle

Every administrator, finance user, integration, API token, and recovery method needs an owner, business purpose, grant date, review date, and removal condition. Approval should occur before access, while activity review and recertification happen afterward. A current roster without grant evidence cannot show whether privilege was justified.

## Define client notification boundaries

The incident plan should specify what triggers client notice, which facts can be shared, who approves the message, and how updates are delivered. Early notice may be necessary before the root cause is known; distinguish confirmed facts, working hypotheses, containment actions, and client decisions so urgency does not create misinformation.

## Protect forensic boundaries

Collect logs and screenshots that support investigation, but avoid copying one client’s campaign, customer, or billing data into another client’s case. Use case-specific folders, restricted permissions, retention rules, and a record of evidence transfers. Security investigation does not suspend confidentiality obligations.

## Run tabletop exercises

Test scenarios such as a compromised buyer, malicious destination edit, unauthorized payment change, provider-wide outage, or former contractor retaining access. Measure time to identify affected assets, freeze risky activity, reach client owners, preserve evidence, and restore a trusted administrator.

## Validate after recovery

Password resets alone do not close an incident. Recheck users, partners, billing, public identities, pixels, catalogs, domains, automation, ads, destinations, and recovery channels. Monitor for recurrence and formally accept residual risk before returning to normal operating privileges.

## Maintain a security assurance view

Report strong-authentication coverage, privileged users, unresolved access exceptions, critical integrations, anomalous changes, leaver-removal time, incident age, recovery-test results, and corrective-action closure. Show the client only its relevant detail while agency leadership sees portfolio dependencies. Trends matter more than a single green status. A rising number of orphaned tokens or late access reviews should trigger intervention before it becomes an account compromise.

## Official resources

- [Google Ads manager access levels](https://support.google.com/google-ads/answer/9977851?hl=en)
- [TikTok Business Center security](https://ads.tiktok.com/help/article/best-practices-for-securing-your-business-center?lang=en)
- [Meta ad account roles](https://www.facebook.com/help/messenger-app/195296697183682/)
