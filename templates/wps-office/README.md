# Wps-office

[WPS Office](https://www.wps.com/) is a lightweight, feature-rich comprehensive office suite with high compatibility. As a handy and professional office software, WPS Office allows you to edit files in Writer, Presentation, Spreadsheet, and PDF to improve your work efficiency.

![Logo](https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/wps-office-icon.png)

## Docker Image

`linuxserver/wps-office:latest`

## Ports

- 3000:3000/tcp
- 3001:3001/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)

## Volumes

- `/volume1/docker/wps-office/config` → `/config`

## Maintainer

 https://github.com/technorabilia/portainer-templates/

