# Paperless-ng

[Paperless-ng](https://github.com/jonaswinkler/paperless-ng) is an application by Daniel Quinn and contributors that indexes your scanned documents and allows you to easily search for documents and store metadata alongside your documents.'

![Logo](https://raw.githubusercontent.com/jonaswinkler/paperless-ng/master/resources/logo/web/png/Color%20logo%20with%20background.png)

## Docker Image

`linuxserver/paperless-ng:latest`

## Categories

- Familyappserver

## Ports

- 8000:8000/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)
- `REDIS_URL` - REDIS_URL

## Volumes

- `/volume1/docker/paperless-ng/config` → `/config`
- `/volume1/docker/paperless-ng/data` → `/data`

## Maintainer

 https://github.com/mycroftwilde/portainer_templates/

