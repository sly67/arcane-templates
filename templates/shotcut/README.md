# Shotcut

[Shotcut](https://www.shotcut.org/) is a free, open source, cross-platform video editor.

![Logo](https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/shotcut-logo.png)

## Docker Image

`linuxserver/shotcut:latest`

## Ports

- 3000:3000/tcp
- 3001:3001/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)

## Volumes

- `/volume1/docker/shotcut/config` → `/config`

## Maintainer

 https://github.com/technorabilia/portainer-templates/

