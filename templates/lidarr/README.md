# Lidarr

Lidarr is a music collection manager for Usenet and BitTorrent users.

![Logo](https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/lidarr.png)

## Docker Image

`hotio/lidarr:release`

## Categories

- Usenetserver

## Ports

- 8686:8686/tcp

## Environment Variables

- `PUID` - PUID (default: `1000`)
- `PGID` - PGID (default: `100`)

## Volumes

- `/portainer/Files/AppData/Config/Lidarr` → `/config`
- `/portainer/Downloads` → `/downloads`
- `/portainer/Music` → `/music`

## Maintainer

 https://github.com/mycroftwilde/portainer_templates/

