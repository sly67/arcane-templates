# Pidgin

[Pidgin](https://pidgin.im/) is a chat program which lets you log into accounts on multiple chat networks simultaneously. This means that you can be chatting with friends on XMPP and sitting in an IRC channel at the same time.

![Logo](https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/pidgin-logo.png)

## Docker Image

`linuxserver/pidgin:latest`

## Categories

- Chatserver

## Ports

- 3000:3000/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)

## Volumes

- `/volume1/docker/pidgin/config` → `/config`

## Maintainer

 https://github.com/mycroftwilde/portainer_templates/

