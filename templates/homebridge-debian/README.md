# Homebridge - Debian

Debian Homebridge allows you to integrate with smart home devices that do not natively support HomeKit. There are over 2,000 Homebridge plugins supporting thousands of different smart accessories.

![Logo](https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/homebridge.png)

## Docker Image

`homebridge/homebridge:ubuntu-arm32v7`

## Categories

- Homeautomation

## Environment Variables

- `PGID` - PGID (default: `1000`)
- `PUID` - PUID (default: `1000`)
- `HOMEBRIDGE_CONFIG_UI` - HOMEBRIDGE_CONFIG_UI (default: `1`)
- `HOMEBRIDGE_CONFIG_UI_PORT` - HOMEBRIDGE_CONFIG_UI_PORT (default: `8581`)
- `TZ` - TZ (default: `America/New_York`)

## Volumes

- `/portainer/Files/AppData/Config/debian-homebridge` → `/homebridge`

## Maintainer

 https://github.com/novaspirit/pi-hosted/

