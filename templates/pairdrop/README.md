# Pairdrop

[PairDrop](https://github.com/schlagmichdoch/PairDrop) is a sublime alternative to AirDrop that works on all platforms. Send images, documents or text via peer to peer connection to devices in the same local network/Wi-Fi or to paired devices.

![Logo](https://raw.githubusercontent.com/schlagmichdoch/PairDrop/master/public/images/android-chrome-512x512.png)

## Docker Image

`linuxserver/pairdrop:latest`

## Ports

- 3000:3000/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)
- `RATE_LIMIT` - RATE_LIMIT (default: `false`)
- `WS_FALLBACK` - WS_FALLBACK (default: `false`)
- `RTC_CONFIG` - RTC_CONFIG
- `DEBUG_MODE` - DEBUG_MODE (default: `false`)

## Volumes

- `/volume1/docker/pairdrop/config` → `/config`

## Maintainer

 https://github.com/technorabilia/portainer-templates/

