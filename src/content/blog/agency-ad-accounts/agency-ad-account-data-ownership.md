---
silo: "agency-ad-accounts"
topic: "Agency ad account data ownership"
title: "Agency Ad Account Data Ownership: Portability Must Exist Before Exit"
description: "A governance framework for agency advertising data across platform accounts, pixels, audiences, catalogs, leads, creative, reports, consent, and portability."
overview: "A contract can say the client owns data while technical control remains with the agency. Real portability requires asset-specific permissions, lawful use, export paths, and tested offboarding."
publishedDate: 2026-07-22
updatedDate: 2026-07-22
---

“The client owns all data” is often the least operational sentence in an agency contract.

It does not identify the Google client account, Meta dataset, TikTok pixel, catalog, custom audience, lead form, API pipeline, creative source, or reporting warehouse—or whether any can move.

## Inventory data by asset

| Asset | Questions |
| --- | --- |
| Platform account history | Who controls access and export? |
| Pixel/dataset/tag | Which business owns it and where is it installed? |
| Audience/list | Source, consent, sharing, expiry, transfer limits? |
| Catalog/feed | System of record, rules, platform owner, product data? |
| Leads/messages | Recipient, retention, deletion, client access? |
| Creative | Source files, usage rights, creator license, post identity? |
| Reports/API data | Raw fields, delays, methodology, export, retention? |
| Experiments/conversions | Definitions, history, configuration ownership? |

Record platform IDs, controller, processor/recipient, purpose, client, agency, partner, retention, and exit action.

## Separate legal, technical, and practical control

The client may have contractual rights but no administrator. The platform may restrict transfer of an asset. An audience may be accessible but not lawfully reusable. A report export may omit the configuration needed to reproduce performance.

Document all three layers rather than saying “owned.”

## Minimize cross-client sharing

Shared data can improve scale but raises confidentiality, privacy, platform-policy, and exit problems. Require written purpose, lawful basis/consent where applicable, platform permission, client authorization, separation, and removal.

Google Ads API policy requires written client consent before certain transfers or redistribution of client-specific data. Equivalent transparency should guide every agency system.

## Design portable architecture

Prefer client-controlled core identity and measurement assets where feasible. Give the agency scoped access. Store campaign IDs, conversion definitions, feed documentation, creative sources, and reports in client-accessible systems. Maintain export and reconstruction runbooks.

Portability does not mean copying restricted audiences or personal data outside authorized purposes.

## Test before the relationship is urgent

Ask a client administrator to access the account, download a report, identify conversion configuration, inspect billing, find pixels/catalogs, and locate creative sources. Resolve gaps during the contract, not after termination.

## Offboard with deletion as well as delivery

Deliver agreed records and assets; transfer or reassign where supported; remove agency and subcontractor access; disable integrations; reconcile retained copies; and document deletion/retention obligations. Confirm from the client side.

## Use a composite portability case

An advertiser receives campaign exports but discovers the agency’s shared pixel, audience, product feed, and server-side conversion pipeline cannot move. “All campaign data” was technically true and operationally useless.

The lesson is sharp: portability is an architecture tested in advance, not a ZIP file delivered at exit.

## Maintain a data dictionary

For each asset, define the data fields, source system, platform identifier, controller or commercial owner, permitted users, retention rule, export method, and downstream dependencies. This prevents the word “data” from collapsing campaign settings, customer records, creative files, audiences, and agency know-how into one disputed bundle.

## Audit use as well as access

Permission to view client data does not automatically permit benchmarking, model training, cross-client audience creation, or reuse in case studies. Record the allowed purposes in the contract and technical design. Periodically inspect exports, shared drives, dashboards, and automation destinations for uses outside those purposes.

## Isolate shared assets deliberately

When a pixel, catalog, audience, page, or reporting warehouse serves more than one party, document segregation, error handling, and exit behavior. Shared architecture can improve efficiency, but it also makes deletion and attribution harder. New clients should not inherit unexplained data from previous relationships.

## Test practical portability

A portability test should recreate a sample campaign structure, export an agreed reporting period, identify non-exportable histories, transfer approved creative masters, and verify that the client can administer the destination assets. A download button is not proof that a successor can operate the system.

## Produce deletion evidence

After delivery, remove unauthorized local copies, revoke integrations, expire links and tokens, apply retention exceptions, and obtain confirmation from relevant subprocessors. Keep a closure record stating what was deleted, retained, anonymized, or remains inside the platform and why.

## Use a portability scorecard

Score critical assets on client administration, exportability, documentation, successor usability, external dependency, retention, and deletion evidence. Weight the score by business impact rather than file count. A client-owned creative folder cannot offset an agency-controlled pixel or domain that blocks continuity. Compare the score with the chosen [client-owned or agency-owned structure](/agency-ad-accounts/client-owned-vs-agency-owned-ad-accounts/), test it through a real [account migration exercise](/agency-ad-accounts/agency-account-offboarding-migration/), and include cross-platform dependencies in the [portfolio operating model](/agency-ad-accounts/multi-platform-agency-accounts/). The aim is to expose constraints early enough for the client to choose and price them knowingly.

## Official resources

- [Google Ads API policy and client data](https://support.google.com/adspolicy/answer/6169371?hl=en)
- [Google Ads ownership of client accounts](https://support.google.com/google-ads/answer/7456532?hl=en)
- [TikTok account and asset permissions](https://ads.tiktok.com/help/article/about-assets-and-asset-level-permissions?lang=en)
