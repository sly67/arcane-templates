# qBittorrent

The qBittorrent project aims to provide an open-source software alternative to µTorrent. qBittorrent is based on the Qt toolkit and libtorrent-rasterbar library.

![Logo](https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/qbittorrent-icon.png)

## Docker Image

`linuxserver/qbittorrent:latest`

## Categories

- Torrentserver

## Ports

- 6881:6881/tcp
- 6881:6881/udp
- 8080:8080/tcp

## Environment Variables

- `PUID` - PUID (default: `1000`)
- `PGID` - PGID (default: `100`)

## Volumes

- `/portainer/Files/AppData/Config/qBittorrent` → `/config`
- `/portainer/Downloads` → `/downloads`

## Maintainer

 https://github.com/mycroftwilde/portainer_templates/

