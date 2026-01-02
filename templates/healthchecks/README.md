# Healthchecks

Healthchecks is a watchdog for your cron jobs. It's a web server that listens for pings from your cron jobs, plus a web interface.

![Logo](https://mediadepot.github.io/templates/img/healthchecks-logo.png)

## Docker Image

`linuxserver/healthchecks`

## Categories

- Tools
- Networkweb
- Networkother
- Statusstable

## Ports

- 8000/tcp

## Environment Variables

- `PGID` - PGID (default: `15000`)
- `PUID` - PUID (default: `15000`)
- `TZ` - TZ (default: `America/Los_Angeles`)
- `SITE_ROOT` - SITE_ROOT (default: `healthchecks.depot.lan`)
- `SITE_NAME` - SITE_NAME (default: `healthchecks`)
- `DEFAULT_FROM_EMAIL` - DEFAULT_FROM_EMAIL (default: `healthchecks@depot.lan`)
- `EMAIL_HOST` - EMAIL_HOST
- `EMAIL_PORT` - EMAIL_PORT
- `EMAIL_HOST_USER` - EMAIL_HOST_USER
- `EMAIL_HOST_PASSWORD` - EMAIL_HOST_PASSWORD
- `EMAIL_USE_TLS` - EMAIL_USE_TLS

## Volumes

- `/opt/mediadepot/apps/healthchecks` → `/config`

## Maintainer

 https://github.com/mediadepot/templates/

