---
layout: news-item
title: "Synology Warns of C3RB3R Ransomware Attacks Targeting Outdated NAS Devices"
date: 2026-11-03 09:00:00 +0530
category: "Cybersecurity"
summary: "According to BleepingComputer, Taiwanese storage vendor Synology has issued an urgent security warning regarding active C3RB3R ransomware attacks targeting its Network-Attached Storage (NAS) appliances. Threat actors are actively exploiting software vulnerabilities patched in late 2024 to compromise unpatched devices, encrypt critical files, and extort ransom payments."
source: "BleepingComputer"
source_url: "https://www.bleepingcomputer.com/news/security/synology-warns-customers-of-ongoing-c3rb3r-ransomware-attacks/"
source_title: "Synology warns of C3RB3R ransomware attacks targeting NAS devices"
---

## Background

Network-Attached Storage (NAS) appliances running Synology's proprietary DiskStation Manager (DSM) operating system are widely deployed across enterprises for centralised data storage and backup management. According to BleepingComputer, public security advisories from Synology regarding active targeted cyberattacks are relatively rare, with the previous major alert published in August 2019 following widespread brute-force campaigns linked to eCh0raix ransomware. In this latest campaign, malicious actors are deploying C3RB3R—a ransomware strain borrowing its identity from a notorious Ransomware-as-a-Service operation—to lock systems operating on outdated DSM software.

## What happened

In a security advisory reported by BleepingComputer, Synology strongly urged customers to update their DiskStation Manager software immediately after discovering threat actors exploiting a vulnerability patched in December 2024. Although Synology did not explicitly state which specific flaw is being weaponised in current attacks, it linked its advisory to a November 2024 security update that addressed flaws allowing arbitrary code execution (CVE-2024-10441), unauthorised file reading (CVE-2024-50629), and unauthorised file writing (CVE-2024-10445).

The warning follows widespread reports over the past two weeks from Synology users whose data was encrypted without authorization. According to BleepingComputer, impacted victims reported that the ransomware appended a ".L0CK3D" extension to encrypted files and dropped a ransom note named "read-me3.txt". The attackers instruct victims to navigate to a dark web portal to purchase the "C3rb3r Decryptor" tool for thousands of dollars, warning that third-party recovery attempts will permanently destroy data.

Historically, the original Cerber ransomware operation accounted for more than 80 per cent of all ransomware attacks and a quarter of enterprise endpoint infections before shutting down in late 2019. The newer C3RB3R variant, first observed in December 2021, has previously been deployed against Atlassian Confluence and GitLab servers by exploiting remote code execution and authentication bypass vulnerabilities.

## Who is affected

The threat directly affects organisations and individuals using Synology NAS appliances running outdated or unpatched versions of the DiskStation Manager (DSM) operating system. According to internet threat watchdog Shadowserver, there are currently over 380,000 Synology NAS devices exposed to the public internet globally, though the precise number of patched systems or honeypots among them remains unconfirmed.

## Why it matters

For IT managers, CIOs, and enterprise security teams, network-attached storage devices often host critical corporate backups, operational databases, and shared business records. Ransomware infections on primary storage infrastructure can cause severe operational disruption, data loss, and financial harm, particularly if immutable offline backups are unavailable.

Furthermore, the campaign highlights the persistent risk of leaving enterprise storage management interfaces directly accessible over the public internet. Cybercriminals continuously scan for exposed appliances and exploit known software vulnerabilities to execute automated attacks, leaving unpatched organisations vulnerable to extortion.

## What to do now

1. Upgrade all Synology DiskStation Manager (DSM) software to the latest version immediately to patch critical security vulnerabilities.
1. Enable automatic updates within the DiskStation Manager settings to ensure future security patches are applied automatically.
1. Block internet access to the DiskStation Manager management web interface to prevent remote exploitation.
1. Audit network perimeters to ensure enterprise storage appliances are placed behind secure firewalls or virtual private networks.
1. Verify that regular offline or immutable backups are maintained and disconnected from the network to protect against file encryption.

## Key takeaways

* Synology has warned of active C3RB3R ransomware attacks exploiting unpatched DiskStation Manager (DSM) vulnerabilities.
* Over 380,000 Synology NAS units are exposed to the public internet, posing a widespread attack surface for unpatched systems.
* IT teams must immediately apply DSM updates, turn on automatic patching, and restrict internet access to storage management portals.

