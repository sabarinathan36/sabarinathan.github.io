---
layout: news-item
title: "Microsoft November 2026 Patch Tuesday Fixes 1,235 Flaws and Exploited Outlook Zero-Day"
date: 2026-11-11 09:00:00 +0530
category: "Vulnerabilities & Patches"
summary: "Microsoft has released its November 2026 Patch Tuesday updates to remediate 1,235 security vulnerabilities, including an actively exploited zero-day flaw in Microsoft Outlook. The massive rollout addresses 66 critical issues across multiple products, driven by the technology vendor's ongoing use of artificial intelligence to identify security weaknesses."
source: "BleepingComputer"
source_url: "https://www.bleepingcomputer.com/news/microsoft/microsoft-november-2026-patch-tuesday-fixes-1-235-flaws-outlook-zero-day/"
source_title: "Microsoft November 2026 Patch Tuesday fixes 1,235 flaws, Outlook zero-day"
---

## Background

According to BleepingComputer, this massive release follows a record-setting October update cycle in which Microsoft patched 1,411 security defects. The high volume of remediations reflects Microsoft's continuous deployment of artificial intelligence tools to detect and resolve software weaknesses at an unprecedented scale. Alongside regular updates, Microsoft defines a zero-day vulnerability as a flaw that is either publicly disclosed or actively exploited in real-world attacks prior to an official fix being made available. In addition to the primary Patch Tuesday release, Microsoft addressed 108 other issues earlier in the month across Mariner, Microsoft Edge, and Entra Device Registration.

## What happened

During the November 2026 Patch Tuesday, Microsoft addressed 1,235 security vulnerabilities, of which approximately 639 are categorised under Windows or Microsoft Windows products and components, according to BleepingComputer. Among the resolved bugs, 66 are classified as critical severity. This critical cohort includes 48 remote code execution flaws—which could allow an attacker to run malicious code remotely—15 elevation of privilege vulnerabilities, and three use-after-free bugs within the Microsoft Edge browser.

The most urgent fix targets an actively exploited zero-day spoofing vulnerability in Microsoft Outlook used by threat actors to harvest NTLM account credentials. According to Microsoft, an unauthenticated attacker could send a specially crafted message file and convince a user to open it. Opening this file causes Outlook to establish an outbound connection to an attacker-controlled network location without displaying the standard external-content warning, thereby exposing the user's NTLMv2 authentication hash for offline cracking and corporate account impersonation.

Simultaneously, Microsoft distributed non-security and cumulative updates, including Windows 11 updates KB5132061 and KB5131087, as well as extended security update KB5131096 for Windows 10. However, reports highlighted by BleepingComputer indicate that some administrators and users are encountering installation failures with error codes 0x80070306 and 0x800F0989, even when attempting manual installations through the Microsoft Update Catalog.

## Who is affected

The vulnerabilities impact organisations and enterprise users relying on Microsoft software ecosystems, specifically Microsoft Windows components, Microsoft Outlook, and Microsoft Edge. Users running supported versions of Windows 11 as well as organisations operating Windows 10 under extended security updates (such as KB5131096) are within the scope of this patch cycle. The article does not specify exact Outlook build numbers, but notes that users opening untrusted message files on affected Outlook versions with network connectivity are susceptible to the active credential disclosure attack.

## Why it matters

This patch release carries serious operational and security implications for enterprise IT and cybersecurity leaders. The actively exploited Outlook zero-day presents an immediate risk of credential theft, where attackers can silently intercept NTLMv2 password hashes simply by tricking an employee into opening a crafted file. Once hashes are captured and cracked offline, cybercriminals can impersonate legitimate users and achieve unauthorised access into corporate environments, mirroring historic phishing techniques used in broad corporate intrusions.

Furthermore, the sheer volume of 1,235 patches—encompassing 48 critical remote code execution flaws—demands substantial regression testing and patching overhead. The reported deployment errors (0x80070306 and 0x800F0989) introduce additional operational friction, potentially leaving endpoints unpatched and vulnerable to exploitation if IT departments do not actively monitor installation success rates across their fleets.

## What to do now

1. Prioritise deploying security updates for Microsoft Outlook across all endpoints to neutralise the actively exploited NTLM credential disclosure flaw.
1. Test and roll out cumulative updates for Windows 11 (KB5132061 and KB5131087) and Windows 10 extended security update KB5131096.
1. Monitor deployment logs and patch management consoles for installation failures associated with error codes 0x80070306 and 0x800F0989.
1. Reinforce security awareness among staff regarding the dangers of opening unsolicited or suspicious email message files.
1. Apply the latest browser updates for Microsoft Edge to remediate the three critical use-after-free vulnerabilities.

## Key takeaways

* Microsoft patched 1,235 flaws in November 2026, driven by its ongoing use of AI to uncover security weaknesses.
* An active Outlook zero-day allows attackers to steal NTLM authentication hashes via malicious message attachments.
* Deployment issues with errors 0x80070306 and 0x800F0989 require IT teams to actively verify installation completion.

