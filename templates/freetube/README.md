# Freetube

[FreeTube](https://freetubeapp.io/) is a feature-rich and user-friendly YouTube client with a focus on privacy.

![Logo](https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/freetube-logo.png)

## Docker Image

`linuxserver/freetube:latest`

## Ports

- 3000:3000/tcp
- 3001:3001/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)

## Volumes

- `/volume1/docker/freetube/config` → `/config`

## Maintainer

 https://github.com/technorabilia/portainer-templates/

