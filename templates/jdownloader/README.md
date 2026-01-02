# JDownloader

JDownloader docker image

![Logo](https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/jdownloader.png)

## Docker Image

`jaymoulin/jdownloader:latest`

## Categories

- Downloaders
- Tools

## Ports

- 3129:3129/tcp

## Environment Variables

- `MYJD_DEVICE_NAME` - MYJD_DEVICE_NAME
- `MYJD_USER` - MYJD_USER
- `MYJD_PASSWORD` - MYJD_PASSWORD

## Volumes

- `/portainer/Files/AppData/Config/JDownloader` → `/opt/JDownloader/app/cfg`
- `/portainer/Downloads` → `/opt/JDownloader/Downloads`

## Maintainer

 https://github.com/novaspirit/pi-hosted/

