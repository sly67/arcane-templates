# Changedetection.io

[Changedetection.io](https://github.com/dgtlmoon/changedetection.io) provides free, open-source web page monitoring, notification and change detection.

![Logo](https://github.com/linuxserver/docker-templates/raw/master/linuxserver.io/img/changedetection-icon.png)

## Docker Image

`linuxserver/changedetection.io:latest`

## Ports

- 5000:5000/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)
- `BASE_URL` - BASE_URL
- `PLAYWRIGHT_DRIVER_URL` - PLAYWRIGHT_DRIVER_URL

## Volumes

- `/volume1/docker/changedetection.io/config` → `/config`

## Maintainer

 https://github.com/technorabilia/portainer-templates/

