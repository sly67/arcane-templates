# Plex

Your favorite movies, TV, music, web shows, podcasts, and more, all streamed to your favorite screens.

![Logo](https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/plex-icon.png)

## Docker Image

`linuxserver/plex:latest`

## Categories

- Mediaserver

## Environment Variables

- `PUID` - PUID (default: `1000`)
- `PGID` - PGID (default: `100`)
- `VERSION` - VERSION

## Volumes

- `/portainer/Files/AppData/Config/Plex` → `/config`
- `/portainer/TV` → `/tv`
- `/portainer/Movies` → `/movies`

## Maintainer

 https://github.com/mycroftwilde/portainer_templates/

