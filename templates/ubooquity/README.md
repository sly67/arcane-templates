# Ubooquity

Ubooquity is a free, lightweight and easy-to-use home server for your comics and ebooks. Use it to access your files from anywhere, with a tablet, an e-reader, a phone or a computer.

![Logo](https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/ubooquity-icon.png)

## Docker Image

`linuxserver/ubooquity:latest`

## Categories

- Libraryserver

## Ports

- 2202:2202/tcp
- 2203:2203/tcp

## Environment Variables

- `MAXMEM` - MAXMEM
- `PUID` - PUID (default: `1000`)
- `PGID` - PGID (default: `100`)

## Volumes

- `undefined` → `/books`
- `undefined` → `/comics`
- `undefined` → `/config`

## Maintainer

 https://github.com/mycroftwilde/portainer_templates/

