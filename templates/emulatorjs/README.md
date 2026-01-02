# Emulatorjs

[Emulatorjs](https://github.com/linuxserver/emulatorjs) - In browser web based emulation portable to nearly any device for many retro consoles. A mix of emulators is used between Libretro and EmulatorJS.

![Logo](https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/emulatorjs-logo.png)

## Docker Image

`linuxserver/emulatorjs:latest`

## Categories

- Gamingserver

## Ports

- 3000:3000/tcp
- 80:80/tcp
- 4001:4001/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)
- `SUBFOLDER` - SUBFOLDER (default: `/`)

## Volumes

- `/volume1/docker/emulatorjs/config` → `/config`
- `/volume1/docker/emulatorjs/data` → `/data`

## Maintainer

 https://github.com/mycroftwilde/portainer_templates/

