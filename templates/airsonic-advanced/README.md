# Airsonic-advanced

[Airsonic-advanced](https://github.com/airsonic-advanced/airsonic-advanced) is a free, web-based media streamer, providing ubiquitious access to your music. Use it to share your music with friends, or to listen to your own music while at work. You can stream to multiple players simultaneously, for instance to one player in your kitchen and another in your living room.

![Logo](https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/airsonic-banner.png)

## Docker Image

`linuxserver/airsonic-advanced:latest`

## Categories

- Musicserver

## Ports

- 4040:4040/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)
- `CONTEXT_PATH` - CONTEXT_PATH (default: `<URL_BASE>`)
- `JAVA_OPTS` - JAVA_OPTS (default: `<options>`)

## Volumes

- `/volume1/docker/airsonic-advanced/config` → `/config`
- `/volume1/docker/airsonic-advanced/music` → `/music`
- `/volume1/docker/airsonic-advanced/playlists` → `/playlists`
- `/volume1/docker/airsonic-advanced/podcasts` → `/podcasts`
- `/volume1/docker/airsonic-advanced/media` → `/media`

## Maintainer

 https://github.com/mycroftwilde/portainer_templates/

