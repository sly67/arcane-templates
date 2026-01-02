# Inkscape

[Inkscape](https://inkscape.org/) is professional quality vector graphics software which runs on Linux, Mac OS X and Windows desktop computers.

![Logo](https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/inkscape-logo.png)

## Docker Image

`linuxserver/inkscape:latest`

## Ports

- 3000:3000/tcp
- 3001:3001/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)

## Volumes

- `/volume1/docker/inkscape/config` → `/config`

## Maintainer

 https://github.com/technorabilia/portainer-templates/

