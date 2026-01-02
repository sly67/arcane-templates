# Calibre Web

[Calibre-web](https://github.com/janeczku/calibre-web) is a web app providing a clean interface for browsing, reading and downloading eBooks using an existing Calibre database. It is also possible to integrate google drive and edit metadata and your calibre library through the app itself. This software is a fork of library and licensed under the GPL v3 License.

![Logo](https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/calibre-web-icon.png)

## Docker Image

`linuxserver/calibre-web:latest`

## Categories

- Books

## Ports

- 8083/tcp

## Environment Variables

- `PUID` - PUID (default: `15000`)
- `PGID` - PGID (default: `15000`)
- `TZ` - TZ (default: `America/Los_Angeles`)
- `DOCKER_MODS` - DOCKER_MODS (default: `linuxserver/mods:universal-calibre`)
- `OAUTHLIB_RELAX_TOKEN_SCOPE` - OAUTHLIB_RELAX_TOKEN_SCOPE (default: `1`)

## Volumes

- `/opt/mediadepot/apps/calibre-web/config` → `/config`
- `/media/storage/ebooks` → `/books`

## Maintainer

 https://github.com/mediadepot/templates/

