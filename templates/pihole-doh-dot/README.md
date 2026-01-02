# Pi-Hole DoH/DoT

A Linux network-level advertisement and Internet tracker blocking application which acts as a DNS sinkhole with both DoH (DNS over HTTPS) and DoT (DNS over TLS) clients.

![Logo](https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/pihole_doh-dot.png)

## Docker Image

`oijkn/pihole-doh-dot:latest`

## Categories

- Other
- Tools

## Ports

- 53:53/tcp
- 53:53/udp
- 67:67/udp
- 1010:80/tcp
- 4443:443/tcp

## Volumes

- `/portainer/Files/AppData/Config/PiHole_DoH-DoT` → `/etc/pihole`
- `/portainer/Files/AppData/Config/PiHole_DoH-DoT/DNS` → `/etc/dnsmasq.d`

## Maintainer

 https://github.com/novaspirit/pi-hosted/

