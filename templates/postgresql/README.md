# PostgreSQL

PostgreSQL, also known as Postgres, is a free and open-source relational database management system emphasizing extensibility and SQL compliance.

![Logo](https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/postgresql.png)

## Docker Image

`postgres:latest`

## Categories

- Other
- Tools

## Ports

- 5432:5432/tcp

## Environment Variables

- `PUID` - PUID (default: `1000`)
- `PGID` - PGID (default: `1000`)
- `POSTGRES_PASSWORD` - POSTGRES_PASSWORD (default: `rootpassword`)
- `TZ` - TZ (default: `America/New_York`)

## Volumes

- `/portainer/Files/AppData/Config/PostgreSQL` → `/var/lib/postgresql/data`

## Maintainer

 https://github.com/novaspirit/pi-hosted/

