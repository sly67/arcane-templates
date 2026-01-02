# Steamos

[SteamOS](https://www.steamdeck.com/) is an Arch based Linux distribution made by Valve Software. This container is a vanilla Arch install with Steam repositories added for software support. **This container will only work with modern AMD/Intel GPUs on a real Linux Host**

![Logo](https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/steamos-logo.png)

## Docker Image

`linuxserver/steamos:latest`

## Ports

- 3000:3000/tcp
- 3001:3001/tcp
- 27031-27036:27031-27036/udp
- 27031-27036:27031-27036
- 47984-47990:47984-47990
- 48010-48010:48010-48010
- 47998-48000:47998-48000/udp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)
- `DRINODE` - DRINODE (default: `/dev/dri/renderD128`)
- `HOST_IP` - HOST_IP (default: `192.168.100.10`)
- `STARTUP` - STARTUP (default: `KDE`)
- `RESOLUTION` - RESOLUTION (default: `1920x1080`)

## Volumes

- `/volume1/docker/steamos/config` → `/config`
- `/dev/input` → `/dev/input`
- `/run/udev/data` → `/run/udev/data`

## Maintainer

 https://github.com/technorabilia/portainer-templates/

