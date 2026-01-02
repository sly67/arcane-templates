# Kali-linux

[Kali-linux](https://github.com/linuxserver/docker-kali-linux) - is an Advanced Penetration Testing Linux distribution used for Penetration Testing, Ethical Hacking and network security assessments. KALI LINUX ™ is a trademark of OffSec.

![Logo](https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/kali-logo.png)

## Docker Image

`linuxserver/kali-linux:latest`

## Ports

- 3000:3000/tcp
- 3001:3001/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)
- `SUBFOLDER` - SUBFOLDER (default: `/`)
- `TITLE` - TITLE (default: `Kali Linux`)

## Volumes

- `/volume1/docker/kali-linux/config` → `/config`
- `/var/run/docker.sock` → `/var/run/docker.sock`

## Maintainer

 https://github.com/technorabilia/portainer-templates/

