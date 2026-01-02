# Opera

[Opera](https://www.opera.com/) is a multi-platform web browser developed by its namesake company Opera. The browser is based on Chromium, but distinguishes itself from other Chromium-based browsers (Chrome, Edge, etc.) through its user interface and other features.

![Logo](https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/opera-icon.png)

## Docker Image

`linuxserver/opera:latest`

## Ports

- 3000:3000/tcp
- 3001:3001/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)
- `OPERA_CLI` - OPERA_CLI (default: `https://www.linuxserver.io/`)

## Volumes

- `/volume1/docker/opera/config` → `/config`

## Maintainer

 https://github.com/technorabilia/portainer-templates/

