# Pyload-ng

[pyLoad](https://pyload.net/) is a Free and Open Source download manager written in Python and designed to be extremely lightweight, easily extensible and fully manageable via web.

![Logo](https://github.com/linuxserver/docker-templates/raw/master/linuxserver.io/img/pyload-logo.png)

## Docker Image

`linuxserver/pyload-ng:latest`

## Ports

- 8000:8000/tcp
- 9666:9666/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)

## Volumes

- `/volume1/docker/pyload-ng/config` → `/config`
- `/volume1/docker/pyload-ng/downloads` → `/downloads`

## Maintainer

 https://github.com/technorabilia/portainer-templates/

