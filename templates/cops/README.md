# COPS

COPS links to your Calibre library database and allows downloading and emailing of books directly from a web browser and provides a OPDS feed to connect to your devices.

![Logo](https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/cops-icon.png)

## Docker Image

`linuxserver/cops:latest`

## Categories

- Libraryserver

## Ports

- 80/tcp

## Environment Variables

- `PUID` - PUID (default: `1000`)
- `PGID` - PGID (default: `100`)

## Volumes

- `/portainer/Books` → `/books`
- `/portainer/Files/AppData/Config/Cops` → `/config`

## Maintainer

 https://github.com/mycroftwilde/portainer_templates/

