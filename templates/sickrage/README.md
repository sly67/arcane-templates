# SickRage

Automatic Video Library Manager for TV Shows. It watches for new episodes of your favorite shows, and when they are posted it does its magic.

![Logo](https://mediadepot.github.io/templates/img/sickrage-icon.png)

## Docker Image

`linuxserver/sickrage:latest`

## Categories

- Downloaders
- Mediaappvideo

## Ports

- 8081/tcp

## Environment Variables

- `PGID` - PGID (default: `15000`)
- `PUID` - PUID (default: `15000`)
- `TZ` - TZ (default: `America/Los_Angeles`)

## Volumes

- `/opt/mediadepot/apps/sickrage` → `/config`
- `/media/storage/downloads/tvshows` → `/downloads`
- `/media/storage/tvshows` → `/tv`
- `/media/temp/blackhole/tvshows` → `/blackhole`

## Maintainer

 https://github.com/mediadepot/templates/

