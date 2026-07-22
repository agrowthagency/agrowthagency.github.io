---
silo: "agency-ad-accounts"
topic: "Agency ad account billing and reconciliation"
title: "Agency Ad Account Billing: Every Client Charge Must Reconcile to the Platform"
description: "A financial governance framework for agency ad account billing across payers, payment profiles, credit lines, prefunding, fees, invoices, and reconciliation."
overview: "Agency billing connects platform spend to legal payer responsibility, client invoices, taxes, currency, credits, and campaign continuity. It should remain traceable at transaction and account level."
publishedDate: 2026-07-22
updatedDate: 2026-07-22
---

An agency can report campaign performance perfectly and still operate a financial system nobody can audit.

The failure appears when a card is charged, a client disputes spend, a credit line changes, or offboarding reveals that the account and invoice live under different entities.

## Document the billing architecture

For every client and platform, record advertiser ID, account controller, legal advertiser, platform payer, payment method or profile, billing option, currency, tax entity, agency invoice recipient, fee basis, budget owner, reconciliation owner, and offboarding responsibility.

Google monthly invoicing can use manager-level billing setups and a paying manager; TikTok centralizes payments and allocations through Business Center in eligible configurations; Meta billing connects payment settings to ad-account permissions and stored methods. Do not flatten these into “agency billing.”

## Separate money concepts

| Term | Meaning |
| --- | --- |
| Media budget | Planned campaign delivery |
| Platform spend | Amount recorded by the network |
| Billing threshold | Charge trigger, not maximum spend |
| Credit line/monthly invoicing | Approved payer relationship and obligation |
| Prefunding | Client funds held before platform spend |
| Service fee | Agency compensation separate from media |
| Credit/refund | Adjustment whose timing and cash treatment need reconciliation |

Use the exact platform term in contracts and reports.

## Maintain linked ledgers

The platform ledger should contain account, transaction/invoice reference, service period, currency, tax, credits, and payer. The client ledger should map those records to authorized budget, campaign period, agency fees, conversion, tax, and payment status.

Every client invoice should reconcile to platform evidence without exposing other clients. Shared or consolidated invoices need an allocation schedule.

## Make fees and differences visible

Google’s third-party policy requires transparency about Google advertising cost and separate management fees. That principle should govern every platform: distinguish media, fee, tax, foreign exchange, financing, and other agreed charges.

Never present a provider markup as platform spend.

## Govern credit and prefunding

Record whose credit line is used, client allocation, repayment obligation, default rules, unused funds, insolvency treatment, and what happens if the platform or provider changes eligibility. Large prefunded balances create counterparty exposure.

Client money should not silently fund another advertiser. Shared pools require caps, alerts, approval, and account-level reconciliation.

## Handle disputes and unauthorized activity

Before a charge dispute, match platform, bank, agency, and client records. Check other accounts, thresholds, delayed settlement, taxes, provider fees, and compromise. Coordinate genuine unauthorized activity with security and platform support.

This is operational information, not legal or financial advice. Contract, tax, and trust-account questions belong with qualified owners.

## Close billing at exit

Confirm final delivery, later charges, balances, invoices, refunds, credits, payment methods, billing transfer, finance permissions, and retention. Google documents external billing transfers for agency changes under monthly invoicing; other platforms have different constraints.

An account relationship ends only when access, assets, and money all reconcile.

## Govern payment transitions

Changing a card, payer, invoice profile, or billing setup can interrupt delivery even when campaign settings do not change. Treat the transition as a release: identify the effective date, current balance, pending charges, fallback payer, approval owner, and validation step. Avoid switching ownership, currency, and payment responsibility in one window unless the platform requires it.

## Allocate shared credit transparently

When an agency facility covers several clients, keep a subledger for committed capacity, consumed spend, disputed amounts, and remaining headroom by client. No client should infer that an upstream credit line is reserved solely for them. Define what happens when another client’s dispute or late payment reduces shared capacity.

## Run a disciplined monthly close

A useful close compares platform delivery, platform billing, agency invoice, client prepayment, taxes, credits, and refunds. Differences receive reason codes—timing, currency, invalid traffic credit, manual adjustment, or error—and an owner. The reconciliation should be reproducible from retained evidence rather than a spreadsheet overwritten each month.

## Use control dates, not vague frequency

Set exact checkpoints: daily anomaly review for high-spend accounts, weekly cash and capacity review, month-end reconciliation, and quarterly payer-access audit. Tie each checkpoint to an artifact and escalation threshold. This converts “we monitor billing” into a control a client can inspect.

In a composite case, an agency saw platform spend rise while its client invoice stayed flat. The cause was neither fraud nor free credit: one account had moved to a different billing setup mid-month. A linked-ledger close found the orphaned charges before the contractual dispute window expired.

## Publish a reconciliation certificate

For each close, record the delivery period, platform account and payer, source reports, platform charges, taxes, credits, agency fees, client invoices, prefunding movement, unresolved differences, and approvers. Compare available capacity with the risk controls behind any [high-limit account claim](/agency-ad-accounts/high-limit-ad-accounts/), and require the [provider’s commercial model](/agency-ad-accounts/agency-ad-account-provider/) to explain every upstream fee or balance. Attach stable evidence rather than unauditable totals. Keep later adjustments linked to the original period and carry unsettled amounts into the [financial offboarding checklist](/agency-ad-accounts/agency-account-offboarding-migration/) instead of silently altering a closed statement.

## Official resources

- [Google Ads manager billing setups](https://support.google.com/google-ads/answer/9357347?hl=en)
- [Google Ads billing transfers](https://support.google.com/google-ads/answer/9357343?hl=en)
- [Google third-party policy](https://support.google.com/adspolicy/answer/6086450?hl=en)
- [TikTok Agency Business Center FAQs](https://ads.tiktok.com/help/article/agency-business-center-faq?lang=en)
