# Minecraft Server

This docker image provides a Minecraft Server that will automatically download the latest stable version at startup. You can also run/upgrade to any specific version or the latest snapshot. See the Versions section below for more information.

![Logo](https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/minecraft.png)

## Docker Image

`itzg/minecraft-server:latest`

## Categories

- Other
- Tools
- Games

## Ports

- 25565:25565/tcp

## Environment Variables

- `EULA` - EULA (default: `TRUE`)

## Volumes

- `/portainer/Files/AppData/Config/Minecraft-data` → `/data`

## Maintainer

 https://github.com/novaspirit/pi-hosted/

