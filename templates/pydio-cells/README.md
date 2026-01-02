# Pydio-cells

[Pydio-cells](https://pydio.com/) is the nextgen file sharing platform for organizations. It is a full rewrite of the Pydio project using the Go language following a micro-service architecture.

![Logo](https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/pydio-cells-icon.png)

## Docker Image

`linuxserver/pydio-cells:latest`

## Ports

- 8080:8080/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)
- `EXTERNALURL` - EXTERNALURL (default: `yourdomain.url`)
- `SERVER_IP` - SERVER_IP (default: `0.0.0.0`)

## Volumes

- `/volume1/docker/pydio-cells/config` → `/config`

## Maintainer

 https://github.com/technorabilia/portainer-templates/

