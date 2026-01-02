# Ardour

[Ardour](https://ardour.org/) is an open source, collaborative effort of a worldwide team including musicians, programmers, and professional recording engineers.

![Logo](https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/ardour-logo.png)

## Docker Image

`linuxserver/ardour:latest`

## Ports

- 3000:3000/tcp
- 3001:3001/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)
- `SUBFOLDER` - SUBFOLDER (default: `/`)

## Volumes

- `/volume1/docker/ardour/config` → `/config`

## Maintainer

 https://github.com/technorabilia/portainer-templates/

