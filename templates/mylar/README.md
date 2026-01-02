# Mylar

An automated Comic Book downloader (cbr/cbz) for use with SABnzbd, NZBGet and torrents.

![Logo](https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/mylar-icon.png)

## Docker Image

`linuxserver/mylar:latest`

## Categories

- Usenetserver

## Ports

- 8090:8090/tcp

## Environment Variables

- `PUID` - PUID (default: `1000`)
- `PGID` - PGID (default: `100`)

## Volumes

- `/portainer/Files/AppData/Config/Mylar` → `/config`
- `/portainer/Downloads` → `/downloads`
- `/portainer/Comics` → `/comics`

## Maintainer

 https://github.com/mycroftwilde/portainer_templates/

