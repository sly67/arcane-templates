# Adguardhome-sync

[Adguardhome-sync](https://github.com/bakito/adguardhome-sync/) is a tool to synchronize AdGuardHome config to replica instances.

![Logo](https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/adguardhomesync-icon.png)

## Docker Image

`linuxserver/adguardhome-sync:latest`

## Ports

- 8080:8080/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)
- `CONFIGFILE` - CONFIGFILE (default: `/config/adguardhome-sync.yaml`)

## Volumes

- `/volume1/docker/adguardhome-sync/config` → `/config`

## Maintainer

 https://github.com/technorabilia/portainer-templates/

