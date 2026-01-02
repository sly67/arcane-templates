# Kanzi

[Kanzi](https://lexigr.am/), formerly titled Kodi-Alexa, this custom skill is the ultimate voice remote control for navigating Kodi. It can do anything you can think of (100+ intents). This container also contains lexigram-cli to setup Kanzi with an Amazon Developer Account and automatically deploy it to Amazon.

![Logo](https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/kanzi.png)

## Docker Image

`linuxserver/kanzi:latest`

## Categories

- Mediaserver

## Ports

- 8000:8000/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)
- `INVOCATION_NAME` - INVOCATION_NAME (default: `kanzi`)
- `URL_ENDPOINT` - URL_ENDPOINT (default: `https://server.com/kanzi/`)

## Volumes

- `/volume1/docker/kanzi/config` → `/config`

## Maintainer

 https://github.com/mycroftwilde/portainer_templates/

