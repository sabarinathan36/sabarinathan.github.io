---
layout: news-item
title: "CVSS 10.0 Flaw in LXD and MicroCloud Enables Unauthorized Access"
date: 2026-11-02 09:00:00 +0530
category: "Vulnerabilities & Patches"
summary: "Canonical has patched a maximum-severity security flaw in LXD and MicroCloud that allowed remote attackers to log in as trusted clients without holding private keys. According to The Hacker News, the vulnerability relies on flaws in mutual TLS certificate chain validation combined with network access."
source: "The Hacker News"
source_url: "https://thehackernews.com/2026/11/critical-lxd-and-microcloud-flaw-cvss.html"
source_title: "CVSS 10.0 LXD, MicroCloud Flaw Lets Attackers Impersonate Trusted Clients Without a Private Key"
---

## Background

LXD and MicroCloud are enterprise technologies developed by Canonical to manage virtual machines and clustered infrastructure over network connections. They use mutual Transport Layer Security (mTLS) to authenticate remote clients, requiring clients to present a certificate that matches an identity in the server's trust store. However, a structural flaw in how servers validated incoming certificate chains allowed unauthorized entities to bypass security controls without possessing valid authentication credentials.

## What happened

According to The Hacker News, the vulnerability is tracked as CVE-2026-112816 and carries a maximum CVSS rating of 10.0. The issue originated from a logic error during certificate verification. Under mTLS protocols, a TLS connection only proves ownership of the private key associated with the first certificate in the chain, known as the leaf. The remaining certificates in the chain are selected entirely by the connecting client.

Because the server validated every certificate in the chain against its trust store without properly verifying key ownership for secondary certificates, an attacker could take a trusted client's public certificate—which is not secret—and attach it behind their own leaf certificate. The server would then incorrectly accept the connection as originating from the trusted client.

To execute an attack, an adversary needs network access to the HTTPS API and the public certificate of a trusted client. In MicroCloud clusters, an attacker capable of capturing a member's public certificate as it joins the cluster could log in as that member. Standalone LXD instances do not expose the HTTPS API by default unless administrators deliberately enable it using the core.https_address setting. The issue was originally reported by the Incus project, a community fork of LXD, which fixed the flaw in version 7.6.0 before Canonical confirmed its impact on LXD.

## Who is affected

This vulnerability impacts Canonical LXD releases prior to fixed versions in the 4.0.14, 5.0.10, 5.21.8, and 6.9 tracks, as well as MicroCloud cluster environments. According to The Hacker News, Ubuntu archive packages are listed as not affected or not shipped, meaning the vulnerability specifically impacts Canonical snap installations. Incus project deployments prior to version 7.6.0 are also affected.

## Why it matters

The maximum CVSS score underscores the significant threat this vulnerability poses to containerised and clustered IT environments. If an attacker successfully impersonates a privileged account, Canonical warned that they could gain full root access to the host machine, compromising virtual machines, data stores, and cluster infrastructure.

Despite the severity, a U.S. CISA assessment dated 30 October indicated no evidence of active exploitation in the wild, nor has a functional exploit been published. Furthermore, because no software configuration workaround exists for LXD beyond restricting network access, enterprise IT teams must prioritize immediate patching to prevent potential identity spoofing attacks.

## What to do now

1. Refresh Canonical snap deployments immediately by running sudo snap refresh lxd and sudo snap refresh microcloud.
1. Verify the installed software version manually after executing the refresh command to ensure the patched release has reached your channel.
1. Restrict network access to the HTTPS API listeners for LXD and MicroCloud using firewalls to prevent unauthorized access.
1. Audit standalone LXD installations to determine whether the core.https_address setting has exposed the network API unnecessarily.
1. Upgrade Incus installations to version 7.6.0, which resolves this flaw alongside 17 additional security issues.

## Key takeaways

* A flawed mTLS certificate chain validation allowed identity spoofing without requiring private keys.
* Impersonating a privileged client can give attackers full root control over host systems and virtual machines.
* IT teams must immediately apply snap updates and restrict public network access to API listeners.

