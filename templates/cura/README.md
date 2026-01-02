# Cura

[UltiMaker Cura](https://ultimaker.com/software/ultimaker-cura/) is free, easy-to-use 3D printing software trusted by millions of users. Fine-tune your 3D model with 400+ settings for the best slicing and printing results.

![Logo](https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/cura-logo.png)

## Docker Image

`linuxserver/cura:latest`

## Ports

- 3000:3000/tcp
- 3001:3001/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)

## Volumes

- `/volume1/docker/cura/config` → `/config`

## Maintainer

 https://github.com/technorabilia/portainer-templates/

