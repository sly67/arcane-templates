# Plex Media Server

Plex organizes your video, music, and photo collections and streams them to all of your screens.

![Logo](https://mediadepot.github.io/templates/img/plex-icon.png)

## Docker Image

`linuxserver/plex:latest`

## Categories

- Mediaservervideo
- Mediaservermusic
- Mediaserverphotos

## Environment Variables

- `PGID` - PGID (default: `15000`)
- `PUID` - PUID (default: `15000`)
- `TZ` - TZ (default: `America/Los_Angeles`)
- `VERSION` - VERSION (default: `latest`)

## Volumes

- `/opt/mediadepot/apps/plex` → `/config`
- `/media/storage/tvshows` → `/data/tvshows`
- `/media/storage/movies` → `/data/movies`
- `/media/storage/music` → `/data/music`
- `undefined` → `/transcode`

## Maintainer

 https://github.com/mediadepot/templates/

