# Booksonic

Booksonic is a server and an app for streaming your audiobooks to any pc or android phone. Most of the functionality is also availiable on other platforms that have apps for subsonic.

![Logo](https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/booksonic.png)

## Docker Image

`linuxserver/booksonic:latest`

## Categories

- Libraryserver

## Ports

- 4040:4040/tcp

## Environment Variables

- `PUID` - PUID (default: `1000`)
- `PGID` - PGID (default: `100`)
- `CONTEXT_PATH` - CONTEXT_PATH (default: `booksonic`)

## Volumes

- `/portainer/Books` → `/books`
- `/portainer/Files/Podcasts` → `/podcast`
- `/portainer/Files/AppData/Config/Booksonic` → `/config`

## Maintainer

 https://github.com/mycroftwilde/portainer_templates/

