# Booksonic-air

[Booksonic-air](http://booksonic.org) is a platform for accessing the audibooks you own wherever you are. At the moment the platform consists of Booksonic Air - A server for streaming your audiobooks, successor to the original Booksonic server and based on Airsonic. Booksonic App - An DSub based Android app for connection to Booksonic-Air servers. .

![Logo](https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/booksonic-air.png)

## Docker Image

`linuxserver/booksonic-air:latest`

## Categories

- Libraryserver

## Ports

- 4040:4040/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)
- `CONTEXT_PATH` - CONTEXT_PATH (default: `url-base`)

## Volumes

- `/volume1/docker/booksonic-air/config` → `/config`
- `/volume1/docker/booksonic-air/audiobooks` → `/audiobooks`
- `/volume1/docker/booksonic-air/podcasts` → `/podcasts`
- `/volume1/docker/booksonic-air/othermedia` → `/othermedia`

## Maintainer

 https://github.com/mycroftwilde/portainer_templates/

