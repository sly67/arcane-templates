# Rsnapshot

[Rsnapshot](http://www.rsnapshot.org/) is a filesystem snapshot utility based on rsync. rsnapshot makes it easy to make periodic snapshots of local machines, and remote machines over ssh. The code makes extensive use of hard links whenever possible, to greatly reduce the disk space required.'

![Logo](https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/rsnapshot.png)

## Docker Image

`linuxserver/rsnapshot:latest`

## Categories

- Backupandsyncserver

## Ports

- 80:80/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)

## Volumes

- `/volume1/docker/rsnapshot/config` → `/config`
- `/volume1/docker/rsnapshot/.snapshots` → `/.snapshots`
- `/volume1/docker/rsnapshot/data` → `/data`

## Maintainer

 https://github.com/mycroftwilde/portainer_templates/

