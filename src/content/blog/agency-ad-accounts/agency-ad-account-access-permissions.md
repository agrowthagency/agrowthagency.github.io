---
silo: "agency-ad-accounts"
topic: "Agency ad account access and permissions"
title: "Agency Ad Account Permissions: Access Design Is Risk Architecture"
description: "A cross-platform framework for agency account access across managers, partners, roles, finance permissions, identity authorization, reviews, and offboarding."
overview: "Agency permissions determine who can change campaigns, money, identity, data, users, and account relationships. They should be designed by task and blast radius, not seniority or convenience."
publishedDate: 2026-07-22
updatedDate: 2026-07-22
---

Giving an agency “admin so everything works” is not onboarding. It is an undocumented risk decision.

Meta, Google, and TikTok expose different permission systems, but the governance problem is the same: grant enough capability for the contracted work without handing every operational task the power to change ownership, finance, or identity.

## Map effective access, not role labels

Google manager-account capability depends on user level and whether the manager is the client account’s owner. TikTok combines Business Center base roles, advanced finance roles, account/asset permissions, and partner relationships. Meta access can run through people, Business Portfolios, partner assets, and ad-account roles.

Record:

- User or partner organization.
- Platform role at each hierarchy level.
- Assigned accounts and assets.
- Finance and billing capability.
- Ability to add users, partners, or managers.
- Ability to use public identities and data assets.
- Start date, requester, approver, purpose, and expiry/review date.

## Design permissions by task

| Task | Minimum design principle |
| --- | --- |
| Reporting | Read/analyst access without edit or finance |
| Campaign management | Scoped edit access to named advertisers |
| Billing reconciliation | Finance visibility without hierarchy control |
| Payment management | Named finance owner and approval |
| User/partner management | Small client-controlled admin group |
| Public identity use | Explicit Page/TikTok/Spark authorization |
| Data sharing | Purpose, client permission, and asset scope |

Do not solve one missing button with permanent administrator access.

## Prefer formal relationships over credential sharing

Google manager links, TikTok Business Center partner requests, and Meta role/business-asset assignment allow agencies to operate without logging in as the client. Shared personal profiles and generic credentials erase accountability and complicate security recovery.

TikTok’s current access process asks an agency seeking admin or operator permissions whether it is the primary media agency. The answer should reflect the real commercial relationship.

## Govern privilege changes

Require tickets and second approval for admins, owner-manager status, finance roles, partner addition, identity linkage, data sharing, payment methods, and transfers. Verify the platform ID and downstream impact.

Monitor new invitations, users, managers, partners, and finance permissions. Reconcile changes with approved records.

## Review the agency boundary

The agency may assign its own staff after receiving partner or manager access. The contract should require named accountability, strong authentication, timely leaver removal, subcontractor disclosure, incident reporting, and minimum privilege.

Client review should inspect effective asset assignments, not only the agency’s top-level presence.

## Offboard across every path

Remove people, manager links, partner assignments, finance roles, public-identity permissions, data access, support access, shared tools, and integrations. Confirm from the client side and retain an audit record.

Maintain at least two trusted client-controlled administrators for critical assets, but keep privileged groups small. A former employee kept “as backup” is not resilience.

Use [ad accounts for media buyers](/agency-ad-accounts/ad-accounts-for-media-buyers/) for execution controls and [agency ad account security](/agency-ad-accounts/agency-ad-account-security/) for privileged-path protection.

## Maintain a role catalog

A reusable role catalog turns access reviews into evidence rather than memory. For each platform role, record the business tasks it permits, whether it can change billing or users, the approving owner, and the maximum review interval. Map internal job titles to this catalog instead of granting whichever platform label sounds closest.

The catalog should also identify combinations that create hidden privilege. A person who can publish ads and edit the destination may be able to release an unreviewed claim even if neither permission looks administrative alone.

## Separate duties at sensitive points

High-impact actions deserve a second approver: adding administrators, changing payment methods, connecting new data sources, raising material budgets, or assigning a new partner. Small teams can preserve speed with documented after-the-fact review for genuine emergencies, but “small team” should not become permanent self-approval.

## Review permission drift

Run a recurring comparison between the approved roster and effective platform access. Flag dormant users, direct grants that bypass the business container, unexpected partner organizations, service accounts without owners, and roles broader than the current assignment. Track closure time, not just the number of findings.

## Create controlled emergency access

Emergency access should have a named incident, narrow purpose, expiration time, and activity review. A shared password or permanent backup administrator is not a break-glass process; it is an unmonitored privileged path. Test the emergency route before an account incident so recovery does not depend on an unavailable former employee.

## Measure access-control health

Track privileged-user count, dormant access, direct grants outside approved containers, unowned service accounts, overdue reviews, leaver-removal time, emergency-access events, and exceptions by client. Interpret the figures with scale and risk: zero emergency events may mean resilience or an unused process. Sample real users and ask them to demonstrate the task their role supports. The useful outcome is not a perfect roster snapshot but confidence that privilege remains justified as teams and assignments change.

## Official resources

- [Google Ads manager-account user access](https://support.google.com/google-ads/answer/9977851?hl=en)
- [TikTok account and asset permissions](https://ads.tiktok.com/help/article/about-assets-and-asset-level-permissions?lang=en)
- [Meta ad account roles](https://www.facebook.com/help/messenger-app/195296697183682/)
