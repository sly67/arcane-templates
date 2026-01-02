# Couchpotato

CouchPotato (CP) is an automatic NZB and torrent downloader. You can keep a "movies I want"-list and it will search for NZBs/torrents of these movies every X hours. Once a movie is found, it will send it to SABnzbd or download the torrent to a specified directory.

![Logo](https://mediadepot.github.io/templates/img/couchpotato-icon.png)

## Docker Image

`linuxserver/couchpotato:latest`

## Categories

- Downloaders
- Mediaappvideo

## Ports

- 5050/tcp

## Environment Variables

- `PGID` - PGID (default: `15000`)
- `PUID` - PUID (default: `15000`)
- `TZ` - TZ (default: `America/Los_Angeles`)

## Volumes

- `/opt/mediadepot/apps/couchpotato` → `/config`
- `/media/storage/downloads/movies` → `/downloads`
- `/media/storage/movies` → `/movies`
- `/media/temp/blackhole/movies` → `/blackhole`

## Maintainer

 https://github.com/mediadepot/templates/

