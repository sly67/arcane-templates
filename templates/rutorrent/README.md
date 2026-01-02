# ruTorrent

ruTorrent is a quick and efficient BitTorrent client

![Logo](https://mediadepot.github.io/templates/img/rtorrent-icon.png)

## Docker Image

`mediadepot/rutorrent`

## Categories

- Downloaders
- Networkother
- Tools

## Ports

- 80/tcp
- 51413/tcp
- 6881/tcp

## Environment Variables

- `PGID` - PGID (default: `15000`)
- `PUID` - PUID (default: `15000`)
- `TZ` - TZ (default: `America/Los_Angeles`)

## Volumes

- `/opt/mediadepot/apps/rutorrent` → `/config`
- `/media/temp/processing` → `/processing`
- `/media/temp/blackhole` → `/blackhole`
- `/media/storage/downloads` → `/downloads`

## Maintainer

 https://github.com/mediadepot/templates/

