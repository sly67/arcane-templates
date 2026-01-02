# Sqlitebrowser

[DB Browser for SQLite](https://sqlitebrowser.org/) is a high quality, visual, open source tool to create, design, and edit database files compatible with SQLite.

![Logo](https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/sqlitebrowser-banner.png)

## Docker Image

`linuxserver/sqlitebrowser:latest`

## Ports

- 3000:3000/tcp
- 3001:3001/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)

## Volumes

- `/volume1/docker/sqlitebrowser/config` → `/config`

## Maintainer

 https://github.com/technorabilia/portainer-templates/

