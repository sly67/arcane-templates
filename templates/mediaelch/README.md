# Mediaelch

[MediaElch](https://github.com/Komet/MediaElch) is a MediaManager for Kodi. Information about Movies, TV Shows, Concerts and Music are stored as nfo files. Fanarts are downloaded automatically from fanart.tv. Using the nfo generator, MediaElch can be used with other MediaCenters as well.

![Logo](https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/mediaelch-logo.png)

## Docker Image

`linuxserver/mediaelch:latest`

## Ports

- 3000:3000/tcp
- 3001:3001/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)

## Volumes

- `/volume1/docker/mediaelch/config` → `/config`

## Maintainer

 https://github.com/technorabilia/portainer-templates/

