# Hishtory-server

[hiSHtory](https://github.com/ddworken/hishtory) is a better shell history. It stores your shell history in context (what directory you ran the command in, whether it succeeded or failed, how long it took, etc). This is all stored locally and end-to-end encrypted for syncing to to all your other computers.

![Logo](https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/hishtory-server-icon.png)

## Docker Image

`linuxserver/hishtory-server:latest`

## Ports

- 8080:8080/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)
- `HISHTORY_POSTGRES_DB` - HISHTORY_POSTGRES_DB (default: `postgresql://${HISHTORY_DB_USER}:${HISHTORY_DB_PASS}@hishtory-db:5432/hishtory?sslmode=disable`)
- `HISHTORY_SQLITE_DB` - HISHTORY_SQLITE_DB (default: `/config/hishtory.db`)

## Volumes

- `/volume1/docker/hishtory-server/config` → `/config`

## Maintainer

 https://github.com/technorabilia/portainer-templates/

