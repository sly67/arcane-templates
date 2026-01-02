# Hedgedoc

[HedgeDoc](https://hedgedoc.org/) gives you access to all your files wherever you are. HedgeDoc is a real-time, multi-platform collaborative markdown note editor. This means that you can write notes with other people on your desktop, tablet or even on the phone. You can sign-in via multiple auth providers like Facebook, Twitter, GitHub and many more on the homepage.

![Logo](https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/hedgedoc-banner.png)

## Docker Image

`linuxserver/hedgedoc:latest`

## Categories

- Documentation

## Ports

- 3000:3000/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)
- `DB_HOST` - DB_HOST (default: `<hostname or ip>`)
- `DB_PORT` - DB_PORT (default: `3306`)
- `DB_USER` - DB_USER (default: `hedgedoc`)
- `DB_PASS` - DB_PASS (default: `<secret password>`)
- `DB_NAME` - DB_NAME (default: `hedgedoc`)
- `CMD_DOMAIN` - CMD_DOMAIN (default: `localhost`)
- `CMD_URL_ADDPORT` - CMD_URL_ADDPORT (default: `false`)
- `CMD_PROTOCOL_USESSL` - CMD_PROTOCOL_USESSL (default: `false`)
- `CMD_PORT` - CMD_PORT (default: `3000`)
- `CMD_ALLOW_ORIGIN` - CMD_ALLOW_ORIGIN (default: `['localhost']`)
- `CMD_DB_DIALECT` - CMD_DB_DIALECT

## Volumes

- `/volume1/docker/hedgedoc/config` → `/config`

## Maintainer

 https://github.com/technorabilia/portainer-templates/

