# Nginx Proxy Manager

Nginx Proxy Manager enables you to easily forward to your websites running at home or otherwise, including free SSL, without having to know too much about Nginx or Letsencrypt.

![Logo](https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/proxy_mgr.png)

## Docker Image

`jc21/nginx-proxy-manager`

## Categories

- Proxyserver

## Ports

- 80:80/tcp
- 81:81/tcp
- 443:443/tcp

## Environment Variables

- `DB_SQLITE_FILE` - DB_SQLITE_FILE (default: `/data/database.sqlite`)

## Volumes

- `/portainer/Files/AppData/Config/Nginx-Proxy/data` → `/data`
- `/portainer/Files/AppData/Config/Nginx-Proxy/letsencrypt` → `/etc/letsencrypt`

## Maintainer

 https://github.com/mycroftwilde/portainer_templates/

