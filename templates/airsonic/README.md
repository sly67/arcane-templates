# Airsonic

Airsonic is a free, web-based media streamer, providing ubiqutious access to your music. Use it to share your music with friends, or to listen to your own music while at work. You can stream to multiple players simultaneously, for instance to one player in your kitchen and another in your living room.

![Logo](https://raw.githubusercontent.com/SelfhostedPro/selfhosted_templates/master/Images/airsonic-logo.png)

## Docker Image

`linuxserver/airsonic:latest`

## Categories

- Music

## Ports

- 4040:4040/tcp

## Environment Variables

- `PUID` - PUID (default: `1000`)
- `PGID` - PGID (default: `100`)
- `CONTEXT_PATH` - CONTEXT_PATH
- `JAVA_OPTS` - JAVA_OPTS

## Volumes

- `/portainer/Music` → `/music`
- `/portainer/Files/AppData/Airsonic/Playlists` → `/playlists`
- `/portainer/Podcasts` → `/podcasts`
- `/portainer/Files/AppData/Airsonic/Media` → `/media`
- `/portainer/Files/AppData/Config/Airsonic/` → `/config`

## Maintainer

 https://github.com/SelfhostedPro/selfhosted_templates/

