# Xbackbone

[Xbackbone](https://github.com/SergiX44/XBackBone) is a simple, self-hosted, lightweight PHP file manager that support the instant sharing tool ShareX and *NIX systems. It supports uploading and displaying images, GIF, video, code, formatted text, and file downloading and uploading. Also have a web UI with multi user management, past uploads history and search support.

![Logo](https://raw.githubusercontent.com/SergiX44/XBackBone/master/docs/img/xbackbone.png)

## Docker Image

`linuxserver/xbackbone:latest`

## Ports

- 80:80/tcp
- 443:443/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)

## Volumes

- `/volume1/docker/xbackbone/config` → `/config`

## Maintainer

 https://github.com/technorabilia/portainer-templates/

