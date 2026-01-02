# Piper

[Piper](https://github.com/rhasspy/piper/) is a fast, local neural text to speech system that sounds great and is optimized for the Raspberry Pi 4. This container provides a Wyoming protocol server for Piper.

![Logo](https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/piper-logo.png)

## Docker Image

`linuxserver/piper:latest`

## Ports

- 10200:10200/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)
- `PIPER_VOICE` - PIPER_VOICE (default: `en_US-lessac-medium`)
- `PIPER_LENGTH` - PIPER_LENGTH (default: `1.0`)
- `PIPER_NOISE` - PIPER_NOISE (default: `0.667`)
- `PIPER_NOISEW` - PIPER_NOISEW (default: `0.333`)
- `PIPER_SPEAKER` - PIPER_SPEAKER (default: `0`)
- `PIPER_PROCS` - PIPER_PROCS (default: `1`)

## Volumes

- `/volume1/docker/piper/config` → `/config`

## Maintainer

 https://github.com/technorabilia/portainer-templates/

