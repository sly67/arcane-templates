# Msedge

[Microsoft Edge](https://www.microsoft.com/edge) is a cross-platform web browser developed by Microsoft and based on Chromium.

![Logo](https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/edge-logo.png)

## Docker Image

`linuxserver/msedge:latest`

## Ports

- 3000:3000/tcp
- 3001:3001/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)
- `EDGE_CLI` - EDGE_CLI (default: `https://www.linuxserver.io/`)

## Volumes

- `/volume1/docker/msedge/config` → `/config`

## Maintainer

 https://github.com/technorabilia/portainer-templates/

