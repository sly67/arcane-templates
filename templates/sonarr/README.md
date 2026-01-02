# Sonarr

Sonarr (formerly NZBdrone) is a PVR for usenet and bittorrent users. It can monitor multiple RSS feeds for new episodes of your favorite shows and will grab, sort and rename them. It can also be configured to automatically upgrade the quality of files already downloaded when a better quality format becomes available.

![Logo](https://mediadepot.github.io/templates/img/sonarr-icon.png)

## Docker Image

`linuxserver/sonarr:latest`

## Categories

- Downloaders
- Mediaappvideo

## Ports

- 8989/tcp

## Environment Variables

- `PGID` - PGID (default: `15000`)
- `PUID` - PUID (default: `15000`)

## Volumes

- `/opt/mediadepot/apps/sonarr` → `/config`
- `/media/storage/downloads/tvshows` → `/downloads`
- `/media/storage/tvshows` → `/tv`
- `/media/temp/blackhole/tvshows` → `/blackhole`
- `/etc/localtime` → `/etc/localtime`

## Maintainer

 https://github.com/mediadepot/templates/

