# SickGear

SickGear provides management of TV shows and/or Anime, it detects new episodes, links downloader apps, and more.

![Logo](https://raw.githubusercontent.com/SelfhostedPro/selfhosted_templates/master/Images/sickgear-icon.png)

## Docker Image

`linuxserver/sickgear:latest`

## Categories

- Downloaders
- Video

## Ports

- 8081:8081/tcp

## Environment Variables

- `PUID` - PUID (default: `1000`)
- `PGID` - PGID (default: `100`)

## Volumes

- `/portainer/Files/AppData/Config/SickGear` → `/config`
- `/portainer/TV` → `/tv`
- `/portainer/Downloads` → `/downloads`

## Maintainer

 https://github.com/SelfhostedPro/selfhosted_templates/

