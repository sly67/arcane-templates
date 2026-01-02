# Budge

[Budge](https://github.com/linuxserver/budge) is an open source 'budgeting with envelopes' personal finance app.

## Docker Image

`linuxserver/budge:latest`

## Ports

- 80:80/tcp
- 443:443/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)

## Volumes

- `/volume1/docker/budge/config` → `/config`

## Maintainer

 https://github.com/technorabilia/portainer-templates/

