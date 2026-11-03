---
layout: post
title: "Managing IT Vendors and SLAs That Actually Mean Something"
category: IT Governance
excerpt: "A green SLA report does not mean the business is well served. How to write, measure and govern vendor SLAs that reflect real outcomes."
---

Almost every IT function today depends on vendors. Internet links, hardware support, cloud platforms, software licences, managed services, security monitoring: a large part of what the business experiences as "IT" is delivered by someone outside the organisation.

Every one of those relationships comes with a contract, and most contracts come with a **Service Level Agreement**.

Yet in my experience, many SLAs look impressive on paper and protect very little in practice. The monthly report is green, the vendor is technically compliant, and the business is still frustrated.

## The Problem With Most SLAs

The usual issues are surprisingly consistent:

* **They measure activity, not outcomes.** "Response within 30 minutes" means someone acknowledged the ticket. It says nothing about when the problem was actually fixed.
* **They are written by the vendor.** Standard templates naturally favour the party that wrote them.
* **Exclusions swallow the commitment.** Scheduled maintenance, "force majeure", third-party dependencies and customer-caused issues can quietly cover most real outages.
* **Availability is averaged.** A monthly uptime figure can look excellent while hiding a long outage during business hours.
* **Nobody reviews them.** The contract is signed, filed, and only opened when there is a dispute.

An SLA that is never measured independently is not a control. It is a hope.

## Start With What the Business Needs

Before negotiating any SLA, ask a simpler question: **what does the business actually need from this service?**

For a branch internet link, the need might be that the branch can bill customers during working hours. For a hardware support contract, it might be that a failed server is back in service before the next shift. For a managed security service, it might be that a genuine threat is escalated to a named person quickly enough to act.

Write the SLA around those outcomes:

* **Resolution or restoration time,** not just response time.
* **Service hours that match business hours,** including weekends if the business runs on weekends.
* **Severity levels defined in business terms,** such as "a site cannot transact" rather than vague labels.
* **Clear escalation paths** with named roles on both sides.

## Measure It Yourself

One of the most important habits in vendor management is not relying solely on the vendor's own report.

If you have centralised monitoring and a service management tool, you already hold much of the evidence. Ticket timestamps show when an issue was raised and resolved. Monitoring shows when a link or server actually went down and came back.

Compare your data with the vendor's report each month. Where they differ, discuss it. Often the gap is a definition problem, such as when the clock starts or which exclusions apply. Resolving those definitions early prevents arguments later.

## Penalties Are Not the Point

Service credits and penalty clauses have their place, but they are rarely the real lever.

A small credit on a monthly invoice does not compensate the business for a day of lost operations. Worse, if penalties are the only tool, every review becomes a negotiation about money instead of a conversation about improvement.

What tends to work better:

* **Regular service reviews,** monthly or quarterly, with an agreed agenda.
* **Root cause analysis** for every major incident, with actions tracked to closure.
* **Trend discussion,** not just last month's numbers. Repeating issues matter more than one bad week.
* **An improvement plan** that both sides own.

Penalties should exist as a backstop. The relationship should run on visibility and accountability.

## Know Your Vendor Landscape

Many organisations cannot quickly answer basic questions about their vendors. Which contracts are expiring this quarter? Which vendors have remote access to our systems? Which services have no SLA at all?

A simple vendor register helps enormously. For each vendor, record the service provided, the contract owner, renewal dates, the SLA in plain words, support contacts, and what access they hold.

That last point connects vendor management directly to security. Frameworks such as ISO 27001 expect organisations to manage information security within supplier relationships, including access, responsibilities and monitoring. A vendor with privileged access and no oversight is a risk, however good their service.

## Govern the Relationship, Not Just the Contract

Good vendor management is ultimately a governance discipline. It needs:

* **An internal owner** for each significant vendor.
* **A defined review rhythm,** rather than reviews only after something goes wrong.
* **Exit planning,** so the organisation understands what it would take to change provider.
* **Renewal decisions based on evidence,** using the performance data gathered through the year.

When renewals arrive, the conversation then changes. Instead of "they seem fine", you can say exactly how the service performed, where it fell short, and what must change in the next term.

## The Bigger Point

Vendors are an extension of the IT function. The business does not distinguish between an outage caused by internal teams and one caused by a supplier. It simply sees that IT did not deliver.

That means accountability for vendor performance sits with IT leadership, whatever the contract says.

**An SLA is only as meaningful as the outcome it measures and the discipline used to review it.**
