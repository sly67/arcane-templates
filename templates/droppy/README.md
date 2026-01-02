# Droppy

Droppy is a self-hosted file storage server

![Logo](https://mediadepot.github.io/templates/img/filebrowser-icon.png)

## Docker Image

`silverwind/droppy:latest`

## Categories

- Tools
- Networkweb
- Networkother

## Ports

- 8989/tcp

## Environment Variables

- `GID` - GID (default: `15000`)
- `UID` - UID (default: `15000`)
- `TZ` - TZ (default: `America/Los_Angeles`)

## Volumes

- `/media/storage/tvshows` → `/files/tvshows`
- `/media/storage/movies` → `/files/movies`
- `/media/storage/music` → `/files/music`
- `/media/storage/photos` → `/files/photos`
- `/media/storage/ebooks` → `/files/ebooks`
- `/media/storage/documents` → `/files/documents`
- `/media/storage/software` → `/files/software`
- `/media/storage/downloads` → `/files/downloads`
- `/media/temp/blackhole` → `/files/blackhole`
- `/media/temp/processing` → `/files/processing`
- `/opt/mediadepot/apps/droppy` → `/config`

## Maintainer

 https://github.com/mediadepot/templates/

