# Habridge

Habridge emulates Philips Hue API to other home automation gateways such as an Amazon Echo/Dot Gen 1 (gen 2 has issues discovering ha-bridge) or other systems that support Philips Hue.  [https://github.com/bwssytems/ha-bridge/wiki](https://github.com/bwssytems/ha-bridge/wiki)

![Logo](https://raw.githubusercontent.com/bwssytems/ha-bridge/master/src/main/resources/public/img/favicon.ico)

## Docker Image

`linuxserver/habridge:latest`

## Categories

- Smarthome

## Ports

- 8080:8080/tcp
- 50000:50000/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `SEC_KEY` - SEC_KEY (default: `<Your Key To Encrypt Security Data>`)
- `TZ` - TZ (default: `Europe/Amsterdam`)

## Volumes

- `/volume1/docker/habridge/config` → `/config`

## Maintainer

 https://github.com/mycroftwilde/portainer_templates/

