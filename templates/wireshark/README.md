# Wireshark

[Wireshark](https://www.wireshark.org/) is the world’s foremost and widely-used network protocol analyzer. It lets you see what’s happening on your network at a microscopic level and is the de facto (and often de jure) standard across many commercial and non-profit enterprises, government agencies, and educational institutions. Wireshark development thrives thanks to the volunteer contributions of networking experts around the globe and is the continuation of a project started by Gerald Combs in 1998.

![Logo](https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/wireshark-icon.png)

## Docker Image

`linuxserver/wireshark:latest`

## Categories

- Managementutilityserver

## Ports

- 3000:3000/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)

## Volumes

- `/volume1/docker/wireshark/config` → `/config`

## Maintainer

 https://github.com/mycroftwilde/portainer_templates/

