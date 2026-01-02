# Archivebox

ArchiveBox is a powerful, self-hosted internet archiving solution to collect, save, and view sites you want to preserve offline.

![Logo](https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/archivebox.png)

## Docker Image

`archivebox/archivebox:latest`

## Categories

- Other
- Tools

## Ports

- 8002:8000/tcp

## Environment Variables

- `ALLOWED_HOSTS` - ALLOWED_HOSTS (default: `*`)
- `MEDIA_MAX_SIZE` - MEDIA_MAX_SIZE (default: `750m`)
- `PUBLIC_INDEX` - PUBLIC_INDEX (default: `true`)
- `PUBLIC_SNAPSHOTS` - PUBLIC_SNAPSHOTS (default: `true`)
- `PUBLIC_ADD_VIEW` - PUBLIC_ADD_VIEW (default: `false`)

## Volumes

- `/portainer/Files/AppData/Config/archivebox` → `/data`

## Maintainer

 https://github.com/novaspirit/pi-hosted/

