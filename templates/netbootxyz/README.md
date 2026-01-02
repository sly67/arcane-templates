# Netboot.xyz

Netbootxyz is a way to PXE boot various operating system installers or utilities from one place within the BIOS without the need of having to go retrieve the media to run the tool

![Logo](https://mediadepot.github.io/templates/img/netbootxyz.jpg)

## Docker Image

`linuxserver/netbootxyz:latest`

## Categories

- Downloaders
- Networkother
- Tools

## Ports

- 3000/tcp
- 69/udp

## Environment Variables

- `PGID` - PGID (default: `15000`)
- `PUID` - PUID (default: `15000`)

## Volumes

- `/opt/mediadepot/apps/netbootxyz` → `/config`
- `/media/storage/software/netbootxyz` → `/assets`
- `/etc/localtime` → `/etc/localtime`

## Maintainer

 https://github.com/mediadepot/templates/

