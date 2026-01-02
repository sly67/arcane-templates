# Openvscode-server

[Openvscode-server](https://github.com/gitpod-io/openvscode-server) provides a version of VS Code that runs a server on a remote machine and allows access through a modern web browser.

![Logo](https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/openvscode-server-logo.png)

## Docker Image

`linuxserver/openvscode-server:latest`

## Ports

- 3000:3000/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)
- `CONNECTION_TOKEN` - CONNECTION_TOKEN
- `CONNECTION_SECRET` - CONNECTION_SECRET
- `SUDO_PASSWORD` - SUDO_PASSWORD (default: `password`)
- `SUDO_PASSWORD_HASH` - SUDO_PASSWORD_HASH

## Volumes

- `/volume1/docker/openvscode-server/config` → `/config`

## Maintainer

 https://github.com/technorabilia/portainer-templates/

