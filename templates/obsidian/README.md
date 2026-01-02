# Obsidian

[Obsidian](https://obsidian.md) is a note-taking app that lets you create, link, and organize your notes on your device, with hundreds of plugins and themes to customize your workflow. You can also publish your notes online, access them offline, and sync them securely with end-to-end encryption.

![Logo](https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/obsidian-logo.png)

## Docker Image

`linuxserver/obsidian:latest`

## Ports

- 3000:3000/tcp
- 3001:3001/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)

## Volumes

- `/volume1/docker/obsidian/config` → `/config`

## Maintainer

 https://github.com/technorabilia/portainer-templates/

