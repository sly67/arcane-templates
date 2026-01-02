# PrivateBin

PrivateBin is a minimalist, open source online pastebin where the server has zero knowledge of pasted data!
  

![Logo](https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/privatebin.png)

## Docker Image

`privatebin/nginx-fpm-alpine:latest`

## Categories

- Cloud
- Productivity
- Tools
- Web

## Ports

- 8080:8080/tcp

## Environment Variables

- `PUID` - PUID (default: `1000`)
- `PGID` - PGID (default: `1000`)

## Volumes

- `/portainer/Files/AppData/PrivateBin` → `/srv/data`
- `/portainer/Files/AppData/Config/PrivateBin` → `/srv/cfg`

## Maintainer

 https://github.com/novaspirit/pi-hosted/

