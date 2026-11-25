---
layout: news-item
title: "Broadcom Issues Urgent VMware Patches for Critical vCenter Authentication Flaw"
date: 2026-11-25 09:00:00 +0530
category: "Vulnerabilities & Patches"
summary: "According to The Hacker News, Broadcom has released updates for 23 vulnerabilities across several VMware products, including a critical authentication bypass flaw rated 9.8 out of 10. The security defect in the VMware Directory Service allows unauthenticated network attackers to gain full administrative access to vCenter appliances."
source: "The Hacker News"
source_url: "https://thehackernews.com/2026/11/vmware-vcenter-hit-by-another-critical.html"
source_title: "VMware vCenter Hit by Another Critical 9.8-Rated Auth Bypass Flaw After Zero-Day Exploitation"
---

## Background

This security advisory follows recent patches issued by Broadcom for a separate maximum-severity authentication bypass vulnerability, tracked as CVE-2026-123890, according to report by The Hacker News. That earlier flaw was actively exploited as a zero-day by a suspected China-nexus cyber espionage threat group known as Armory Castle. Broadcom clarified that the newly disclosed vulnerability, tracked as CVE-2026-123903, is a distinct security defect within the VMware Directory Service and is unrelated to the previously exploited bug, despite sharing the same 9.8 CVSS score.

## What happened

According to The Hacker News, Broadcom has patched 23 security vulnerabilities affecting VMware ESX, vCenter, Workstation, Fusion, and Avi Load Balancer. The most severe issue is CVE-2026-123903, a critical authentication bypass defect located in the VMware Directory Service ("vmdir"). Broadcom stated that a threat actor with network access to a vulnerable vCenter server can exploit this weakness to bypass standard authentication controls and obtain unauthorized access to the host appliance.

The critical bug was independently identified and reported by security researchers sglab of QiAnXin, Qi Qin (@LeoQ7_) of depthfirst, as well as VulTeam and XGTP from ThreatBook. Broadcom noted that it has no evidence indicating this specific flaw is currently being exploited in active attacks, but strongly urged enterprise customers to install the updates immediately.

Broadcom also addressed four high-severity vulnerabilities impacting vCenter appliances. Among these is CVE-2026-123904 (CVSS score 7.5), an arbitrary file write issue triggered during archive processing that could allow an attacker to execute malicious code on the appliance. The other three high-severity flaws—CVE-2026-123905, CVE-2026-123906, and CVE-2026-123907, each rated 7.5—cause denial-of-service conditions within the VMware Directory Service.

## Who is affected

Organisations utilizing Broadcom’s virtualization products are affected, specifically deployments of VMware ESX, vCenter, Workstation, Fusion, and Avi Load Balancer. The core critical authentication bypass and high-severity issues primarily impact vCenter instances running the VMware Directory Service. Because the source article does not state specific affected version numbers, IT operations teams must review Broadcom’s official security advisory to confirm their build versions.

## Why it matters

For Indian IT managers, CIOs, and security teams, a 9.8-rated authentication bypass in vCenter represents a severe threat to business continuity. Because vCenter serves as the central control plane for virtualised infrastructure, unauthorized access grants attackers command over hosting hardware, virtual machines, operational data, and corporate credentials.

Furthermore, the combination of authentication bypass, code execution, and denial-of-service flaws creates significant operational risk. With espionage groups actively targeting directory service bugs in virtualization platforms, unpatched infrastructure remains a high-priority target for network intrusions.

## What to do now

1. Deploy the official security patches released by Broadcom across all affected VMware products without delay, according to guidance from The Hacker News.
1. Restrict network accessibility to VMware vCenter management interfaces by isolating them behind firewall boundaries and disabling direct internet exposure.
1. Audit system access logs and network traffic for vCenter management instances to identify potential unauthorized authentication attempts or directory service anomalies.
1. Review internal file processing and archive handling workflows on host appliances to mitigate potential arbitrary file write exploits like CVE-2026-123904.
1. Establish prioritized patching workflows for core virtualization management components whenever critical 9.8-rated vulnerabilities are disclosed.

## Key takeaways

* Broadcom patched 23 VMware flaws, led by a critical 9.8-rated vCenter authentication bypass (CVE-2026-123903).
* The vulnerability resides in the VMware Directory Service and is distinct from a recently patched zero-day flaw.
* Immediate patching and strict network segmentation of vCenter management interfaces are critical for enterprise security.

