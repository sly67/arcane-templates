# Webcord

[WebCord](https://github.com/SpacingBat3/WebCord) can be summarized as a pack of security and privacy hardenings, Discord features reimplementations, Electron / Chromium / Discord bugs workarounds, stylesheets, internal pages and wrapped https://discord.com page, designed to conform with ToS as much as it is possible (or hide the changes that might violate it from Discord's eyes).

![Logo](https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/webcord-icon.png)

## Docker Image

`linuxserver/webcord:latest`

## Ports

- 3000:3000/tcp
- 3001:3001/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)

## Volumes

- `/volume1/docker/webcord/config` → `/config`

## Maintainer

 https://github.com/technorabilia/portainer-templates/

