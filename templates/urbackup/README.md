# UrBackup

UrBackup is an easy to setup Open Source client/server backup system, that through a combination of image and file backups accomplishes both data safety and a fast restoration time.

![Logo](https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/urbackup.png)

## Docker Image

`uroni/urbackup-server:latest`

## Categories

- Backup

## Ports

- 55415:55415/tcp
- 55414:55414/tcp

## Environment Variables

- `PUID` - PUID (default: `1000`)
- `PGID` - PGID (default: `1000`)

## Volumes

- `/portainer/Files/AppData/Config/urbackup` → `/var/urbackup`
- `/portainer/backups` → `/backup`

## Maintainer

 https://github.com/novaspirit/pi-hosted/

