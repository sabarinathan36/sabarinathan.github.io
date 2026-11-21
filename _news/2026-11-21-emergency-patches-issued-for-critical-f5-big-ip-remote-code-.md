---
layout: news-item
title: "Emergency Patches Issued for Critical F5 BIG-IP Remote Code Execution Flaws"
date: 2026-11-21 09:00:00 +0530
category: "Vulnerabilities & Patches"
summary: "F5 has released out-of-band emergency security patches for five critical vulnerabilities in its BIG-IP platform that allow unauthenticated remote code execution. According to BleepingComputer, no workarounds are available, making immediate patching essential for affected organisations."
source: "BleepingComputer"
source_url: "https://www.bleepingcomputer.com/news/security/f5-releases-emergency-patches-for-critical-big-ip-rce-flaws/"
source_title: "F5 releases emergency patches for critical BIG-IP RCE flaws"
---

## Background

According to BleepingComputer, F5 is a Fortune 500 cybersecurity and application delivery networking firm serving more than 23,000 organisations worldwide, including 80 per cent of the Fortune Global 500. Its BIG-IP product suite, including the Access Policy Manager (APM) for centralised access proxy management and iRules scripting features, is heavily utilised across global enterprise infrastructure. Over recent years, security flaws in F5 products have been actively targeted by nation-state threat actors and cybercriminals to breach corporate networks, map internal servers, hijack devices, deploy data-wiping malware, and steal sensitive files.

## What happened

According to BleepingComputer, F5 issued urgent out-of-band hotfixes on Wednesday to address five critical security flaws in its BIG-IP APM and iRules features. Tracked as CVE-2026-121805, CVE-2026-120292, CVE-2026-120285, CVE-2026-116953, and CVE-2026-123637, these vulnerabilities stem from stack-based buffer overflows. Remote, unauthenticated attackers can exploit these weaknesses to crash the Traffic Management Microkernel (TMM) process and execute arbitrary code on vulnerable systems.

F5 confirmed that these issues affect the data plane rather than exposing the control plane, though network traffic is disrupted while the TMM process reboots. In addition to the five critical flaws, F5 released engineering hotfixes for a high-severity SAML vulnerability in BIG-IP APM (CVE-2026-126822) caused by an integer underflow weakness, which remote unauthenticated actors could abuse in denial-of-service (DoS) attacks.

Although F5 has not flagged any of these specific issues as actively exploited in attacks yet, the company confirmed that no mitigation workarounds exist. Internet threat monitoring organisation Shadowserver currently tracks over 177,000 online BIG-IP instances and more than 14,600 exposed IP addresses displaying BIG-IP APM fingerprints, though it remains unknown how many are unpatched or serving as honeypots.

## Who is affected

According to BleepingComputer, organisations operating F5 BIG-IP devices configured with the Access Policy Manager (APM) proxy solution or the iRules programmable scripting feature are directly exposed. Devices running vulnerable configurations across enterprise data planes are at risk, with over 14,600 internet-facing IP addresses displaying BIG-IP APM fingerprints globally.

## Why it matters

According to BleepingComputer, F5 infrastructure is a high-value target for sophisticated threat groups due to its central role in enterprise networking. Historical data highlights this risk: the US Cybersecurity and Infrastructure Security Agency (CISA) has listed seven F5 flaws as actively exploited since November 2021, with four being leveraged by ransomware gangs. Furthermore, in September, F5 patched a critical zero-day flaw (CVE-2026-94127) that was actively exploited in RCE attacks, following an August 2025 breach where state-backed hackers stole F5 source code and details on undisclosed BIG-IP flaws.

Because unauthenticated remote code execution allows full compromise of vulnerable data planes and F5 has provided no temporary mitigations, unpatched systems leave enterprise networks exposed to severe operational disruption and remote takeover.

## What to do now

1. According to BleepingComputer, IT teams should immediately install the out-of-band hotfixes released by F5 on Wednesday, as no workaround mitigations exist.
1. Audit enterprise network environments to identify all internet-facing and internal BIG-IP instances running APM or iRules features.
1. Monitor network logs for unexpected restarts of the Traffic Management Microkernel process, which could indicate exploitation attempts.
1. Review exposed BIG-IP APM instances to confirm whether internet-facing interfaces can be restricted or protected behind additional security boundaries.
1. Maintain high priority for F5 security advisories given the historical frequency of zero-day exploits targeting the platform.

## Key takeaways

* F5 released emergency hotfixes for five critical buffer overflow flaws allowing unauthenticated remote code execution in BIG-IP.
* No mitigation workarounds exist for these flaws, requiring security teams to apply patches immediately.
* F5 devices remain premier targets for ransomware gangs and nation-state hackers, with over 177,000 instances tracked online.

