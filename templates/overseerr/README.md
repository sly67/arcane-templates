# Overseerr

Overseerr is a request management and media discovery tool built to work with your existing Plex ecosystem.

![Logo](https://mediadepot.github.io/templates/img/overseerr.png)

## Docker Image

`lscr.io/linuxserver/overseerr:latest`

## Categories

- Downloaders
- Networkother
- Mediaappvideo
- Tools

## Ports

- 5055/tcp

## Environment Variables

- `PGID` - PGID (default: `15000`)
- `PUID` - PUID (default: `15000`)
- `TZ` - TZ (default: `America/Los_Angeles`)

## Volumes

- `/opt/mediadepot/apps/overseerr` → `/config`
- `/etc/localtime` → `/etc/localtime`

## Maintainer

 https://github.com/mediadepot/templates/

