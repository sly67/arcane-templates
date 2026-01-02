# Nginx Proxy Manager v2 with Sqllite

Nginx Proxy Manager v2 with Sqlite enables you to easily forward to your websites running at home or otherwise, including free SSL, without having to know too much about Nginx or Letsencrypt.  Please see the install document at https://github.com/pi-hosted/pi-hosted/tree/master/docs installing the template

![Logo](https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/proxy_mgr.png)

## Docker Image

`jc21/nginx-proxy-manager:latest`

## Categories

- Proxy
- Tools

## Ports

- 80:80/tcp
- 81:81/tcp
- 443:443/tcp

## Environment Variables

- `PUID` - PUID (default: `1000`)
- `PGID` - PGID (default: `1000`)
- `TZ` - TZ (default: `America/New_York`)

## Volumes

- `/portainer/Files/AppData/Config/nginx-proxy-manager/data` → `/data`
- `/portainer/Files/AppData/Config/nginx-proxy-manager/letsencrypt` → `/etc/letsencrypt`

## Maintainer

 https://github.com/novaspirit/pi-hosted/

