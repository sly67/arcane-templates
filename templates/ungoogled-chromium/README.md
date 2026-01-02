# Ungoogled-chromium

[Ungoogled Chromium](https://github.com/ungoogled-software/ungoogled-chromium) is Google Chromium, sans dependency on Google web services.

![Logo](https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/ungoogled-chromium-logo.png)

## Docker Image

`linuxserver/ungoogled-chromium:latest`

## Ports

- 3000:3000/tcp
- 3001:3001/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)
- `CHROME_CLI` - CHROME_CLI (default: `https://www.linuxserver.io/`)

## Volumes

- `/volume1/docker/ungoogled-chromium/config` → `/config`

## Maintainer

 https://github.com/technorabilia/portainer-templates/

