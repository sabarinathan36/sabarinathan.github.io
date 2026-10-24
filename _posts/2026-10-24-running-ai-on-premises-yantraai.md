---
layout: post
title: "Running AI On-Premises: What I Learned Building YantraAI"
category: AI in IT Operations
excerpt: "Why I chose local LLMs over public AI tools for an enterprise knowledge platform, and what it took to make AI usable, secure and governed inside the organisation."
---

Every organisation I speak with wants to use AI. Very few are comfortable with where their data goes when employees paste it into a public chatbot.

That tension was the starting point for **YantraAI**, an on-premises AI knowledge platform I designed and deployed for an enterprise environment.

The goal was simple: give employees the productivity benefits of AI, without sending internal information outside the organisation.

## Why Not Just Use a Public AI Tool?

Public AI tools are powerful and easy to adopt. That is exactly what makes them a governance problem.

When there is no approved alternative, employees use whatever is available. Internal documents, configuration details, customer information and drafts of sensitive communication can end up in services the organisation does not control.

Blocking these tools rarely works. People find workarounds.

The better approach is to **provide a safe, approved option that is just as convenient**.

For us, that meant running the AI inside our own infrastructure.

## The Building Blocks

YantraAI was built from three practical components:

* **Local LLMs**, served through LM Studio, so models run on our own hardware and prompts never leave the network.
* **Open WebUI**, a familiar chat-style interface that requires no training for most users.
* **Active Directory authentication**, so employees sign in with their existing credentials and access is tied to the identities we already manage.

None of these components is exotic. The value came from putting them together in a way that fits how an enterprise actually operates.

## Lesson 1: Identity Comes Before Intelligence

The most important feature of YantraAI is not the model. It is the login.

Integrating with Active Directory meant:

* Only authorised employees can use the platform.
* Access follows the joiner, mover and leaver process we already run.
* Usage can be attributed to real identities, not anonymous sessions.

An AI platform without identity controls is just another shadow IT tool, even if it runs on your own servers.

## Lesson 2: Treat AI Like Any Other Enterprise Service

It is tempting to treat an AI deployment as an experiment. Experiments, however, have a habit of becoming production systems without anyone deciding they should.

From the start, I approached YantraAI the way I would approach any business service:

* Defined ownership and support responsibility
* Clear guidance on acceptable use
* Capacity planning for the hardware running the models
* Monitoring for availability and performance
* A roadmap, rather than a one-time launch

This is the same discipline that ITIL brings to every other service. AI does not get an exemption.

## Lesson 3: Set Honest Expectations About Local Models

Local models have improved enormously, but they are not identical to the largest public models.

Being honest about this matters. Users should understand what the platform does well, such as drafting, summarising, explaining and answering general questions, and where they still need to apply their own judgement.

Overpromising is the fastest way to lose user trust in a new platform.

## Lesson 4: Adoption Is a Change Management Exercise

Deploying the platform is the technical part. Getting people to use it well is the organisational part.

Adoption improves when employees can see practical, everyday use cases relevant to their own roles. A good AI platform does not just need to be available. It needs to be understood.

## What Comes Next: Enterprise Knowledge with RAG

A general-purpose AI assistant is useful. An assistant that understands your organisation is transformational.

The next stage on the YantraAI roadmap is **Retrieval-Augmented Generation (RAG)**: connecting the model to approved internal knowledge sources such as policies, procedures and technical documentation, so answers are grounded in the organisation's own information.

This is also where governance becomes even more important:

* Which documents should the AI be allowed to read?
* Who can see answers drawn from restricted content?
* How do we keep the knowledge base current?

These are not AI questions. They are information governance questions, and they need answers before the technology is switched on.

## Conclusion

On-premises AI is not about rejecting public AI tools. It is about giving organisations a choice that fits their risk appetite.

What building YantraAI reinforced for me is a principle I keep returning to in every transformation programme:

**The technology is the easy part. Identity, governance and adoption are what make it enterprise-ready.**
