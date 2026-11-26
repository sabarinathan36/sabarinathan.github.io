---
layout: news-item
title: "Nathan's Short News: Palo Alto Networks Warns of Fragnesia Flaw"
date: 2026-11-26 09:00:00 +0530
category: "Vulnerabilities & Patches"
summary: "Threat actors are actively chaining the Fragnesia Linux kernel vulnerability with PHP2Shell flaws to target Palo Alto Networks firewalls with internet-exposed management interfaces. Vendors and official bodies have issued warnings and fixes."
source: "BleepingComputer"
source_url: "https://www.bleepingcomputer.com/news/security/palo-alto-networks-warns-of-fragnesia-flaw-exploited-in-pan-os-attacks/"
source_title: "Palo Alto Networks warns of Fragnesia flaw exploited in PAN-OS attacks"
---

## Background

According to BleepingComputer, threat actors have begun chaining exploits together to target networking equipment, specifically focusing on devices that feature management interfaces exposed directly to the public internet.

## What happened

According to BleepingComputer, threat actors are chaining exploits for the PHP2Shell and Fragnesia vulnerabilities to target Palo Alto Networks devices. PHP2Shell consists of two critical PHP flaws, tracked as CVE-2026-109618 and CVE-2026-109619, which allow unauthenticated attackers to execute remote code with the privileges of the PHP web worker. Meanwhile, Fragnesia is a Linux kernel vulnerability in the XFRM ESP-in-TCP subsystem, identified as CVE-2026-46300, which enables a low-privileged local attacker to escalate permissions to root level.

According to BleepingComputer, an alert issued by CISA on October 28 warned that these two security issues were being chained in attacks to deploy PHP webshells and execute commands as root. Around the same time, Dream Security researchers observed a campaign using this chain against servers in the United States, Japan, Taiwan, and South Korea, including a U.S. government affiliate. Palo Alto Networks has confirmed that these attacks also target firewalls running PAN-OS when the management interface is exposed to the internet.

According to BleepingComputer, Palo Alto Networks stated that chaining with PHP2Shell is the only known way to exploit Fragnesia, and they are not aware of any other exploitation pathway for the flaw. The company has released fixes for Fragnesia across PAN-OS versions 10.2, 11.1, 11.2, 12.1, and 12.2, with the exact patch-carrying build varying by release. Administrators who have already applied updates addressing the PHP2Shell flaw should be safe from these specific attacks.

## Who is affected

According to BleepingComputer, the affected products include Palo Alto Networks firewalls running PAN-OS versions 10.2, 11.1, 11.2, 12.1, and 12.2. Specifically, the exploitation activity observed by the vendor targeted devices that exposed their management interface to the public internet, which goes against recommended best practices.

## Why it matters

According to BleepingComputer, the chaining of these vulnerabilities allows malicious actors to achieve remote code execution and escalate privileges to root level on critical network infrastructure. Because firewalls serve as a critical perimeter defense for business networks, a compromise at this level can grant attackers deep access to enterprise environments, increasing the risk of data breaches and operational disruption.

Exposing management interfaces to the internet directly violates standard security best practices, compounding the risk. For IT managers, CIOs, and security teams in India, this incident highlights the urgent need to audit perimeter hardware configurations and ensure that administrative access is strictly controlled.

## What to do now

1. Apply the security updates released by Palo Alto Networks for your specific PAN-OS version.
1. Verify that you have applied updates addressing the PHP2Shell vulnerability.
1. Ensure that device management interfaces are never exposed directly to the public internet.
1. Restrict access to remote management interfaces to trusted internal IP addresses only.
1. Audit all network perimeter appliances to verify compliance with vendor security best practices.

## Key takeaways

* Threat actors are actively exploiting a chain of PHP2Shell and Fragnesia vulnerabilities against PAN-OS devices.
* Exposing firewall management interfaces to the public internet significantly increases exposure to these attacks.
* Palo Alto Networks has released patches across multiple PAN-OS versions to address the Fragnesia flaw.

