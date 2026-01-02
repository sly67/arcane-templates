# Eclipse Mosquitto MQTT

Eclipse Mosquitto is an open source message broker that implements the MQTT protocol versions 5.0, 3.1.1 and 3.1. Mosquitto is lightweight and is suitable for use on all devices from low power single board computers to full servers.
Have a look on https://mosquitto.org/man/mosquitto_passwd-1.html

![Logo](https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/eclipse-mosquitto.png)

## Docker Image

`eclipse-mosquitto:latest`

## Categories

- Other
- Tools

## Ports

- 1883:1883/tcp
- 9001:9001/tcp

## Volumes

- `/portainer/Files/AppData/Config/eclipse-mosquitto/config` → `/mosquitto/config`
- `/portainer/Files/AppData/Config/eclipse-mosquitto/data` → `/mosquitto/data`
- `/portainer/Files/AppData/Config/eclipse-mosquitto/log` → `/mosquitto/log`

## Maintainer

 https://github.com/novaspirit/pi-hosted/

