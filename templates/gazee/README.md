# Gazee

A WebApp Comic Reader for your favorite digital comics. Reach and read your comic library from any web connected device with a modern web browser.

![Logo](https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/gazee-logo.png)

## Docker Image

`linuxserver/gazee:latest`

## Categories

- Libraryserver

## Environment Variables

- `PUID` - PUID (default: `1000`)
- `PGID` - PGID (default: `100`)

## Volumes

- `/portainer/Files/AppData/Config/Gazee` → `/config`
- `/portainer/Comics` → `/comics`
- `/portainer/Files/AppData/Gazee` → `/mylar`

## Maintainer

 https://github.com/mycroftwilde/portainer_templates/

