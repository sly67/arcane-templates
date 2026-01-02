# Papermerge

[Papermerge](https://www.papermerge.com/) is an open source document management system (DMS) primarily designed for archiving and retrieving your digital documents. Instead of having piles of paper documents all over your desk, office or drawers - you can quickly scan them and configure your scanner to directly upload to Papermerge DMS.'

![Logo](https://raw.githubusercontent.com/ciur/papermerge/master/artwork/logo.png)

## Docker Image

`linuxserver/papermerge:latest`

## Categories

- Familyappserver

## Ports

- 8000:8000/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)
- `REDIS_URL` - REDIS_URL

## Volumes

- `/volume1/docker/papermerge/config` → `/config`
- `/volume1/docker/papermerge/data` → `/data`

## Maintainer

 https://github.com/mycroftwilde/portainer_templates/

