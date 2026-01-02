# Prowlarr

Prowlarr is a indexer manager/proxy built on the popular arr .net/reactjs base stack to integrate with your various PVR apps. Prowlarr supports both Torrent Trackers and Usenet Indexers. 

![Logo](https://mediadepot.github.io/templates/img/prowlarr-banner.png)

## Docker Image

`ghcr.io/linuxserver/prowlarr:develop`

## Categories

- Downloaders
- Tools

## Ports

- 9696/tcp

## Environment Variables

- `PGID` - PGID (default: `15000`)
- `PUID` - PUID (default: `15000`)
- `TZ` - TZ (default: `America/Los_Angeles`)

## Volumes

- `/opt/mediadepot/apps/prowlarr` → `/config`
- `/etc/localtime` → `/etc/localtime`

## Maintainer

 https://github.com/mediadepot/templates/

