# Davos

davos is an FTP automation tool that periodically scans given host locations for new files. It can be configured for various purposes, including listening for specific files to appear in the host location, ready for it to download and then move, if required. It also supports completion notifications as well as downstream API calls, to further the workflow.

![Logo](https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/davos.png)

## Docker Image

`linuxserver/davos:latest`

## Categories

- Ftpserver

## Ports

- 8080/tcp

## Environment Variables

- `PUID` - PUID (default: `1000`)
- `PGID` - PGID (default: `100`)

## Volumes

- `/portainer/Files/AppData/Config/Davos` → `/config`
- `/portainer/Downloads` → `/downloads`

## Maintainer

 https://github.com/mycroftwilde/portainer_templates/

