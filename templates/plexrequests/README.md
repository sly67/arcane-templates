# Plex Requests

Simple automated way for users to request new content for Plex.

![Logo](https://mediadepot.github.io/templates/img/plex-requests-logo.jpeg)

## Docker Image

`linuxserver/plexrequests:latest`

## Categories

- Downloaders
- Networkother
- Mediaappvideo
- Tools

## Ports

- 3000/tcp

## Environment Variables

- `PGID` - PGID (default: `15000`)
- `PUID` - PUID (default: `15000`)

## Volumes

- `/opt/mediadepot/apps/plexrequests` → `/config`
- `/etc/localtime` → `/etc/localtime`

## Maintainer

 https://github.com/mediadepot/templates/

