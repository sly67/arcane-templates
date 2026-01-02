# iobroker

IoBroker is a open source IoT platform written in JavaScript that easily connects smarthome components from different manufactures. With the help of plugins (called: adapters) ioBroker is able to communicate with a big variety of IoT hardware and services using different protocols and APIs.

![Logo](https://github.com/buanet/ioBroker.docker/raw/main/docs/img/iobroker_logo.png)

## Docker Image

`buanet/iobroker:latest`

## Categories

- Homeautomation

## Ports

- 8081:8081/tcp

## Environment Variables

- `PUID` - PUID (default: `1000`)
- `PGID` - PGID (default: `1000`)

## Volumes

- `/portainer/Files/AppData/Config/iobrokerdata` → `/opt/iobroker`

## Maintainer

 https://github.com/novaspirit/pi-hosted/

