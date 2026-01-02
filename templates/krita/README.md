# Krita

[Krita](https://krita.org/en/) is a professional FREE and open source painting program. It is made by artists that want to see affordable art tools for everyone.

![Logo](https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/krita-logo.png)

## Docker Image

`linuxserver/krita:latest`

## Ports

- 3000:3000/tcp
- 3001:3001/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)

## Volumes

- `/volume1/docker/krita/config` → `/config`

## Maintainer

 https://github.com/technorabilia/portainer-templates/

