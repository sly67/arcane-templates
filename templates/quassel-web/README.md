# Quassel-web

[Quassel-web](https://github.com/magne4000/quassel-webserver) is a web client for Quassel. Note that a Quassel-Core instance is required, we have a container available [here.](https://hub.docker.com/r/linuxserver/quassel-core/)

![Logo](https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/quassel-web-banner.png)

## Docker Image

`linuxserver/quassel-web:latest`

## Ports

- 64080:64080/tcp
- 64443:64443/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)
- `QUASSEL_CORE` - QUASSEL_CORE (default: `192.168.1.10`)
- `QUASSEL_PORT` - QUASSEL_PORT (default: `4242`)
- `QUASSEL_HTTPS` - QUASSEL_HTTPS
- `URL_BASE` - URL_BASE (default: `/quassel`)

## Volumes

- `/volume1/docker/quassel-web/config` → `/config`

## Maintainer

 https://github.com/technorabilia/portainer-templates/

