# Beets

The purpose of beets is to get your music collection right once and for all. It catalogs your collection, automatically improving its metadata as it goes using the MusicBrainz database. Then it provides a bouquet of tools for manipulating and accessing your music.

![Logo](https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/beets-icon.png)

## Docker Image

`linuxserver/beets:latest`

## Categories

- Musicserver

## Ports

- 8337:8337/tcp

## Environment Variables

- `PUID` - PUID (default: `1000`)
- `PGID` - PGID (default: `100`)

## Volumes

- `/portainer/Files/AppData/Config/Beets` → `/config`
- `/portainer/Downloads` → `/downloads`
- `/portainer/Music` → `/music`

## Maintainer

 https://github.com/mycroftwilde/portainer_templates/

