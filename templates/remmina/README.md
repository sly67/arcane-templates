# Remmina

[Remmina](https://remmina.org/) is a remote desktop client written in GTK, aiming to be useful for system administrators and travellers, who need to work with lots of remote computers in front of either large or tiny screens. Remmina supports multiple network protocols, in an integrated and consistent user interface. Currently RDP, VNC, SPICE, SSH and EXEC are supported.

![Logo](https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/remmina-icon.png)

## Docker Image

`linuxserver/remmina:latest`

## Ports

- 3000:3000/tcp
- 3001:3001/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)

## Volumes

- `/volume1/docker/remmina/config` → `/config`

## Maintainer

 https://github.com/technorabilia/portainer-templates/

