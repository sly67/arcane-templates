# Flexget

[Flexget](http://flexget.com/) is a multipurpose automation tool for all of your media.

![Logo](https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/flexget-banner.png)

## Docker Image

`linuxserver/flexget:latest`

## Ports

- 5050:5050/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)
- `FG_LOG_LEVEL` - FG_LOG_LEVEL (default: `info`)
- `FG_LOG_FILE` - FG_LOG_FILE (default: `/config/flexget.log`)
- `FG_CONFIG_FILE` - FG_CONFIG_FILE (default: `/config/.flexget/config.yml`)
- `FG_WEBUI_PASSWORD` - FG_WEBUI_PASSWORD (default: `info`)

## Volumes

- `/volume1/docker/flexget/config` → `/config`
- `/volume1/docker/flexget/data` → `/data`

## Maintainer

 https://github.com/technorabilia/portainer-templates/

