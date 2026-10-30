---
layout: news-item
title: "Critical Linux Kernel TCP Flaw Threatens Enterprise Servers with Root Takeover"
date: 2026-10-30 09:00:00 +0530
category: "Vulnerabilities & Patches"
summary: "A critical race condition in the Linux kernel's TCP stack, tracked as CVE-2026-98432, permits unauthenticated remote attackers to execute commands as root. While upstream maintainers and several distributions have provided updates, major platforms including Ubuntu and Red Hat Enterprise Linux remain unpatched as of 29 October."
source: "The Hacker News"
source_url: "https://thehackernews.com/2026/10/linux-kernel-tcp-flaw-with-98-cvss.html"
source_title: "Linux Kernel TCP Flaw With 9.8 CVSS Score Affects Ubuntu, Red Hat and Other Distributions"
---

## Background

According to The Hacker News, the vulnerability stems from how the Linux kernel manages incoming IPv4 TCP connections, an issue present in the codebase since Linux version 4.4. During a standard connection handshake, the kernel transfers incoming Internet Protocol (IP) options directly to a newly created socket without making a separate copy. If that socket is dismantled whilst another processor reads those options to answer a retransmitted request, the kernel reads memory that has already been discarded—a defect known as a use-after-free error. The issue does not impact IPv6 traffic because the kernel systematically creates copies of options for IPv6 connections.

## What happened

Anthropic researcher Xinyang Ge reported the vulnerability after the company's artificial intelligence model, Claude, was used to develop a working remote exploit. Kernel developers patched the upstream code on 5 October, ten days prior to the public release of CVE-2026-98432 on 15 October. The kernel security team subsequently assigned the flaw a CVSS severity score of 9.8 out of 10 on 24 October, categorising attack complexity as low because an attacker initiates both sides of the race condition.

According to The Hacker News, Anthropic showed that an unauthenticated remote adversary can target machines operating a multipath TCP listener, which enables network traffic across several paths simultaneously. The exploit operates across two distinct phases: first, triggering the race condition causes the kernel to return extra memory bytes, allowing the attacker to bypass Kernel Address Space Layout Randomisation (KASLR) in approximately 48 minutes. Following that address leak, a buffer overflow overwrites a callback pointer to execute arbitrary shell commands as root within five minutes. If an attacker loses a race, the individual connection simply drops without crashing the system, permitting endless reattempts.

Distribution vendors have responded with divergent severity evaluations and patch timelines. Debian, Oracle Linux, SUSE, and Amazon Linux have released updated packages for at least some kernels. Conversely, Ubuntu and Red Hat Enterprise Linux had not provided fixed kernels as of 29 October, with Red Hat deferring updates to a future release. Vendor severity ratings vary between 5.9 and 8.1, as several distributions rate the attack complexity as high rather than low.

## Who is affected

According to The Hacker News, the flaw impacts Linux distributions running vulnerable kernels on IPv4 networks. Major enterprise platforms without patches as of 29 October include Ubuntu—which lists its standard, cloud, FIPS, and real-time kernels as vulnerable or in progress—and Red Hat Enterprise Linux, alongside specific unpatched releases from Amazon Linux and SUSE. The demonstrated root exploit specifically targeted systems hosting a multipath TCP listener. Although Red Hat noted that any reachable TCP service might trigger the race, the article clarifies that it remains unconfirmed whether servers lacking a multipath TCP listener can be fully compromised in the same manner.

## Why it matters

This vulnerability introduces considerable operational risk for IT organisations due to the lack of viable workarounds and patch delays on leading enterprise operating systems. Red Hat confirmed that no available mitigation meets its criteria for stability, ease of deployment, and broad suitability, and published advisories do not confirm whether disabling multipath TCP reduces risk. Furthermore, because unsuccessful exploit attempts merely cause single connection drops rather than server crashes, threat actors can conduct prolonged exploitation attempts without triggering typical service-outage monitoring alarms.

While neither vendor advisories nor the CISA Known Exploited Vulnerabilities catalog reported active in-the-wild exploitation as of 29 October, the demonstration that AI tools can write functional kernel-level exploit payloads elevates the urgency for defensive prioritisation across exposed infrastructure.

## What to do now

1. Apply vendor-released kernel updates immediately across affected Debian, Oracle Linux, SUSE, and Amazon Linux systems.
1. Upgrade custom enterprise kernel builds directly to stable patched releases, including versions 5.10.272, 5.15.223, 6.1.190, 6.6.159, 6.12.113, 6.18.56, 7.2.10, or 7.3.
1. Identify and catalogue all external-facing Linux servers that currently configure and run multipath TCP listeners.
1. Track security advisories from Canonical and Red Hat daily to monitor the status of deferred kernel security updates.
1. Avoid implementing unverified temporary mitigations, as distribution vendors have confirmed that no stable workarounds currently exist.

## Key takeaways

* CVE-2026-98432 allows unauthenticated remote root command execution against Linux servers operating multipath TCP listeners.
* Ubuntu and Red Hat have not released fixes as of 29 October, and vendors have verified no stable workarounds.
* No in-the-wild attacks were documented by 29 October, but administrators should patch supported distributions without delay.

