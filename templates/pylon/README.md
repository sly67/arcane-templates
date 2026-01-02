# Pylon

[Pylon](https://github.com/pylonide/pylon) is a web based integrated development environment built with Node.js as a backend and with a supercharged JavaScript/HTML5 frontend, licensed under GPL version 3. This project originates from Cloud9 v2 project.

![Logo](https://raw.githubusercontent.com/pylonide/pylon/master/doc/screenshot02.png)

## Docker Image

`linuxserver/pylon:latest`

## Ports

- 3131:3131/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)
- `GITURL` - GITURL (default: `https://github.com/linuxserver/docker-pylon.git`)
- `PYUSER` - PYUSER (default: `myuser`)
- `PYPASS` - PYPASS (default: `mypass`)

## Volumes

- `/volume1/docker/pylon/config` → `/config`
- `/volume1/docker/pylon/code` → `/code`

## Maintainer

 https://github.com/technorabilia/portainer-templates/

