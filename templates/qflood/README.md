# qFlood

A docker image with qBittorrent and the Flood UI, also optional WireGuard VPN support. See the official documentation for WireGuard VPN support at https://hotio.dev/containers/qflood/

![Logo](https://raw.githubusercontent.com/jesec/flood/master/flood.svg)

## Docker Image

`hotio/qflood:latest`

## Categories

- Downloaders

## Ports

- 3000:3000/tcp
- 8080:8080/tcp

## Environment Variables

- `PUID` - PUID (default: `1000`)
- `PGID` - PGID (default: `1000`)
- `UMASK` - UMASK (default: `002`)
- `TZ` - TZ (default: `America/New_York`)
- `FLOOD_AUTH` - FLOOD_AUTH (default: `false`)

## Volumes

- `/portainer/Files/AppData/Config/qFlood` → `/config`
- `/portainer/Downloads` → `/app/qBittorrent/downloads`

## Maintainer

 https://github.com/novaspirit/pi-hosted/

