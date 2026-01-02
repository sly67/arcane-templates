# Murmur

Mumble is a voicechat program for gamers written on top of Qt and Opus. Murmur is the server backend for Mumble.

![Logo](https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/Mumble-logo.png)

## Docker Image

`goofball222/murmur:latest`

## Categories

- Chatserver

## Ports

- 64738:64738/tcp
- 64738:64738/udp

## Environment Variables

- `PUID` - PUID (default: `1000`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ

## Volumes

- `/etc/localtime:ro` → `/etc/localtime`
- `/portainer/Files/Config/Murmur` → `/opt/murmur/config`
- `/portainer/Files/Murmur/data` → `/opt/murmur/data`
- `/portainer/Files/Murmur/log` → `/opt/murmur/log`

## Maintainer

 https://github.com/mycroftwilde/portainer_templates/

