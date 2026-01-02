# MeTube

Web GUI for youtube-dl (using the yt-dlp fork) with playlist support. Allows you to download videos from YouTube and dozens of other sites (https://github.com/yt-dlp/yt-dlp/blob/master/supportedsites.md)

![Logo](https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/metube.png)

## Docker Image

`alexta69/metube:latest`

## Categories

- Downloader

## Ports

- 8081:8081/tcp

## Environment Variables

- `PUID` - PUID (default: `1000`)
- `PGID` - PGID (default: `1000`)

## Volumes

- `/portainer/Downloads` → `/downloads`

## Maintainer

 https://github.com/novaspirit/pi-hosted/

