# SmokePing

SmokePing is a latency logging and graphing and alerting system. It consists of a daemon process which organizes the latency measurements and a CGI which presents the graphs.

![Logo](https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/smokeping-icon.png)

## Docker Image

`linuxserver/smokeping:latest`

## Categories

- Taskserver

## Ports

- 80/tcp

## Environment Variables

- `PUID` - PUID (default: `1000`)
- `PGID` - PGID (default: `100`)

## Volumes

- `/portainer/Files/AppData/Config/Smokeping` → `/config`
- `/portainer/Files/AppData/Smokeping` → `/data`

## Maintainer

 https://github.com/mycroftwilde/portainer_templates/

