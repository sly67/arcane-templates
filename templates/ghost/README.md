# Ghost

Ghost is a free and open source blogging platform written in JavaScript and distributed under the MIT License, designed to simplify the process of online publishing for individual bloggers as well as online publications.

![Logo](https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/ghost.png)

## Docker Image

`ghost:latest`

## Categories

- Other
- Tools

## Ports

- 2368:2368/tcp

## Environment Variables

- `NODE_ENV` - NODE_ENV (default: `development`)
- `url` - url (default: `http://localhost/`)

## Volumes

- `/portainer/Files/AppData/Config/Ghost` → `/var/lib/ghost/content`

## Maintainer

 https://github.com/novaspirit/pi-hosted/

