# Faster-whisper

[Faster-whisper](https://github.com/SYSTRAN/faster-whisper) is a reimplementation of OpenAI's Whisper model using CTranslate2, which is a fast inference engine for Transformer models. This container provides a Wyoming protocol server for faster-whisper.

![Logo](https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/faster-whisper-logo.png)

## Docker Image

`linuxserver/faster-whisper:latest`

## Ports

- 10300:10300/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)
- `WHISPER_MODEL` - WHISPER_MODEL (default: `tiny-int8`)
- `WHISPER_BEAM` - WHISPER_BEAM (default: `1`)
- `WHISPER_LANG` - WHISPER_LANG (default: `en`)

## Volumes

- `/volume1/docker/faster-whisper/config` → `/config`

## Maintainer

 https://github.com/technorabilia/portainer-templates/

