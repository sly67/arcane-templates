# SyncThing

Syncthing is a continuous file synchronization program. It synchronizes files between two or more computers in real time, safely protected from prying eyes.

![Logo](https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/syncthing-icon.png)

## Docker Image

`linuxserver/syncthing:latest`

## Categories

- Backupandsyncserver

## Ports

- 8384:8384/tcp
- 21027:21027/udp
- 22000:22000/tcp

## Environment Variables

- `PUID` - PUID (default: `1000`)
- `PGID` - PGID (default: `100`)

## Volumes

- `/portainer/Files/AppData/Config/Syncthing` → `/config`
- `undefined` → `/sync`

## Maintainer

 https://github.com/mycroftwilde/portainer_templates/

