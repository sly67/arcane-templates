# Audiobookshelf

Audiobook Server

![Logo](https://raw.githubusercontent.com/mycroftwilde/portainer_templates/master/Images/AudioBookshelfLogo.png)

## Docker Image

`ghcr.io/advplyr/audiobookshelf:latest`

## Categories

- Libraryserver

## Ports

- 13378:80/tcp

## Environment Variables

- `PUID` - PUID (default: `1000`)
- `PGID` - PGID (default: `1000`)

## Volumes

- `/portainer/Files/AppData/Config/Audiobookshelf` → `/config`
- `/path/to/audiobooks` → `/audiobooks`
- `/path/to/podcasts` → `/podcasts`
- `/path/to/Metadata` → `/metadata`

## Maintainer

 https://github.com/mycroftwilde/portainer_templates/

