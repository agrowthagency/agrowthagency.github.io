---
silo: "meta-ads"
topic: "Meta business verification"
title: "Meta Business Verification: Make Identity Match the Asset Graph"
description: "A practical framework for Meta business verification across legal identity, domains, documents, authorization, business assets, and failed reviews."
overview: "Meta business verification is not a badge or policy exemption. It is an identity-control process that should connect the legal organization, contact channels, domain, operators, and business assets."
publishedDate: 2026-07-21
updatedDate: 2026-07-21
---

Meta business verification is often approached as a document upload task. A team finds a registration certificate, enters a name, and expects approval. That approach fails when the document is genuine but the wider business record describes several different organizations.

Verification should be treated as reconciliation. Meta needs to understand which legal entity is responsible, how it can be contacted, which domain represents it, who is authorized to act, and how that identity relates to the assets under the Business Portfolio.

## Verification does not certify advertising compliance

A verified business can still publish a rejected ad, lose access, encounter billing restrictions, or face enforcement. Verification does not transfer to unrelated entities and should not be marketed as immunity, trust credit, or guaranteed account stability.

Keep four concepts separate:

- **Legal existence:** the entity appears in authoritative records.
- **Operational authority:** the submitting person is allowed to act for it.
- **Asset relationship:** Pages, domains, accounts, and partners connect coherently to it.
- **Policy standing:** current activity follows applicable standards.

Evidence in one category cannot automatically prove another.

## Build the identity record first

Create one canonical table before entering data in a form.

| Field | Required internal answer |
| --- | --- |
| Legal name | Exact registered entity, including suffix |
| Registration | Jurisdiction, identifier, and current status |
| Address | Physical or registered address supported by records |
| Phone/email | Channels controlled by the organization |
| Domain | Website operated by or clearly connected to the entity |
| Authorized submitter | Named person, role, and authority |
| Brand relationship | Ownership, license, franchise, or agency arrangement |
| Business assets | Portfolio, Pages, ad accounts, pixels, catalogs, and apps in scope |

Normalize transliteration, abbreviations, suite numbers, legacy names, and parent/subsidiary relationships. Do not alter documents. Explain legitimate differences with supporting evidence.

## The asset graph can contradict the form

A verification submission may identify one company while the website names another, the Page represents a brand owned by a third, the domain email belongs to an agency, and payment comes from an unrelated party. Each relationship may be lawful. Together, without explanation, they are difficult to validate.

Map these roles separately:

1. Legal advertiser.
2. Brand owner.
3. Website or domain operator.
4. Product or service provider.
5. Agency or technical operator.
6. Payer.

For every difference, keep the contract, authorization, corporate record, license, or invoice that establishes the relationship. An agency should not submit its own identity as though it were the client merely because it controls the interface.

## Diagnose a failed verification without document roulette

When verification fails, preserve the notice and determine which field is unresolved. Check whether documents are current, legible, complete, and issued by an acceptable authority; whether the submitted values match them exactly; and whether the organization controls the verification channel.

Do not respond by uploading a series of unrelated documents or changing fields until one combination passes. That destroys the audit trail and can create new inconsistencies. Build a comparison table showing the submitted value, source record, discrepancy, correction, and evidence.

If access or security changed during the process, investigate [Meta ad account security](/meta-ads/meta-ad-account-security/). If the verification issue sits inside a portfolio-wide restriction, use [Meta Business Manager restricted](/meta-ads/business-manager-restricted/) to audit the broader asset graph.

## Verification should improve governance

After completion, store the verified identity, evidence date, portfolio ID, domains, responsible owner, and renewal or change triggers. Revisit the record after a legal name change, merger, domain migration, agency transition, or material change in the operating model.

Do not let a former employee, vendor, or agency remain the only person who understands the verification record. The business should be able to reproduce its own identity and authority without depending on an external account seller.

## Select evidence by proposition

Different documents prove different facts. A registry extract may establish legal name and registration, a utility or bank document may support an address, a domain record or controlled email may demonstrate a contact path, and a contract may establish an agency or brand relationship.

Create an evidence map before uploading:

| Proposition | Primary source | Supporting source | Known discrepancy |
| --- | --- | --- | --- |
| Entity exists | Current government/business registry | Formation document | Legacy trading name |
| Address | Accepted current business record | Lease or account record | Mailing vs operating site |
| Domain relationship | Site ownership/control record | Branded email and contract | Agency manages DNS |
| Submitter authority | Employment or board authorization | Named role/access record | External counsel or agency submits |
| Brand relationship | Trademark, license, or agreement | Public business disclosure | Brand differs from legal name |

Do not assume a large pile of documents is stronger. Evidence should be current, legible, relevant, and consistent with the exact field it supports.

## Coordinate corporate changes

Mergers, acquisitions, new subsidiaries, rebrands, address changes, and domain migrations can make a previously coherent record stale. Before changing portfolio details, map the old and new entity, effective date, assets, contracts, payment responsibility, and public disclosures.

Keep evidence of continuity. A sudden name, domain, payer, and administrator change without a documented corporate event is harder to explain than a controlled transition with records.

## Distinguish advertiser from beneficiary and provider

In complex businesses, the entity paying for advertising may promote a brand owned by a parent, generate leads for licensed local providers, or use an agency to build the destination. State who receives customer payment, who delivers the service, who holds licenses, who controls claims, and who handles data.

The objective is not to force every role into one company. It is to make real relationships understandable and prevent one organization’s verification from being used as a mask for another.

## Protect verification evidence

Corporate and identity documents are sensitive. Store them in an access-controlled location, record submission and expiry dates, and avoid distributing them through informal chats or provider folders. Remove former vendors and staff promptly.

Verification governance includes data governance: who may collect, review, submit, retain, and delete the supporting evidence.

## Official resources

- [Meta Business Help Center](https://www.facebook.com/business/help)
- [Business Support Home](https://www.facebook.com/business-support-home/)
- [About Page transparency](https://www.facebook.com/help/323314944866264)
- [Meta Advertising Standards](https://transparency.meta.com/policies/ad-standards/)
