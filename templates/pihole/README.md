# Pi-Hole

A Linux network-level advertisement and Internet tracker blocking application which acts as a DNS sinkhole.

![Logo](https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/pihole.png)

## Docker Image

`pihole/pihole:latest`

## Categories

- Dns

## Ports

- 53:53/tcp
- 53:53/udp
- 67:67/udp
- 1010:80/tcp
- 4443:443/tcp

## Volumes

- `/portainer/Files/AppData/Config/PiHole` → `/etc/pihole`
- `/portainer/Files/AppData/Config/PiHole/DNS` → `/etc/dnsmasq.d`

## Maintainer

 https://github.com/mycroftwilde/portainer_templates/

