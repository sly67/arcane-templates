# Pixel-server

Wireless control of PixelStrips or NeoPixels using a web graphical interface running on a Raspberry Pi.

![Logo](https://lirp.cdn-website.com/c73f56a6/dms3rep/multi/opt/ir.appnice.controlpad_512x512-640w.png)

## Docker Image

`macley/pixel-server:latest`

## Categories

- Other

## Ports

- 85:80/tcp

## Volumes

- `/portainer/Files/AppData/Config/pixel-server/auth.cfg` → `/opt/pixel-server/auth.cfg`
- `/portainer/Files/AppData/Config/pixel-server/pixelserver.cfg` → `/opt/pixel-server/pixelserver.cfg`
- `/portainer/Files/AppData/Config/pixel-server/users.cfg` → `/opt/pixel-server/users.cfg`
- `undefined` → `/etc/crontabs/`

## Maintainer

 https://github.com/novaspirit/pi-hosted/

