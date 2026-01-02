# Vscodium

[VSCodium](https://vscodium.com/) is a community-driven, freely-licensed binary distribution of Microsoft’s editor VS Code.

![Logo](https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/vscodium-icon.png)

## Docker Image

`linuxserver/vscodium:latest`

## Ports

- 3000:3000/tcp
- 3001:3001/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)

## Volumes

- `/volume1/docker/vscodium/config` → `/config`

## Maintainer

 https://github.com/technorabilia/portainer-templates/

