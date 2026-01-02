# Flame

Flame is self-hosted startpage for your server. Its design is inspired (heavily) by SUI. Flame is very easy to setup and use. With built-in editors, it allows you to setup your very own application hub in no time - no file editing necessary.

![Logo](https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/flame.png)

## Docker Image

`pawelmalak/flame:multiarch`

## Categories

- Other
- Tools

## Ports

- 5005:5005/tcp

## Environment Variables

- `PASSWORD` - Flame Password

## Volumes

- `/portainer/Files/AppData/Config/Flame/data` → `/app/data`
- `/var/run/docker.sock` → `/var/run/docker.sock`

## Maintainer

 https://github.com/novaspirit/pi-hosted/

