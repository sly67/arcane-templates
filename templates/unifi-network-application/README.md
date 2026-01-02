# Unifi-network-application

The [Unifi-network-application](https://ui.com/) software is a powerful, enterprise wireless software engine ideal for high-density client deployments requiring low latency and high uptime performance.

![Logo](https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/unifi-banner.png)

## Docker Image

`linuxserver/unifi-network-application:latest`

## Ports

- 8443:8443/tcp
- 3478:3478/udp
- 10001:10001/udp
- 8080:8080/tcp
- 1900:1900/udp
- 8843:8843/tcp
- 8880:8880/tcp
- 6789:6789/tcp
- 5514:5514/udp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)
- `MONGO_USER` - MONGO_USER (default: `unifi`)
- `MONGO_PASS` - MONGO_PASS
- `MONGO_HOST` - MONGO_HOST (default: `unifi-db`)
- `MONGO_PORT` - MONGO_PORT (default: `27017`)
- `MONGO_DBNAME` - MONGO_DBNAME (default: `unifi`)
- `MONGO_AUTHSOURCE` - MONGO_AUTHSOURCE (default: `admin`)
- `MEM_LIMIT` - MEM_LIMIT (default: `1024`)
- `MEM_STARTUP` - MEM_STARTUP (default: `1024`)
- `MONGO_TLS` - MONGO_TLS

## Volumes

- `/volume1/docker/unifi-network-application/config` → `/config`

## Maintainer

 https://github.com/technorabilia/portainer-templates/

