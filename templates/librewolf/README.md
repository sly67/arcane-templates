# Librewolf

[LibreWolf](https://librewolf.net/) is a custom and independent version of Firefox, with the primary goals of privacy, security and user freedom. LibreWolf also aims to remove all the telemetry, data collection and annoyances, as well as disabling anti-freedom features like DRM.

![Logo](https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/librewolf-logo.png)

## Docker Image

`linuxserver/librewolf:latest`

## Ports

- 3000:3000/tcp
- 3001:3001/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)
- `LIBREWOLF_CLI` - LIBREWOLF_CLI (default: `https://www.linuxserver.io/`)

## Volumes

- `/volume1/docker/librewolf/config` → `/config`

## Maintainer

 https://github.com/technorabilia/portainer-templates/

