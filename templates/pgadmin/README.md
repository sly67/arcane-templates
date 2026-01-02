# pgAdmin

PGAdmin is a web-based GUI tool used to interact with the Postgres database sessions, both locally and remote servers as well. You can use PGAdmin to perform any sort of database administration required for a Postgres database.

![Logo](https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/pgadmin.png)

## Docker Image

`dpage/pgadmin4:latest`

## Categories

- Other
- Tools

## Ports

- 5050:80/tcp

## Environment Variables

- `PUID` - PUID (default: `1000`)
- `PGID` - PGID (default: `1000`)
- `PGADMIN_DEFAULT_EMAIL` - PGADMIN_DEFAULT_EMAIL
- `PGADMIN_DEFAULT_PASSWORD` - PGADMIN_DEFAULT_PASSWORD
- `TZ` - TZ (default: `America/New_York`)

## Volumes

- `/portainer/Files/AppData/Config/pgadmin` → `/var/lib/pgadmin`

## Maintainer

 https://github.com/novaspirit/pi-hosted/

