# Quassel IRC

Quassel IRC is a modern, cross-platform, distributed IRC client, meaning that one (or multiple) client(s) can attach to and detach from a central core -- much like the popular combination of screen and a text-based IRC client such as WeeChat, but graphical. Blowfish support and optional web-ui included.

![Logo](https://raw.githubusercontent.com/SelfhostedPro/selfhosted_templates/master/Images/quassel-core-icon.png)

## Docker Image

`linuxserver/quassel-core:latest`

## Categories

- Messenger

## Ports

- 4242:4242/tcp

## Environment Variables

- `PUID` - PUID (default: `1000`)
- `PGID` - PGID (default: `100`)

## Volumes

- `/portainer/Files/AppData/Config/Quassel-core` → `/config`

## Maintainer

 https://github.com/SelfhostedPro/selfhosted_templates/

