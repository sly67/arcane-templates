# Bambustudio

[Bambu Studio](https://bambulab.com/en/download/studio) Bambu Studio is an open-source, cutting-edge, feature-rich slicing software. It contains project-based workflows, systematically optimized slicing algorithms, and an easy-to-use graphical interface, bringing users an incredibly smooth printing experience.

![Logo](https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/bambustudio-logo.png)

## Docker Image

`linuxserver/bambustudio:latest`

## Ports

- 3000:3000/tcp
- 3001:3001/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)
- `DARK_MODE` - DARK_MODE (default: `true`)

## Volumes

- `/volume1/docker/bambustudio/config` → `/config`

## Maintainer

 https://github.com/technorabilia/portainer-templates/

