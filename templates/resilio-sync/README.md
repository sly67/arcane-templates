# Resilio Sync

Resilio Sync (formerly BitTorrent Sync) uses the BitTorrent protocol to sync files and folders between all of your devices. There are both free and paid versions, this container supports both.

![Logo](https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/resilio.png)

## Docker Image

`linuxserver/resilio-sync:latest`

## Categories

- Backup
- Cloud
- Other
- Tools

## Environment Variables

- `PUID` - PUID (default: `1000`)
- `PGID` - PGID (default: `100`)

## Volumes

- `/portainer/Files/AppData/Config/Resilio-Sync` → `/config`
- `undefined` → `/sync`
- `/portainer/Downloads` → `/downloads`

