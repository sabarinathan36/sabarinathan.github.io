---
layout: post
title: "Joiner-Mover-Leaver: The Most Underrated Security Control"
category: Cybersecurity Governance
excerpt: "Most access problems are not hacks. They are people who kept access they no longer need. Why joiner-mover-leaver deserves more attention than it gets."
---

When security teams talk about controls, the conversation usually turns to firewalls, endpoint protection, threat detection and patching.

Rarely does anyone get excited about **joiner-mover-leaver**: the process that decides what access a person gets when they join, how it changes when they move roles, and how it is removed when they leave.

Yet in my experience, this unglamorous process quietly determines whether most other controls actually work. A well-configured system is still exposed if the wrong people hold valid accounts on it.

## Why It Gets Ignored

Joiner-mover-leaver sits awkwardly between departments. HR owns the employee record. Managers decide what the person needs. IT creates and removes accounts. Application owners control their own systems. Vendors manage some platforms entirely.

Because everyone owns a piece, nobody owns the whole. The process often runs on emails, phone calls and goodwill. It works most of the time, which is exactly why its failures go unnoticed.

## The Joiner: Getting Access Right From Day One

The first risk is not too little access. It is too much.

When a new person joins and the request is vague, the easiest route is to copy an existing colleague's profile. That colleague may have collected years of extra permissions. The new joiner inherits all of them on their first day.

A better joiner process includes:

* **A trigger from HR, not from a hallway conversation.** Accounts are created because an official record says the person has joined.
* **Role-based access profiles.** Each role has a defined, approved baseline. Anything extra needs a separate request.
* **Manager approval for exceptions,** recorded so it can be reviewed later.
* **Access ready on day one.** If people wait a week, they borrow passwords or share accounts, which is worse.

## The Mover: Where Access Quietly Accumulates

Movers are the most overlooked part of the cycle.

When someone changes department or gets promoted, new access is added promptly because they need it to work. Old access is rarely removed, because nobody is asking for its removal.

Over a few role changes, a long-serving employee can end up with access across finance, operations, projects and administration. This is sometimes called **privilege creep**, and it undermines segregation of duties without anyone deciding it should.

A sound mover process treats every role change as two actions:

* Grant what the new role requires.
* Remove what the old role no longer justifies, after a short, agreed handover period.

## The Leaver: The Control Everyone Assumes Works

Most organisations believe their leaver process is fine. The email account is disabled, the laptop is returned, and the task is closed.

The gaps are usually elsewhere:

* **SaaS applications** signed up for outside central identity.
* **VPN and remote access** accounts held in a separate system.
* **Shared or service accounts** whose passwords the leaver knew.
* **Vendor portals and cloud consoles** with individual logins.
* **Mobile devices** still syncing company email.

The timing matters too. A planned resignation allows a scheduled shutdown. An urgent exit needs access removed promptly, sometimes before the conversation ends. Both scenarios should be written down in advance, not improvised.

## Making It Work in Practice

You do not need an expensive identity platform to improve this. You need clear ownership and a few disciplines:

* **One owner for the end-to-end process,** even if several teams carry out the steps.
* **HR as the single source of truth.** IT acts on HR events, not informal requests.
* **A complete application inventory,** so the leaver checklist covers every system that holds accounts.
* **Central identity and single sign-on wherever possible,** so disabling one account cuts off many systems.
* **Periodic access reviews,** where managers confirm what their team members should still have.
* **Regular reconciliation** between HR records and active accounts, to catch anything the process missed.

Measure it, too. How long does it take to remove access after someone leaves? How many active accounts belong to people no longer employed? These are simple numbers, and they are often more revealing than any dashboard.

## Why Auditors Care

Frameworks such as ISO 27001 place real weight on access control, user registration and de-registration, and regular review of access rights. From an auditor's point of view, it is also one of the easiest areas to test.

An auditor only needs a list of recent leavers and a list of active accounts. If the two lists overlap, the gap is visible immediately, regardless of how mature the rest of the security programme looks.

## The Bigger Point

Joiner-mover-leaver is not an IT administration task. It is a governance control that connects HR, managers, IT and the business.

When it works, it reduces insider risk, limits the damage from compromised accounts, supports compliance, and makes access reviews far simpler. When it fails, it fails silently, until someone uses access they should never have had.

**Access should follow the person's current role, not their history with the organisation.**
