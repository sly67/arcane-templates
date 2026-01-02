# Domoticz

Domoticz is a Home Automation System that lets you monitor and configure various devices like: Lights, Switches, various sensors/meters like Temperature, Rain, Wind, UV, Electra, Gas, Water and much more. Notifications/Alerts can be sent to any mobile device.

![Logo](https://github.com/domoticz/domoticz/raw/master/www/images/logo.png)

## Docker Image

`linuxserver/domoticz:latest`

## Categories

- Smarthome

## Ports

- 1443:1443/tcp
- 6144:6144/tcp
- 8080:8080/tcp

## Environment Variables

- `PUID` - PUID (default: `1000`)
- `PGID` - PGID (default: `100`)

## Volumes

- `/portainer/Files/AppData/Config/Domoticz` → `/config`

## Maintainer

 https://github.com/mycroftwilde/portainer_templates/

