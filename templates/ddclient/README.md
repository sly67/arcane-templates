# Ddclient

[Ddclient](https://github.com/ddclient/ddclient) is a Perl client used to update dynamic DNS entries for accounts on Dynamic DNS Network Service Provider. It was originally written by Paul Burry and is now mostly by wimpunk. It has the capability to update more than just dyndns and it can fetch your WAN-ipaddress in a few different ways.

![Logo](https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/ddclient-logo.png)

## Docker Image

`linuxserver/ddclient:latest`

## Categories

- Networking

## Ports

- 80:80/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)

## Volumes

- `/volume1/docker/ddclient/config` → `/config`

## Maintainer

 https://github.com/technorabilia/portainer-templates/

