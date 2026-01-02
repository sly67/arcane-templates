# Code-server {shmolf}

Code-server (https://coder.com) is VS Code running on a remote server, accessible through the browser. - Code on your Chromebook, tablet, and laptop with a consistent dev environment. - If you have a Windows or Mac workstation, more easily develop for Linux. - Take advantage of large cloud servers to speed up tests, compilations, downloads, and more. - Preserve battery life when you're on the go. - All intensive computation runs on your server. - You're no longer running excess instances of Chrome.

![Logo](https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/code-server-banner.png)

## Docker Image

`linuxserver/code-server:latest`

## Categories

- Development

## Ports

- 8443:8443/tcp

## Environment Variables

- `PUID` - PUID (default: `1000`)
- `PGID` - PGID (default: `1000`)
- `TZ` - TZ (default: `Europe/Amsterdam`)
- `PASSWORD` - PASSWORD (default: `password`)
- `HASHED_PASSWORD` - HASHED_PASSWORD
- `SUDO_PASSWORD` - SUDO_PASSWORD (default: `password`)
- `SUDO_PASSWORD_HASH` - SUDO_PASSWORD_HASH
- `PROXY_DOMAIN` - PROXY_DOMAIN (default: `code-server.my.domain`)
- `DEFAULT_WORKSPACE` - DEFAULT_WORKSPACE (default: `/config/workspace`)

## Volumes

- `/portainer/Files/AppData/Config/code-server` → `/config`

## Maintainer

 https://github.com/shmolf/portainer-templates/

