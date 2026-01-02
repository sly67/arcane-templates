# Diskover

[Diskover](https://github.com/diskoverdata/diskover-community) is an open source file system indexer that uses Elasticsearch to index and manage data across heterogeneous storage systems.

![Logo](https://raw.githubusercontent.com/diskoverdata/diskover-community/master/diskover-web/public/images/diskover.png)

## Docker Image

`linuxserver/diskover:latest`

## Categories

- Productivity

## Ports

- 80:80/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)
- `ES_HOST` - ES_HOST (default: `elasticsearch`)
- `ES_PORT` - ES_PORT (default: `9200`)

## Volumes

- `/volume1/docker/diskover/config` → `/config`
- `/volume1/docker/diskover/data` → `/data`

## Maintainer

 https://github.com/technorabilia/portainer-templates/

