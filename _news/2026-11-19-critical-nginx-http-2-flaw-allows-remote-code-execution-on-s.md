---
layout: news-item
title: "Critical NGINX HTTP/2 Flaw Allows Remote Code Execution on Servers"
date: 2026-11-19 09:00:00 +0530
category: "Vulnerabilities & Patches"
summary: "A decade-old security flaw in NGINX's HTTP/2 implementation allows unauthenticated remote attackers to execute code on vulnerable servers. According to reports from The Hacker News, vendor F5 and security researchers have released patch details and workarounds to mitigate the risk."
source: "The Hacker News"
source_url: "https://thehackernews.com/2026/11/10-year-old-nginx-http2-flaw-lets.html"
source_title: "10-Year-Old NGINX HTTP/2 Flaw Lets Unauthenticated Attackers Execute Code on Servers"
---

## Background

According to report details published by The Hacker News, NGINX is a widely used open-source web server and reverse proxy managed by F5. The newly disclosed security flaw, tracked as CVE-2026-123007 and dubbed 'nginx2root', has been present in open-source releases since version 1.9.5, which launched in September 2015. The issue resides in NGINX's handling of HTTP/2, a widely adopted protocol for speeding up web traffic. If HTTP/2 support is turned on, unauthenticated attackers can target the server over the network without needing login credentials.

## What happened

According to security analysis by F5, Wiz, Xint, Rapid7, and CIRCL (the Computer Incident Response Center Luxembourg), the vulnerability enables remote attackers to execute arbitrary code with the security permissions of an NGINX worker process. While F5 noted that exploitation relies on disabling or bypassing Address Space Layout Randomisation (ASLR)—a standard memory security protection—researchers at Wiz and Xint successfully bypassed ASLR in test environments. Xint demonstrated successful code execution using only an exposed HTTP/2 port on cloud instances across AWS, GCP, and Azure.

Although gaining worker-level access does not immediately yield full administrative control, tests conducted by CIRCL and Xint showed that attackers can escalate privileges to root. In Xint's testing, code running inside a worker process achieved root access on the host system by exploiting a separate flaw in the Linux kernel's SCTP (Stream Control Transmission Protocol) module, even when NGINX was running inside a Docker container. Fixed open-source versions 1.31.9 and 1.30.7 address this flaw alongside four other security issues, all scored 9.2 out of 10 on the CVSS 4.0 scale.

No active exploitation has been reported in the wild by vendors or listed in CISA's catalog as of today. However, proof-of-concept exploit code has been published on GitHub for local Docker testing. Technical research by Rapid7 indicates that executing the attack requires transferring approximately 128 GB of HTTP/2 traffic over a fast connection exceeding 300 Mbit/s to bypass default connection timeouts, as well as specific x86-64 processor features.

## Who is affected

According to NGINX security advisories cited by The Hacker News, all open-source releases from 1.9.5 through 1.31.8 are vulnerable when HTTP/2 is enabled. Commercial NGINX Plus releases in the 37.x series prior to updated builds, as well as R34 through R36, are also affected. While updated official NGINX Docker images are available, standard distribution packages on Linux platforms such as Ubuntu (versions 16.04 to 26.10) and Debian (bookworm, trixie, forky, and sid) had not shipped fixed packages as of publication today.

## Why it matters

For enterprise IT leaders, CIOs, and security operations teams in India, this vulnerability presents a significant operational risk due to the widespread deployment of NGINX as an edge proxy and web server. An unauthenticated intruder gaining worker process permissions can potentially intercept sensitive web traffic, compromise backend applications, or access application memory.

Furthermore, the ability to chain this vulnerability with kernel-level flaws to achieve root access—even inside containerised environments—creates a potential path for complete host compromise. Even though specific network and CPU conditions are required for successful exploitation, the availability of public proof-of-concept code means organisations must swiftly verify their exposure and apply necessary remedies.

## What to do now

1. Upgrade open-source NGINX installations to version 1.31.9 or 1.30.7, and NGINX Plus builds to their respective fixed releases.
1. Perform a complete service restart or live binary upgrade after updating, as a standard configuration reload leaves old executable worker processes running.
1. Verify whether web servers accept HTTP/2 connections by running OpenSSL ALPN commands against origin servers.
1. Disable HTTP/2 support in NGINX configuration files as an immediate temporary mitigation if patching cannot be completed straight away.
1. Block the Linux kernel SCTP module from loading on systems where SCTP is not required to prevent potential privilege escalation.
1. Monitor server environments for abnormal worker child processes, unexpected core dumps, or heavy HTTP/2 traffic without matching access log entries.

## Key takeaways

* A 10-year-old NGINX HTTP/2 flaw allows unauthenticated remote code execution at the worker process level.
* Attackers can achieve full root access by pairing the worker privilege exploit with secondary Linux kernel flaws.
* Remediation requires upgrading to fixed builds followed by a full binary restart, or temporarily disabling HTTP/2.

