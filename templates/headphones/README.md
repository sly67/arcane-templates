# Headphones

Headphones is an automated music downloader for NZB and Torrent, written in Python. It supports SABnzbd, NZBget, Transmission, µTorrent and Blackhole.

![Logo](https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/headphones-icon.png)

## Docker Image

`linuxserver/headphones:latest`

## Categories

- Usenetserver

## Ports

- 8181:8181/tcp

## Environment Variables

- `PUID` - PUID (default: `1000`)
- `PGID` - PGID (default: `100`)

## Volumes

- `/portainer/Files/AppData/Config/Headphones` → `/config`
- `/portainer/Downloads` → `/Downloads`
- `/portainer/Music` → `/music`

## Maintainer

 https://github.com/mycroftwilde/portainer_templates/

