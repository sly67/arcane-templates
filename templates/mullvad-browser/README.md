# Mullvad-browser

The [Mullvad Browser](https://mullvad.net/en/browser) is a privacy-focused web browser developed in a collaboration between Mullvad VPN and the Tor Project. It’s designed to minimize tracking and fingerprinting. You could say it’s a Tor Browser to use without the Tor Network. Instead, you can use it with a trustworthy VPN.

![Logo](https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/mullvad-browser-logo.png)

## Docker Image

`linuxserver/mullvad-browser:latest`

## Ports

- 3000:3000/tcp
- 3001:3001/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)
- `LOCAL_NET` - LOCAL_NET (default: `192.168.0.0/16`)

## Volumes

- `/volume1/docker/mullvad-browser/config` → `/config`

## Maintainer

 https://github.com/technorabilia/portainer-templates/

