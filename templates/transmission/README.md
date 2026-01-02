# Transmission

Transmission is designed for easy, powerful use. Transmission has the features you want from a BitTorrent client: encryption, a web interface, peer exchange, magnet links, DHT, µTP, UPnP and NAT-PMP port forwarding, webseed support, watch directories, tracker editing, global and per-torrent speed limits, and more.

![Logo](https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/transmission-icon.png)

## Docker Image

`linuxserver/transmission:latest`

## Categories

- Torrentserver

## Ports

- 9091:9091/tcp
- 51413:51413/tcp

## Environment Variables

- `PUID` - PUID (default: `1000`)
- `PGID` - PGID (default: `100`)

## Volumes

- `/portainer/Files/AppData/Config/Transmission` → `/config`
- `/portainer/Files/Downloads` → `/downloads`
- `undefined` → `/watch`

## Maintainer

 https://github.com/mycroftwilde/portainer_templates/

