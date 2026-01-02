# Jenkins-builder

# This container needs special attention. Please check https://hub.docker.com/r/linuxserver/jenkins-builder for details.

## Docker Image

`linuxserver/jenkins-builder:latest`

## Ports

- 80:80/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)

## Volumes

- `/volume1/docker/jenkins-builder/config` → `/config`

## Maintainer

 https://github.com/technorabilia/portainer-templates/

