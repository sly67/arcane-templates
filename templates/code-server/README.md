# Code Server

Code-server is VS Code running on a remote server, accessible through the browser.

![Logo](https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/code-server.png)

## Docker Image

`linuxserver/code-server:latest`

## Categories

- Codeserver

## Ports

- 8443:8443/tcp

## Environment Variables

- `PUID` - PUID (default: `1000`)
- `GUID` - PUID (default: `1000`)
- `TZ` - TZ
- `PASSWORD` - PASSWORD
- `SUDO_PASSWORD` - SUDO_PASSWORD
- `PROXY_DOMAIN` - PROXY_DOMAIN (default: `example.my.domain`)

## Volumes

- `/portainer/Files/AppData/Config/Code-Server` → `/config`

## Maintainer

 https://github.com/mycroftwilde/portainer_templates/

