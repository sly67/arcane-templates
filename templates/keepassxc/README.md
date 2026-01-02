# Keepassxc

[KeePassXC](https://keepassxc.org/) is a free and open-source password manager. It started as a community fork of KeePassX (itself a cross-platform port of KeePass).

![Logo](https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/keepassxc-logo.png)

## Docker Image

`linuxserver/keepassxc:latest`

## Ports

- 3000:3000/tcp
- 3001:3001/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)

## Volumes

- `/volume1/docker/keepassxc/config` → `/config`

## Maintainer

 https://github.com/technorabilia/portainer-templates/

