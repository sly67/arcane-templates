# Homarr-Secured

Homarr is a simple and lightweight homepage for your server, that helps you easily access all of your services in one place.

![Logo](https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/homarr.png)

## Docker Image

`ghcr.io/ajnart/homarr:latest`

## Categories

- Tools
- Web
- Other

## Ports

- 7575:7575/tcp

## Environment Variables

- `PUID` - PUID (default: `1000`)
- `PGID` - PGID (default: `1000`)

## Volumes

- `/portainer/Files/AppData/Config/Homarr/configs` → `/app/data/configs`
- `/portainer/Files/AppData/Config/Homarr/icons` → `/app/public/icons`

## Maintainer

 https://github.com/novaspirit/pi-hosted/

