# Maloja

Simple self-hosted music scrobble database to create personal listening statistics. No recommendations, no social network, no nonsense.

![Logo](https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/maloja.png)

## Docker Image

`krateng/maloja:latest`

## Categories

- Music

## Ports

- 42010:42010/tcp

## Environment Variables

- `MALOJA_FORCE_PASSWORD` - MALOJA_FORCE_PASSWORD (default: `malojapassword`)
- `MALOJA_DATA_DIRECTORY` - MALOJA_DATA_DIRECTORY (default: `/data`)

## Volumes

- `/portainer/Files/AppData/Config/Maloja/Data` → `/data`

## Maintainer

 https://github.com/novaspirit/pi-hosted/

