# Clamav

ClamAV® is an open source antivirus engine for detecting trojans, viruses, malware & other malicious threats.

![Logo](http://www.clamav.net/assets/clamav-trademark.png)

## Docker Image

`mkodockx/docker-clamav:alpine`

## Categories

- Other
- Anitvirus

## Ports

- 3310:3310/tcp

## Volumes

- `/etc/timezone` → `/etc/timezone`
- `/etc/localtime` → `/etc/localtime`
- `/portainer/Files/AppData/Config/clamav/config` → `/etc/clamav`
- `/portainer/Files/AppData/Config/clamav/virus_definitions` → `/var/lib/clamav`

## Maintainer

 https://github.com/novaspirit/pi-hosted/

