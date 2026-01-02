# Emby

Emby organizes video, music, live TV, and photos from personal media libraries and streams them to smart TVs, streaming boxes and mobile devices. This container is packaged as a standalone emby Media Server.

![Logo](https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/emby.png)

## Docker Image

`linuxserver/emby:latest`

## Categories

- Mediaserver

## Ports

- 8096:8096/tcp
- 8920:8920/tcp

## Environment Variables

- `PUID` - PUID (default: `1000`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ

## Volumes

- `/portainer/Files/AppData/Config/Emby` → `/config`
- `/portainer/TV` → `/data/tvshows`
- `/portainer/Movies` → `/data/movies`

## Maintainer

 https://github.com/mycroftwilde/portainer_templates/

