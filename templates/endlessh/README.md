# Endlessh

[Endlessh](https://github.com/skeeto/endlessh) is an SSH tarpit that very slowly sends an endless, random SSH banner. It keeps SSH clients locked up for hours or even days at a time. The purpose is to put your real SSH server on another port and then let the script kiddies get stuck in this tarpit instead of bothering a real server.

![Logo](https://github.com/linuxserver/docker-templates/raw/master/linuxserver.io/img/openssh-server-logo.png)

## Docker Image

`linuxserver/endlessh:latest`

## Categories

- Tools

## Ports

- 22:2222/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)
- `MSDELAY` - MSDELAY (default: `10000`)
- `MAXLINES` - MAXLINES (default: `32`)
- `MAXCLIENTS` - MAXCLIENTS (default: `4096`)
- `LOGFILE` - LOGFILE (default: `false`)
- `BINDFAMILY` - BINDFAMILY

## Volumes

- `/volume1/docker/endlessh/config` → `/config`

## Maintainer

 https://github.com/mycroftwilde/portainer_templates/

