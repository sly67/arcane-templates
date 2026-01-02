# Apprise-api

[Apprise-api](https://github.com/caronc/apprise-api) Takes advantage of [Apprise](https://github.com/caronc/apprise) through your network with a user-friendly API. * Send notifications to more then 65+ services. * An incredibly lightweight gateway to Apprise. * A production ready micro-service at your disposal. Apprise API was designed to easily fit into existing (and new) eco-systems that are looking for a simple notification solution.

![Logo](https://raw.githubusercontent.com/caronc/apprise-api/master/apprise_api/static/logo.png)

## Docker Image

`linuxserver/apprise-api:latest`

## Categories

- Taskserver

## Ports

- 8000:8000/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)

## Volumes

- `/volume1/docker/apprise-api/config` → `/config`

## Maintainer

 https://github.com/mycroftwilde/portainer_templates/

