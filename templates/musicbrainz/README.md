# MusicBrainz

MusicBrainz is an open music encyclopedia that collects music metadata and makes it available to the public.

![Logo](https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/musicbrainz-icon.png)

## Docker Image

`linuxserver/musicbrainz:latest`

## Categories

- Musicserver

## Ports

- 5000:5000/tcp

## Environment Variables

- `BRAINZCODE` - BRAINZCODE
- `PUID` - PUID (default: `1000`)
- `PGID` - PGID (default: `100`)

## Volumes

- `/portainer/Files/AppData/Config/MusicBrainz` → `/config`
- `/portainer/Files/AppData/MusicBrainz` → `/data`

## Maintainer

 https://github.com/mycroftwilde/portainer_templates/

