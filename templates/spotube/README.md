# Spotube

[Spotube](https://spotube.krtirtho.dev/) is an open source, cross-platform Spotify client compatible across multiple platforms utilizing Spotify's data API and YouTube, Piped.video or JioSaavn as an audio source, eliminating the need for Spotify Premium

![Logo](https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/spotube-logo.png)

## Docker Image

`linuxserver/spotube:latest`

## Ports

- 3000:3000/tcp
- 3001:3001/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)

## Volumes

- `/volume1/docker/spotube/config` → `/config`

## Maintainer

 https://github.com/technorabilia/portainer-templates/

