# Babybuddy

[Babybuddy](https://github.com/babybuddy/babybuddy) is a buddy for babies! Helps caregivers track sleep, feedings, diaper changes, tummy time and more to learn about and predict baby's needs without (as much) guess work.

![Logo](https://github.com/linuxserver/docker-templates/raw/master/linuxserver.io/img/babybuddy-logo.png)

## Docker Image

`linuxserver/babybuddy:latest`

## Ports

- 8000:8000/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)
- `CSRF_TRUSTED_ORIGINS` - CSRF_TRUSTED_ORIGINS (default: `http://127.0.0.1:8000,https://babybuddy.domain.com`)

## Volumes

- `/volume1/docker/babybuddy/config` → `/config`

## Maintainer

 https://github.com/technorabilia/portainer-templates/

