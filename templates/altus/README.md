# Altus

[Altus](https://github.com/amanharwara/altus) is an Electron-based WhatsApp client with themes and multiple account support.

![Logo](https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/altus-logo.png)

## Docker Image

`linuxserver/altus:latest`

## Ports

- 3000:3000/tcp
- 3001:3001/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)

## Volumes

- `/volume1/docker/altus/config` → `/config`

## Maintainer

 https://github.com/technorabilia/portainer-templates/

