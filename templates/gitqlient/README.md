# Gitqlient

[GitQlient](https://github.com/francescmm/GitQlient) is a multi-platform Git client originally forked from QGit. Nowadays it goes beyond of just a fork and adds a lot of new functionality.

![Logo](https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/gitqlient-icon.png)

## Docker Image

`linuxserver/gitqlient:latest`

## Ports

- 3000:3000/tcp
- 3001:3001/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)

## Volumes

- `/volume1/docker/gitqlient/config` → `/config`

## Maintainer

 https://github.com/technorabilia/portainer-templates/

