# Ngircd

[Ngircd](https://ngircd.barton.de/) is a free, portable and lightweight Internet Relay Chat server for small or private networks, developed under the GNU General Public License (GPL). It is easy to configure, can cope with dynamic IP addresses, and supports IPv6, SSL-protected connections as well as PAM for authentication. It is written from scratch and not based on the original IRCd.

![Logo](https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/ngircd-logo.png)

## Docker Image

`linuxserver/ngircd:latest`

## Ports

- 6667:6667/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)

## Volumes

- `/volume1/docker/ngircd/config` → `/config`

## Maintainer

 https://github.com/technorabilia/portainer-templates/

