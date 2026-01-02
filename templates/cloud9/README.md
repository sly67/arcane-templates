# Cloud9

[Cloud9](https://github.com/c9/core) Cloud9 is a complete web based IDE with terminal access. This container is for running their core SDK locally and developing plugins.

![Logo](https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/cloud9.png)

## Docker Image

`linuxserver/cloud9:latest`

## Categories

- Codeserver

## Ports

- 8000:8000/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)
- `GITURL` - GITURL (default: `https://github.com/linuxserver/docker-cloud9.git`)
- `USERNAME` - USERNAME
- `PASSWORD` - PASSWORD

## Volumes

- `/volume1/docker/cloud9/config` → `/config`
- `/volume1/docker/cloud9/code` → `/code`
- `/var/run/docker.sock` → `/var/run/docker.sock`

## Maintainer

 https://github.com/mycroftwilde/portainer_templates/

