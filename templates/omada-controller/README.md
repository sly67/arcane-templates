# Omada EAP Controller

TP-Link Omada is a software-defined network solution. The EAP Controller is used to manage multiple EAPs. Raspberry Pi 1 and Zero are not supported.

![Logo](https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/omada.png)

## Docker Image

`mbentley/omada-controller:latest`

## Categories

- Management
- Tools

## Ports

- 8088:8088/tcp
- 8043:8043/tcp
- 27001:27001/udp
- 27002:27002/tcp
- 29810:29810/udp
- 29811:29811/tcp
- 29812:29812/tcp
- 29813:29813/tcp

## Environment Variables

- `PUID` - PUID (default: `1000`)
- `PGID` - PGID (default: `1000`)

## Volumes

- `/portainer/Files/AppData/Config/Omada` → `/config`

## Maintainer

 https://github.com/novaspirit/pi-hosted/

