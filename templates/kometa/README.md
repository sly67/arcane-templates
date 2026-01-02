# Kometa

[Kometa](https://github.com/Kometa-Team/Kometa) is a powerful tool designed to give you complete control over your media libraries. With Kometa, you can take your customization to the next level, with granular control over metadata, collections, overlays, and much more.

![Logo](https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/kometa-banner.png)

## Docker Image

`linuxserver/kometa:latest`

## Ports

- 80:80/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)
- `KOMETA_CONFIG` - KOMETA_CONFIG (default: `/config/config.yml`)
- `KOMETA_TIME` - KOMETA_TIME (default: `03:00`)
- `KOMETA_RUN` - KOMETA_RUN (default: `False`)
- `KOMETA_TEST` - KOMETA_TEST (default: `False`)
- `KOMETA_NO_MISSING` - KOMETA_NO_MISSING (default: `False`)

## Volumes

- `/volume1/docker/kometa/config` → `/config`

## Maintainer

 https://github.com/technorabilia/portainer-templates/

