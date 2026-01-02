# Manyfold

[Manyfold](https://github.com/manyfold3d/manyfold/) is an open source, self-hosted web application for managing a collection of 3D models, particularly focused on 3D printing.

![Logo](https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/manyfold-logo.png)

## Docker Image

`linuxserver/manyfold:latest`

## Ports

- 3214:3214/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)
- `DATABASE_URL` - DATABASE_URL
- `REDIS_URL` - REDIS_URL
- `SECRET_KEY_BASE` - SECRET_KEY_BASE

## Volumes

- `/volume1/docker/manyfold/config` → `/config`
- `/volume1/docker/manyfold/libraries` → `/libraries`

## Maintainer

 https://github.com/technorabilia/portainer-templates/

