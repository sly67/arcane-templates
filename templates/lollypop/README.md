# Lollypop

[Lollypop](https://wiki.gnome.org/Apps/Lollypop) is a lightweight modern music player designed to work excellently on the GNOME desktop environment.

![Logo](https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/lollypop-icon.png)

## Docker Image

`linuxserver/lollypop:latest`

## Ports

- 3000:3000/tcp
- 3001:3001/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)

## Volumes

- `/volume1/docker/lollypop/config` → `/config`

## Maintainer

 https://github.com/technorabilia/portainer-templates/

