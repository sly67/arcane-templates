# Adguardhome

AdGuard Home is a network-wide software for blocking ads & tracking.

![Logo](https://developer.asustor.com/uploadIcons/0020_999_1595573028_AdGuardhome_256.png)

## Docker Image

`adguard/adguardhome:latest`

## Categories

- Other
- Tools

## Ports

- 53:53/tcp
- 53:53/udp
- 67:67/udp
- 80:80/tcp
- 443:443/tcp
- 443:443/udp
- 3001:3000/tcp
- 853:853/tcp
- 784:784/udp
- 853:853/udp
- 8853:8853/udp
- 5443:5443/tcp
- 5443:5443/udp

## Volumes

- `/portainer/Files/AppData/Config/AdguardHome/config` → `/opt/adguardhome/conf`
- `/portainer/Files/AppData/Config/AdguardHome/work` → `/opt/adguardhome/work`

## Maintainer

 https://github.com/novaspirit/pi-hosted/

