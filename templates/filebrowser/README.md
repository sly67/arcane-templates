# Filebrowser

filebrowser provides a file managing interface within a specified directory and it can be used to upload, delete, preview, rename and edit your files.

![Logo](https://mediadepot.github.io/templates/img/filebrowser-icon.png)

## Docker Image

`mediadepot/filebrowser:latest`

## Categories

- Tools
- Networkweb
- Networkother

## Ports

- 8080/tcp

## Environment Variables

- `TZ` - TZ (default: `America/Los_Angeles`)

## Volumes

- `/media/storage/tvshows` → `/srv/tvshows`
- `/media/storage/movies` → `/srv/movies`
- `/media/storage/music` → `/srv/music`
- `/media/storage/photos` → `/srv/photos`
- `/media/storage/ebooks` → `/srv/ebooks`
- `/media/storage/documents` → `/srv/documents`
- `/media/storage/software` → `/srv/software`
- `/media/storage/downloads` → `/srv/downloads`
- `/media/temp/blackhole` → `/srv/blackhole`
- `/media/temp/processing` → `/srv/processing`
- `/opt/mediadepot/apps/filebrowser` → `/config`

## Maintainer

 https://github.com/mediadepot/templates/

