# Cardigann

Cardigann, a server for adding extra indexers to Sonarr, SickRage and CouchPotato via Torznab and TorrentPotato proxies. Behind the scenes Cardigann logs in and runs searches and then transforms the results into a compatible format.

![Logo](https://mediadepot.github.io/templates/img/cardigann.png)

## Docker Image

`linuxserver/cardigann:latest`

## Categories

- Downloaders

## Ports

- 5060/tcp

## Environment Variables

- `PGID` - PGID (default: `15000`)
- `PUID` - PUID (default: `15000`)

## Volumes

- `/opt/mediadepot/apps/cardigann` → `/config`

## Maintainer

 https://github.com/mediadepot/templates/

