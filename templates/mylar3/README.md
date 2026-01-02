# Mylar3

[Mylar3](https://github.com/mylar3/mylar3) is an automated Comic Book downloader (cbr/cbz) for use with NZB and torrents written in python. It supports SABnzbd, NZBGET, and many torrent clients in addition to DDL.

![Logo](https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/mylar-icon.png)

## Docker Image

`linuxserver/mylar3:latest`

## Ports

- 8090:8090/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)

## Volumes

- `/volume1/docker/mylar3/config` → `/config`
- `/volume1/docker/mylar3/comics` → `/comics`
- `/volume1/docker/mylar3/downloads` → `/downloads`

## Maintainer

 https://github.com/technorabilia/portainer-templates/

