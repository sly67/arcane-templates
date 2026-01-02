# Gotify

A simple server for sending and receiving messages

![Logo](https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/gotify.png)

## Docker Image

`gotify/server-arm7:latest`

## Categories

- Other
- Tools

## Ports

- 9008:80/tcp

## Environment Variables

- `TZ` - TZ (default: `America/New_York`)
- `GOTIFY_DEFAULTUSER_NAME` - GOTIFY_DEFAULTUSER_NAME (default: `admin`)
- `GOTIFY_DEFAULTUSER_PASS` - GOTIFY_DEFAULTUSER_PASS (default: `admin123`)

## Volumes

- `/portainer/Files/AppData/Config/gotify` → `/app/data`

## Maintainer

 https://github.com/novaspirit/pi-hosted/

