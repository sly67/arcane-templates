# Wireguard

[WireGuard®](https://www.wireguard.com/) is an extremely simple yet fast and modern VPN that utilizes state-of-the-art cryptography. It aims to be faster, simpler, leaner, and more useful than IPsec, while avoiding the massive headache. It intends to be considerably more performant than OpenVPN. WireGuard is designed as a general purpose VPN for running on embedded interfaces and super computers alike, fit for many different circumstances. Initially released for the Linux kernel, it is now cross-platform (Windows, macOS, BSD, iOS, Android) and widely deployable. It is currently under heavy development, but already it might be regarded as the most secure, easiest to use, and simplest VPN solution in the industry.

![Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Logo_of_WireGuard.png/320px-Logo_of_WireGuard.png)

## Docker Image

`linuxserver/wireguard:latest`

## Categories

- Vpnserver

## Ports

- 51820:51820/udp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)
- `SERVERURL` - SERVERURL (default: `wireguard.domain.com`)
- `SERVERPORT` - SERVERPORT (default: `51820`)
- `PEERS` - PEERS (default: `1`)
- `PEERDNS` - PEERDNS (default: `auto`)
- `INTERNAL_SUBNET` - INTERNAL_SUBNET (default: `10.13.13.0`)
- `ALLOWEDIPS` - ALLOWEDIPS (default: `0.0.0.0/0`)

## Volumes

- `/volume1/docker/wireguard/config` → `/config`
- `/lib/modules` → `/lib/modules`

## Maintainer

 https://github.com/mycroftwilde/portainer_templates/

