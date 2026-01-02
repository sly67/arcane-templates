# Bazarr

Bazarr is a companion application to Sonarr and Radarr. It can manage and download subtitles based on your requirements. You define your preferences by TV show or movie and Bazarr takes care of everything for you.

![Logo](https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/bazarr.png)

## Docker Image

`hotio/bazarr:release`

## Categories

- Usenetserver

## Ports

- 6767:6767/tcp

## Environment Variables

- `PUID` - PUID (default: `1000`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ

## Volumes

- `/portainer/Files/AppData/Config/Bazarr` → `/config`
- `/portainer/TV` → `/tv`
- `/portainer/Movies` → `/movies`

## Maintainer

 https://github.com/mycroftwilde/portainer_templates/

