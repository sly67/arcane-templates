# Jellyfin

Jellyfin is a Free Software Media System that puts you in control of managing and streaming your media. It is an alternative to the proprietary Emby and Plex, to provide media from a dedicated server to end-user devices via multiple apps.

![Logo](https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/jellyfin.png)

## Docker Image

`linuxserver/jellyfin:latest`

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

- `/portainer/Files/AppData/Config/Jellyfin` → `/config`
- `/portainer/TV` → `/data/tvshows`
- `/portainer/Movies` → `/data/movies`

## Maintainer

 https://github.com/mycroftwilde/portainer_templates/

