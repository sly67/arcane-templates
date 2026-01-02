# qdirstat

QDirStat is a graphical application to show where your disk space has gone and to help you to clean it up.

![Logo](https://mediadepot.github.io/templates/img/cardigann.png)

## Docker Image

`jlesage/qdirstat:latest`

## Categories

- Utilities

## Ports

- 5800/tcp

## Environment Variables

- `PGID` - PGID (default: `15000`)
- `PUID` - PUID (default: `15000`)

## Volumes

- `/opt/mediadepot/apps/qdirstat` → `/config`
- `/opt` → `/storage/opt`
- `/mnt` → `/storage/mnt`

## Maintainer

 https://github.com/mediadepot/templates/

