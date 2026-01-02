# DaVinci Postgres Server

DaVinci Resolve Postgresql Server, Davinci requires a specific version of postgres db, this container will install the version needed

![Logo](https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/resolve.png)

## Docker Image

`postgres:13`

## Categories

- Tool

## Ports

- 5432:5432/tcp

## Environment Variables

- `PUID` - PUID (default: `1000`)
- `PGID` - PGID (default: `1000`)
- `POSTGRES_DB` - POSTGRES_DB (default: `database`)
- `POSTGRES_USER` - POSTGRES_USER (default: `postgres`)
- `POSTGRES_PASSWORD` - POSTGRES_PASSWORD (default: `DaVinci`)
- `TZ` - TZ (default: `America/New_York`)

## Volumes

- `/portainer/Files/AppData/Config/DavinciServer/` → `/var/lib/postgresql/data`

## Maintainer

 https://github.com/novaspirit/pi-hosted/

