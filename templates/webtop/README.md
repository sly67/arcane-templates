# Webtop

[Webtop](https://github.com/linuxserver/docker-webtop) - Alpine, Ubuntu, Fedora, and Arch based containers containing full desktop environments in officially supported flavors accessible via any modern web browser.

![Logo](https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/webtop-logo.png)

## Docker Image

`linuxserver/webtop:latest`

## Categories

- Managementutilityserver

## Ports

- 3000:3000/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)
- `SUBFOLDER` - SUBFOLDER (default: `/`)

## Volumes

- `/volume1/docker/webtop/config` → `/config`
- `/var/run/docker.sock` → `/var/run/docker.sock`

## Maintainer

 https://github.com/mycroftwilde/portainer_templates/

