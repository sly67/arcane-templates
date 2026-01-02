# Ombi

Ombi allows you to host your own Plex Request and user management system. If you are sharing your Plex server with other users, allow them to request new content using an easy to manage interface

![Logo](https://mediadepot.github.io/templates/img/ombi.png)

## Docker Image

`linuxserver/ombi:latest`

## Categories

- Downloaders
- Networkother
- Mediaappvideo
- Tools

## Ports

- 3579/tcp

## Environment Variables

- `PGID` - PGID (default: `15000`)
- `PUID` - PUID (default: `15000`)

## Volumes

- `/opt/mediadepot/apps/ombi` → `/config`
- `/etc/localtime` → `/etc/localtime`

## Maintainer

 https://github.com/mediadepot/templates/

