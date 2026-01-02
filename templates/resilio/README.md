# Resilio Sync

Resilio Sync (formerly BitTorrent Sync) uses the BitTorrent protocol to sync files and folders between all of your devices. There are both free and paid versions, this container supports both.

![Logo](https://mediadepot.github.io/templates/img/resilio.png)

## Docker Image

`linuxserver/resilio-sync:latest`

## Categories

- Backup
- Cloud
- Networkother
- Tools

## Ports

- 8888/tcp
- 55555/tcp

## Environment Variables

- `PGID` - PGID (default: `15000`)
- `PUID` - PUID (default: `15000`)
- `TZ` - TZ (default: `America/Los_Angeles`)

## Volumes

- `/opt/mediadepot/apps/resilio` → `/config`
- `/media/storage` → `/sync`
- `/media/storage/downloads` → `/downloads`

## Maintainer

 https://github.com/mediadepot/templates/

