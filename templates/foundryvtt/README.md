# FoundryVTT Server

This docker image provides the FoundryVTT system for hosting your own virtual table top games.

![Logo](https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/foundrylogo.png)

## Docker Image

`felddy/foundryvtt:release`

## Categories

- Other
- Games

## Ports

- 30000:30000/tcp

## Environment Variables

- `FOUNDRY_USERNAME` - Foundry Account Name (default: `John`)
- `FOUNDRY_PASSWORD` - Foundry Password (default: `password`)
- `FOUNDRY_ADMIN_KEY` - Instance Admin Password (default: `changeme`)
- `CONTAINER_PRESERVE_CONFIG` - CONTAINER_PRESERVE_CONFIG (default: `true`)

## Volumes

- `/portainer/Files/AppData/Config/foundryvtt` → `/data`

## Maintainer

 https://github.com/novaspirit/pi-hosted/

