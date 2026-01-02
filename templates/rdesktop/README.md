# Rdesktop

[Rdesktop](http://xrdp.org/) - Ubuntu based containers containing full desktop environments in officially supported flavors accessible via RDP.

![Logo](https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/rdesktop.png)

## Docker Image

`linuxserver/rdesktop:latest`

## Categories

- Managementutilityserver

## Ports

- 3389:3389/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)

## Volumes

- `/var/run/docker.sock` → `/var/run/docker.sock`
- `/volume1/docker/rdesktop/config` → `/config`

## Maintainer

 https://github.com/mycroftwilde/portainer_templates/

