# Kdenlive

[Kdenlive](https://kdenlive.org/) is a powerful free and open source cross-platform video editing program made by the KDE community. Feature rich and production ready.

![Logo](https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/kdenlive-logo.png)

## Docker Image

`linuxserver/kdenlive:latest`

## Ports

- 3000:3000/tcp
- 3001:3001/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)
- `SUBFOLDER` - SUBFOLDER (default: `/`)

## Volumes

- `/volume1/docker/kdenlive/config` → `/config`

## Maintainer

 https://github.com/technorabilia/portainer-templates/

