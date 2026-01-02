# Calibre

Calibre is a powerful and easy to use e-book manager. Users say it’s outstanding and a must-have. It’ll allow you to do nearly everything and it takes things a step beyond normal e-book software. It’s also completely free and open source and great for both casual users and computer experts.

![Logo](https://github.com/kovidgoyal/calibre/raw/master/resources/images/lt.png)

## Docker Image

`linuxserver/calibre:latest`

## Categories

- Libraryserver

## Ports

- 8080:8080/tcp
- 8081:8081/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)
- `PASSWORD` - PASSWORD
- `CLI_ARGS` - CLI_ARGS

## Volumes

- `/volume1/docker/calibre/config` → `/config`

## Maintainer

 https://github.com/mycroftwilde/portainer_templates/

