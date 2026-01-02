# NZBGet

NZBGet is a usenet downloader, written in C++ and designed with performance in mind to achieve maximum download speed by using very little system resources. It supports all platforms including Windows, Mac, Linux and works on all devices including PC, NAS, WLAN routers and media players.

![Logo](https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/nzbget-icon.png)

## Docker Image

`linuxserver/nzbget:latest`

## Categories

- Usenetserver

## Ports

- 6789:6789/tcp

## Environment Variables

- `PUID` - PUID (default: `1000`)
- `PGID` - PGID (default: `100`)

## Volumes

- `/portainer/Files/AppData/Config/Nzbget` → `/config`
- `/portainer/Downloads` → `/downloads`

## Maintainer

 https://github.com/mycroftwilde/portainer_templates/

