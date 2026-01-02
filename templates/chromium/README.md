# Chromium

[Chromium](https://www.chromium.org/chromium-projects/) is an open-source browser project that aims to build a safer, faster, and more stable way for all users to experience the web.

![Logo](https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/chromium-logo.png)

## Docker Image

`linuxserver/chromium:latest`

## Ports

- 3000:3000/tcp
- 3001:3001/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)
- `CHROME_CLI` - CHROME_CLI (default: `https://www.linuxserver.io/`)

## Volumes

- `/volume1/docker/chromium/config` → `/config`

## Maintainer

 https://github.com/technorabilia/portainer-templates/

