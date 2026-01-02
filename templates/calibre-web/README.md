# Calibre Web

Calibre Web is a web app providing a clean interface for browsing, reading and downloading eBooks using an existing Calibre database.

![Logo](https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/calibre-web-icon.png)

## Docker Image

`linuxserver/calibre-web:latest`

## Categories

- Cloud
- Books

## Ports

- 8083:8083/tcp

## Environment Variables

- `PUID` - PUID (default: `1000`)
- `PGID` - PGID (default: `100`)

## Volumes

- `/portainer/Books` → `/books`
- `/portainer/Files/AppData/Config/Calibre-web` → `/config`

