# SickChill

Automatic Video Library Manager for TV Shows. It watches for new episodes of your favorite shows, and when they are posted it does its magic.

![Logo](https://raw.githubusercontent.com/SelfhostedPro/selfhosted_templates/master/Images/sickchill-icon.png)

## Docker Image

`linuxserver/sickchill:latest`

## Categories

- Downloaders
- Video

## Ports

- 8081:8081/tcp

## Environment Variables

- `PUID` - PUID (default: `1000`)
- `PGID` - PGID (default: `100`)

## Volumes

- `/portainer/Files/AppData/Config/SickChill` → `/config`
- `/portainer/Downloads` → `/downloads`
- `/portainer/TV` → `/tv`

## Maintainer

 https://github.com/SelfhostedPro/selfhosted_templates/

