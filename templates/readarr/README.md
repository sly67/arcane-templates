# Readarr

Readarr - Book Manager and Automation (Sonarr for Ebooks)

![Logo](https://mediadepot.github.io/templates/img/readarr-logo.png)

## Docker Image

`ghcr.io/linuxserver/readarr:nightly`

## Categories

- Downloaders
- Mediaappbooks

## Ports

- 8787/tcp

## Environment Variables

- `PGID` - PGID (default: `15000`)
- `PUID` - PUID (default: `15000`)
- `TZ` - TZ (default: `America/Los_Angeles`)

## Volumes

- `/opt/mediadepot/apps/readarr` → `/config`
- `/media/storage/downloads/ebooks` → `/downloads`
- `/media/storage/ebooks` → `/books`
- `/media/temp/blackhole/ebooks` → `/blackhole`
- `/etc/localtime` → `/etc/localtime`

## Maintainer

 https://github.com/mediadepot/templates/

