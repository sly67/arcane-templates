# Pydio

Pydio (formerly AjaXplorer) is a mature open source software solution for file sharing and synchronization. With intuitive user interfaces (web / mobile / desktop), Pydio provides enterprise-grade features to gain back control and privacy of your data: user directory connectors, legacy filesystems drivers, comprehensive admin interface, and much more.

![Logo](https://raw.githubusercontent.com/SelfhostedPro/selfhosted_templates/master/Images/pydio-icon.png)

## Docker Image

`linuxserver/pydio:latest`

## Categories

- Cloud
- Other

## Ports

- 443/tcp

## Environment Variables

- `PUID` - PUID (default: `1000`)
- `PGID` - PGID (default: `100`)

## Volumes

- `/portainer/Files/AppData/Config/Pydio` → `/config`
- `/portainer/Files/AppData/Pydio` → `/data`

## Maintainer

 https://github.com/SelfhostedPro/selfhosted_templates/

