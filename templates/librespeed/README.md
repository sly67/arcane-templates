# Librespeed

[Librespeed](https://github.com/librespeed/speedtest) is a very lightweight Speedtest implemented in Javascript, using XMLHttpRequest and Web Workers. No Flash, No Java, No Websocket, No Bullshit.

![Logo](https://raw.githubusercontent.com/librespeed/speedtest/master/.logo/logo3.png)

## Docker Image

`linuxserver/librespeed:latest`

## Ports

- 80/tcp

## Environment Variables

- `PUID` - PUID (default: `15000`)
- `PGID` - PGID (default: `15000`)
- `TZ` - TZ (default: `America/Los_Angeles`)
- `PASSWORD` - PASSWORD (default: `PASSWORD`)
- `CUSTOM_RESULTS` - CUSTOM_RESULTS (default: `false`)
- `DB_TYPE` - DB_TYPE (default: `sqlite`)
- `DB_NAME` - DB_NAME (default: `DB_NAME`)
- `DB_HOSTNAME` - DB_HOSTNAME (default: `DB_HOSTNAME`)
- `DB_USERNAME` - DB_USERNAME (default: `DB_USERNAME`)
- `DB_PASSWORD` - DB_PASSWORD (default: `DB_PASSWORD`)
- `DB_PORT` - DB_PORT (default: `DB_PORT`)

## Volumes

- `/opt/mediadepot/apps/librespeed/config` → `/config`

## Maintainer

 https://github.com/mediadepot/templates/

