# Doplarr

[Doplarr](https://github.com/kiranshila/Doplarr) is an *arr request bot for Discord.'

![Logo](https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/doplarr-logo_title.png)

## Docker Image

`linuxserver/doplarr:latest`

## Ports

- 80:80/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)
- `DISCORD__TOKEN` - DISCORD__TOKEN
- `OVERSEERR__API` - OVERSEERR__API
- `OVERSEERR__URL` - OVERSEERR__URL (default: `http://localhost:5055`)
- `RADARR__API` - RADARR__API
- `RADARR__URL` - RADARR__URL (default: `http://localhost:7878`)
- `SONARR__API` - SONARR__API
- `SONARR__URL` - SONARR__URL (default: `http://localhost:8989`)
- `DISCORD__MAX_RESULTS` - DISCORD__MAX_RESULTS (default: `25`)
- `DISCORD__REQUESTED_MSG_STYLE` - DISCORD__REQUESTED_MSG_STYLE (default: `:plain`)
- `SONARR__QUALITY_PROFILE` - SONARR__QUALITY_PROFILE
- `RADARR__QUALITY_PROFILE` - RADARR__QUALITY_PROFILE
- `SONARR__ROOTFOLDER` - SONARR__ROOTFOLDER
- `RADARR__ROOTFOLDER` - RADARR__ROOTFOLDER
- `SONARR__LANGUAGE_PROFILE` - SONARR__LANGUAGE_PROFILE
- `OVERSEERR__DEFAULT_ID` - OVERSEERR__DEFAULT_ID
- `PARTIAL_SEASONS` - PARTIAL_SEASONS (default: `true`)
- `LOG_LEVEL` - LOG_LEVEL (default: `:info`)
- `JAVA_OPTS` - JAVA_OPTS

## Volumes

- `/volume1/docker/doplarr/config` → `/config`

## Maintainer

 https://github.com/technorabilia/portainer-templates/

