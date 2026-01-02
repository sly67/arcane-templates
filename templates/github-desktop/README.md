# Github-desktop

[Github Desktop](https://desktop.github.com/) is an open source Electron-based GitHub app. It is written in TypeScript and uses React.

![Logo](https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/github-desktop-icon.png)

## Docker Image

`linuxserver/github-desktop:latest`

## Ports

- 3000:3000/tcp
- 3001:3001/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)

## Volumes

- `/volume1/docker/github-desktop/config` → `/config`

## Maintainer

 https://github.com/technorabilia/portainer-templates/

