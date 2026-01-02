# Pwndrop

[Pwndrop](https://github.com/kgretzky/pwndrop) is a self-deployable file hosting service for sending out red teaming payloads or securely sharing your private files over HTTP and WebDAV.

![Logo](https://raw.githubusercontent.com/kgretzky/pwndrop/master/media/pwndrop-logo-512.png)

## Docker Image

`linuxserver/pwndrop:latest`

## Categories

- Taskserver

## Ports

- 8080:8080/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)
- `SECRET_PATH` - SECRET_PATH (default: `/pwndrop`)

## Volumes

- `/volume1/docker/pwndrop/config` → `/config`

## Maintainer

 https://github.com/mycroftwilde/portainer_templates/

