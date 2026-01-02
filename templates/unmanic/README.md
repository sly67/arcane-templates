# Unmanic

Unmanic is a simple tool for optimising your file library. You can use it to convert your files into a single, uniform format, manage file movements based on timestamps, or execute custom commands against a file based on its file size.

![Logo](https://docs.unmanic.app/img/icon.png)

## Docker Image

`josh5/unmanic:latest`

## Categories

- Tools

## Ports

- 8888:8888/tcp

## Environment Variables

- `PUID` - PUID (default: `1000`)
- `PGID` - PGID (default: `1000`)

## Volumes

- `/portainer/Files/AppData/Config/unmanic/config` → `/config`
- `/portainer/Files/AppData/Config/unmanic/library` → `/library`
- `/portainer/Files/AppData/Config/unmanic/tmp` → `/tmp/unmanic`

## Maintainer

 https://github.com/novaspirit/pi-hosted/

