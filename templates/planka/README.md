# Planka

[Planka](https://github.com/plankanban/planka/) is an elegant open source project tracking tool.

![Logo](https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/planka-logo.png)

## Docker Image

`linuxserver/planka:latest`

## Ports

- 1337:1337/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)
- `BASE_URL` - BASE_URL (default: `https://planka.example.com`)
- `DATABASE_URL` - DATABASE_URL (default: `postgresql://user:password@planka-db:5432/planka`)
- `DEFAULT_ADMIN_EMAIL` - DEFAULT_ADMIN_EMAIL (default: `demo@demo.demo`)
- `DEFAULT_ADMIN_USERNAME` - DEFAULT_ADMIN_USERNAME (default: `demo`)
- `DEFAULT_ADMIN_PASSWORD` - DEFAULT_ADMIN_PASSWORD (default: `demo`)
- `DEFAULT_ADMIN_NAME` - DEFAULT_ADMIN_NAME (default: `Demo User`)
- `SECRET_KEY` - SECRET_KEY (default: `notasecretkey`)
- `TRUST_PROXY` - TRUST_PROXY (default: `0`)

## Volumes

- `/volume1/docker/planka/config` → `/config`

## Maintainer

 https://github.com/technorabilia/portainer-templates/

