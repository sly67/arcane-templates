# Pixapop

[Pixapop](https://github.com/bierdok/pixapop) is an open-source single page application to view your photos in the easiest way possible.

![Logo](https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/pixapop.png)

## Docker Image

`linuxserver/pixapop:latest`

## Categories

- Photos

## Ports

- 80:80/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)
- `APP_USERNAME` - APP_USERNAME (default: `admin`)
- `APP_PASSWORD` - APP_PASSWORD (default: `admin`)

## Volumes

- `/volume1/docker/pixapop/config` → `/config`
- `/volume1/docker/pixapop/photos` → `/photos`

## Maintainer

 https://github.com/mycroftwilde/portainer_templates/

