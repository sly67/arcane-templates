# Lychee

Lychee is a free photo-management tool, which runs on your server or web-space. Installing is a matter of seconds. Upload, manage and share photos like from a native application. Lychee comes with everything you need and all your photos are stored securely.

![Logo](https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/lychee-icon.png)

## Docker Image

`linuxserver/lychee:latest`

## Categories

- Photos

## Ports

- 80/tcp

## Environment Variables

- `PUID` - PUID (default: `1000`)
- `PGID` - PGID (default: `100`)

## Volumes

- `/portainer/Files/AppData/Config/Lychee` → `/config`
- `/portainer/Pictures` → `/pictures`

## Maintainer

 https://github.com/mycroftwilde/portainer_templates/

