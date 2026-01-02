# Traefik

Cloud-Native Networking Stack That Just Works.

![Logo](https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/traefik.png)

## Docker Image

`traefik:latest`

## Categories

- Proxy
- Security
- Tools

## Ports

- 80:80/tcp
- 443:443/tcp
- 8080:8080/tcp

## Volumes

- `/portainer/Files/AppData/Config/traefik/traefik.yml` → `/traefik.yml`
- `/portainer/Files/AppData/Config/traefik/config.yml` → `/config.yml`
- `/portainer/Files/AppData/Config/traefik/acme.json` → `/acme.json`
- `/var/run/docker.sock` → `/var/run/docker.sock`

## Maintainer

 https://github.com/novaspirit/pi-hosted/

