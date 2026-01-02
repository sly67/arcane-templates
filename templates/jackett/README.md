# Jackett

Jackett works as a proxy server it translates queries from apps like Sonarr etc into tracker-site-specific http queries and parses the html response sending results back to the requesting software.

![Logo](https://mediadepot.github.io/templates/img/jacket-icon.png)

## Docker Image

`linuxserver/jackett:latest`

## Categories

- Downloaders
- Tools

## Ports

- 9117/tcp

## Environment Variables

- `PGID` - PGID (default: `15000`)
- `PUID` - PUID (default: `15000`)
- `TZ` - TZ (default: `America/Los_Angeles`)

## Volumes

- `/opt/mediadepot/apps/jackett` → `/config`
- `/media/storage/downloads` → `/downloads`
- `/etc/localtime` → `/etc/localtime`

## Maintainer

 https://github.com/mediadepot/templates/

