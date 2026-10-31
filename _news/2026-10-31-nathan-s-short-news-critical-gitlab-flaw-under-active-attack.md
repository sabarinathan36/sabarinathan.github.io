---
layout: news-item
title: "Nathan's Short News: Critical GitLab Flaw Under Active Attack"
date: 2026-10-31 09:00:00 +0530
category: "Vulnerabilities & Patches"
summary: "According to BleepingComputer, the US CISA has added a maximum-severity GitLab vulnerability to its Known Exploited Vulnerabilities catalog after detecting active attacks. IT managers and security teams are urged to apply patches immediately to safeguard their development environments."
source: "BleepingComputer"
source_url: "https://www.bleepingcomputer.com/news/security/hackers-now-exploiting-max-severity-gitlab-flaw-in-attacks/"
source_title: "CISA says max severity GitLab flaw now exploited in the wild"
---

## Background

The vulnerability involves GitLab's DevSecOps platform, which is utilized by more than 50 percent of Fortune 100 companies and supports over 70 million registered users globally. Security researchers and agencies have been monitoring multiple GitLab security issues since the beginning of the year, including prior authentication bypasses and repository commit flaws.

## What happened

According to BleepingComputer, attackers have started exploiting a maximum-severity GitLab vulnerability tracked as CVE-2026-97229. Discovered by a security researcher using the handle 'joaxcar', the flaw exists in the CI/CD Regular Expression Compiler, which parses, compiles, and evaluates regular expressions in pipeline configuration files.

The issue stems from an integer overflow weakness combined with insufficient expression validation. This combination permits remote attackers to execute arbitrary code on targeted GitLab instances simply by submitting a maliciously crafted regular expression within a CI/CD configuration.

GitLab resolved this security defect earlier this month and released threat detections to assist customers managing self-managed instances. Subsequently, the US Cybersecurity and Infrastructure Security Agency confirmed active exploitation, added the defect to its Known Exploited Vulnerabilities Catalog, and instructed federal agencies to secure servers by Sunday under Binding Operational Directive 26-04.

## Who is affected

Organizations and users operating self-managed or enterprise instances of GitLab Community Edition and Enterprise Edition versions 19.4.2, 19.3.5, and 19.2.8 are affected, with the internet threat watchdog Shadowserver tracking nearly 2,800 internet-exposed Community Edition instances.

## Why it matters

Allowing remote attackers to run arbitrary code on targeted servers poses a catastrophic risk to enterprise infrastructure, potentially granting full system access to malicious actors. Although Binding Operational Directive 26-04 applies directly to US federal agencies, private sector businesses face identical threats, making rapid patching vital to prevent data breaches and operational compromise.

## What to do now

1. Upgrade GitLab Community Edition and Enterprise Edition servers immediately to the patched versions specified by the vendor.
1. Utilize the threat detections released by GitLab to monitor self-managed instances for signs of compromise.
1. Prioritize patching based on CISA's Known Exploited Vulnerabilities Catalog guidance to mitigate active real-world threats.
1. Review and audit CI/CD pipeline configurations for any anomalous or maliciously crafted regular expressions.
1. Secure internet-exposed GitLab instances by restricting network access where feasible.

## Key takeaways

* A maximum-severity GitLab vulnerability (CVE-2026-97229) is now actively exploited in the wild.
* The flaw allows unauthenticated remote code execution via insufficient regular expression validation in CI/CD configurations.
* Administrators must apply vendor-supplied patches immediately to protect exposed self-managed instances.

