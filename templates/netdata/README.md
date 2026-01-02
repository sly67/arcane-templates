# Netdata

Troubleshoot slowdowns and anomalies in your infrastructure with thousands of per-second metrics, meaningful visualizations, and insightful health alarms with zero configuration.

![Logo](https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/netdata.png)

## Docker Image

`netdata/netdata:latest`

## Categories

- Other
- Tools

## Ports

- 19999:19999/tcp

## Environment Variables

- `DOCKER_USR` - DOCKER_USR (default: `1000`)
- `DOCKER_GRP` - DOCKER_GRP (default: `1000`)

## Volumes

- `/portainer/Files/AppData/Config/netdata/netdataconfig` → `/etc/netdata`
- `/portainer/Files/AppData/Config/netdata/netdatalib` → `/var/lib/netdata`
- `/etc/passwd` → `/host/etc/passwd:ro`
- `/etc/group` → `/host/etc/group:ro`
- `/proc` → `/host/proc:ro`
- `/sys` → `/host/sys:ro`
- `/etc/os-release` → `/host/etc/os-release:ro`

## Maintainer

 https://github.com/novaspirit/pi-hosted/

