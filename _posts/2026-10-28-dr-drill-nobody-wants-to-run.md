---
layout: post
title: "The DR Drill Nobody Wants to Run"
category: Business Continuity
excerpt: "A disaster recovery plan that has never been tested is a hope, not a plan. How to run DR drills that teach you something without breaking production."
---

In an earlier article, I argued that having backups is not the same as being able to recover. Most IT leaders agree with that in principle.

Then comes the uncomfortable follow-up question: **when did you last actually test your disaster recovery?**

Not a restore of a single file. A real drill, where a critical service is brought up at the DR site, users confirm it works, and the clock is running.

In many organisations, the honest answer is "not recently", or "never fully". The DR plan exists, it was approved, and it sits in a shared folder. Nobody wants to be the person who tests it.

## Why Teams Avoid DR Drills

The reluctance is understandable. In my experience, it usually comes from a few places:

* **Fear of causing an outage.** Teams worry the test itself will break something in production.
* **Fear of what they will find.** A failed drill feels like a personal failure, so it is easier not to look.
* **No business window.** Operations never wants downtime, so the drill is postponed quarter after quarter.
* **Ownership gaps.** Infrastructure, application owners, vendors and the network team all have a piece, and nobody owns the whole.
* **It is not urgent.** Nothing is broken today, so the drill loses to every ticket that is.

None of these reasons make the risk go away. They only move the discovery to the worst possible moment: a real incident.

## Reframe the Drill: Its Job Is to Fail

The most useful mindset shift is this: **a DR drill is meant to find problems.**

A drill that reveals a missing firewall rule, an expired licence at the DR site, or an undocumented dependency has done its job. That problem was always there. The drill simply found it on a calm Tuesday instead of during a crisis.

Leaders set the tone here. If a failed step leads to blame, teams will design drills that cannot fail, and learn nothing. If findings are treated as valuable, people will look harder.

## Start Small and Build Up

You do not need to begin with a full site failover. A maturity path works far better:

1. **Tabletop exercise.** Walk through the plan around a table. Who declares a disaster? Who calls whom? Where is the runbook if the main systems are down? This alone exposes many gaps, at zero technical risk.
2. **Component recovery.** Restore one server or database into an isolated network and confirm it actually works, not just that the restore job completed.
3. **Single service failover.** Bring up one important application end-to-end at the DR site, including authentication, network access and integrations, and have real users test it.
4. **Full scenario drill.** Simulate the loss of the primary site for a defined set of critical services, measured against agreed RTO and RPO.

Each step builds confidence and evidence before you attempt the next.

## Plan the Drill Like a Change

A DR drill should go through the same discipline as any significant change:

* **Clear scope.** Which services, which scenario, and what is explicitly out of scope.
* **Success criteria.** Defined in business terms: users can log in, transactions process, data is current to within the agreed RPO.
* **Rollback plan.** How you return to normal if something goes wrong during the test.
* **Business sign-off.** Application owners and operations agree the window in advance.
* **Vendor involvement.** If a provider runs part of your DR, they must be in the drill, not on standby.

Treating it formally also makes it easier to get approval. A well-planned drill is far less frightening to management than a vague request for "some downtime to test DR".

## Measure What Actually Happened

During the drill, record facts as they happen:

* Time the disaster was declared.
* Time each service was available at the DR site.
* Actual data loss compared with the RPO.
* Every step where the runbook was wrong, missing or unclear.
* Every manual workaround someone had to improvise.

The gap between your documented RTO and your measured recovery time is one of the most honest numbers in IT. It tells the business what it can really expect.

## Close the Loop

The drill is only half the work. Afterwards:

* Hold a short, blameless review within a few days.
* Log every finding as an action with an owner and a due date.
* Update the runbooks immediately, while the details are fresh.
* Report results to leadership plainly, including what failed.
* Schedule the next drill before you close this one.

For organisations working towards ISO 27001 or similar frameworks, this evidence also matters. Auditors look for proof that continuity arrangements are tested and improved, not just documented.

## Make It a Habit, Not an Event

The real goal is for DR testing to become routine. When drills happen on a regular calendar, they stop feeling dangerous. Teams get faster, runbooks stay current, and changes to the environment are reflected in the plan instead of silently breaking it.

The first drill is always the hardest. Every one after that gets easier.

**A recovery plan you have never tested is not a plan; it is an assumption.**
