# UniFi Controller

The Unifi-controller Controller software is a powerful, enterprise wireless software engine ideal for high-density client deployments requiring low latency and high uptime performance.

![Logo](https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/unifi-icon.png)

## Docker Image

`linuxserver/unifi-controller:latest`

## Categories

- Smarthome

## Ports

- 3478:3478/udp
- 10001:10001/udp
- 8080:8080/tcp
- 8081:8081/tcp
- 8443:8443/tcp
- 8843:8843/tcp
- 8880:8880/tcp
- 6789:6789/tcp

## Environment Variables

- `PUID` - PUID (default: `1000`)
- `PGID` - PGID (default: `100`)

## Volumes

- `/portainer/Files/AppData/Config/Unifi` → `/config`

## Maintainer

 https://github.com/mycroftwilde/portainer_templates/

