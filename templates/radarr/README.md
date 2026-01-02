# Radarr

Radarr - A fork of Sonarr to work with movies la Couchpotato.

![Logo](https://mediadepot.github.io/templates/img/radarr.png)

## Docker Image

`linuxserver/radarr:latest`

## Categories

- Downloaders
- Mediaappvideo

## Ports

- 7878/tcp

## Environment Variables

- `PGID` - PGID (default: `15000`)
- `PUID` - PUID (default: `15000`)

## Volumes

- `/opt/mediadepot/apps/radarr` → `/config`
- `/media/storage/downloads/movies` → `/downloads`
- `/media/storage/movies` → `/movies`
- `/media/temp/blackhole/movies` → `/blackhole`
- `/etc/localtime` → `/etc/localtime`

## Maintainer

 https://github.com/mediadepot/templates/

