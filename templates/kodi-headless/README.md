# Kodi Headless

Headless installation of Kodi™ (formerly known as XBMC™), to enable library updates.

![Logo](https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/kodi-icon.png)

## Docker Image

`linuxserver/kodi-headless:latest`

## Categories

- Mediaserver

## Ports

- 8080/tcp
- 9777/udp

## Environment Variables

- `PUID` - PUID (default: `1000`)
- `PGID` - PGID (default: `100`)

## Volumes

- `/portainer/Files/AppData/Config/Kodi` → `/config`

## Maintainer

 https://github.com/mycroftwilde/portainer_templates/

