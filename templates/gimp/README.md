# Gimp

[GIMP](https://www.gimp.org/) is a free and open-source raster graphics editor used for image manipulation (retouching) and image editing, free-form drawing, transcoding between different image file formats, and more specialized tasks. It is extensible by means of plugins, and scriptable.

![Logo](https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/gimp-logo.png)

## Docker Image

`linuxserver/gimp:latest`

## Ports

- 3000:3000/tcp
- 3001:3001/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)

## Volumes

- `/volume1/docker/gimp/config` → `/config`

## Maintainer

 https://github.com/technorabilia/portainer-templates/

