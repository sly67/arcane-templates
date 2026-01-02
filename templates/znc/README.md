# ZNC

ZNC is an IRC network bouncer or BNC. It can detach the client from the actual IRC server, and also from selected channels. Multiple clients from different locations can connect to a single ZNC account simultaneously and therefore appear under the same nickname on IRC.

![Logo](https://raw.githubusercontent.com/SelfhostedPro/selfhosted_templates/master/Images/znc-icon.png)

## Docker Image

`linuxserver/znc:latest`

## Categories

- Messenger

## Ports

- 6501:6501/tcp

## Environment Variables

- `PUID` - PUID (default: `1000`)
- `PGID` - PGID (default: `100`)

## Volumes

- `/portainer/Files/AppData/Config/ZNC` → `/config`

## Maintainer

 https://github.com/SelfhostedPro/selfhosted_templates/

