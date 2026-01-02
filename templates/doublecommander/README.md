# Doublecommander

[Double Commander](https://doublecmd.sourceforge.io/) is a free cross platform open source file manager with two panels side by side. It is inspired by Total Commander and features some new ideas.

![Logo](https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/doublecommander-icon.png)

## Docker Image

`linuxserver/doublecommander:latest`

## Categories

- Filemanagement

## Ports

- 3000:3000/tcp
- 3001:3001/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)

## Volumes

- `/volume1/docker/doublecommander/config` → `/config`
- `/volume1/docker/doublecommander/data` → `/data`

## Maintainer

 https://github.com/technorabilia/portainer-templates/

