# Build-agent

# This container needs special attention. Please check https://hub.docker.com/r/linuxserver/build-agent for details.

## Docker Image

`linuxserver/build-agent:latest`

## Ports

- 80:80/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)

## Volumes

- `/volume1/docker/build-agent/config` → `/config`

## Maintainer

 https://github.com/technorabilia/portainer-templates/

