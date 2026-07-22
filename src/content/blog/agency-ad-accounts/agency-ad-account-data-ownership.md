---
silo: "agency-ad-accounts"
topic: "Agency ad account data ownership"
title: "Agency Ad Account Data Ownership: Portability Must Exist Before Exit"
description: "A governance framework for agency advertising data across platform accounts, pixels, audiences, catalogs, leads, creative, reports, consent, and portability."
overview: "A contract can say the client owns data while technical control remains with the agency. Real portability requires asset-specific permissions, lawful use, export paths, and tested offboarding."
publishedDate: 2026-07-22
updatedDate: 2026-07-22
---

“The client owns all data” is often the least practical sentence in an agency contract.

It does not identify the Google client account, Meta dataset, TikTok pixel, catalog, custom audience, lead form, API pipeline, creative source, or reporting warehouse—or whether any can move.

## List each type of data and asset

| Asset | Questions |
| --- | --- |
| Platform account history | Who controls access and export? |
| Pixel/dataset/tag | Which business owns it and where is it installed? |
| Audience/list | Source, consent, sharing, expiry, transfer limits? |
| Catalog/feed | Main source of information, rules, platform owner, product data? |
| Leads/messages | Recipient, retention, deletion, client access? |
| Creative | Source files, usage rights, creator license, post identity? |
| Reports/API data | Raw fields, delays, methodology, export, retention? |
| Experiments/conversions | Definitions, history, configuration ownership? |

For each item, record its platform ID, owner, users, purpose, retention period, and what should happen when the agency relationship ends.

## Check who controls each asset in practice

The contract may say the client owns an asset even though the client has no administrator access. The platform may also prevent an asset from being transferred. Some audiences can be viewed but cannot legally be reused, and an exported report may omit settings needed to reproduce the results.

Record the legal owner, the account with technical control, and the person who can actually use or transfer the asset. The word “owned” is not enough.

## Avoid sharing data between clients

Sharing data may save time, but it creates privacy, confidentiality, policy, and handover risks. Before sharing anything, document the purpose, get the required permission or consent, keep each client's data separate, and define when it must be removed.

Google Ads API policy requires written client consent before certain transfers or redistribution of client-specific data. Equivalent transparency should guide every agency system.

## Make sure the client can take over

Whenever possible, the client should own the main advertising and tracking assets. The agency should receive only the access it needs to do its work.

Store campaign IDs, conversion settings, product feed instructions, original creative files, and reports somewhere the client can access them. Keep clear instructions for exporting the data and setting the system up again.

Portability does not mean copying restricted audiences or personal data outside authorized purposes.

## Test access before a problem happens

Do not wait until the contract ends to discover that the client cannot access its own assets. Ask a client administrator to log in, download a report, review conversion tracking, check billing, find pixels and catalogs, and locate the original creative files.

Fix anything that is missing or inaccessible while the agency relationship is still active.

## Transfer the assets and remove old access

When the client leaves, deliver all agreed files, reports, and assets. Transfer ownership where the platform allows it.

Then remove access for agency employees and subcontractors, disconnect old integrations, and review any client data the agency still holds. Ask the client to confirm that it can access and manage everything from its side.

## What can go wrong when a client changes agencies

An advertiser receives campaign exports but discovers the agency’s shared pixel, audience, product feed, and server-side conversion pipeline cannot move. “All campaign data” was technically true and useless in practice.

The lesson is sharp: portability is a setup tested in advance, not a ZIP file delivered at exit.

## Keep a clear record of every asset

For each asset, record what it contains, where it comes from, its platform ID, who owns it, who may use it, how long it is kept, and how to export it. Also list any other system that depends on it.

This prevents campaign settings, customer records, creative files, audiences, and agency knowledge from being treated as one vague bundle called “data.”

## Check how client data is being used

Permission to view client data does not automatically allow an agency to use it for benchmarking, AI model training, audiences for other clients, or case studies. State the allowed uses in the contract and system settings.

Regularly check exports, shared drives, dashboards, and automated workflows to make sure the data is not being used for another purpose.

## Isolate shared assets deliberately

When a pixel, catalog, audience, page, or reporting warehouse serves more than one party, document separation, error handling, and exit behavior. Shared setup can improve efficiency, but it also makes deletion and attribution harder. New clients should not inherit unexplained data from previous relationships.

## Test whether another agency can take over

Test the handover with a small example. Recreate part of a campaign, export an agreed reporting period, list anything that cannot be exported, transfer the approved original creative files, and confirm that the client can manage the destination accounts and assets.

A download button does not prove that another agency can run the system.

## Record what was deleted and what was kept

After the handover, delete local copies that are no longer authorized. Remove old integrations, links, and access tokens. Ask relevant service providers to confirm their actions.

Keep a final record showing what was deleted, kept, anonymized, or left inside the platform, together with the reason.

## Use a simple handover scorecard

Score critical assets on client administration, exportability, documentation, whether a new agency can use it, external dependency, retention, and deletion evidence. Weight the score by business impact rather than file count. A client-owned creative folder cannot offset an agency-controlled pixel or domain that blocks the client from continuing its work. Compare the score with the chosen [client-owned or agency-owned structure](/agency-ad-accounts/client-owned-vs-agency-owned-ad-accounts/), test it through a real [account migration exercise](/agency-ad-accounts/agency-account-offboarding-migration/), and include cross-platform dependencies in the [portfolio management approach](/agency-ad-accounts/multi-platform-agency-accounts/). The aim is to expose constraints early enough for the client to choose and price them knowingly.

## Official resources

- [Google Ads API policy and client data](https://support.google.com/adspolicy/answer/6169371?hl=en)
- [Google Ads ownership of client accounts](https://support.google.com/google-ads/answer/7456532?hl=en)
- [TikTok account and asset permissions](https://ads.tiktok.com/help/article/about-assets-and-asset-level-permissions?lang=en)
