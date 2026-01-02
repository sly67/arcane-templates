# Nginx

Nginx is a web server with a strong focus on high concurrency, performance and low memory usage. It can also act as a reverse proxy server for HTTP, HTTPS, SMTP, POP3, and IMAP protocols, as well as a load balancer and an HTTP cache.

![Logo](https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/nginx-icon.png)

## Docker Image

`linuxserver/nginx:latest`

## Categories

- Proxyserver

## Ports

- 80/tcp
- 443/tcp

## Environment Variables

- `PUID` - PUID (default: `1000`)
- `PGID` - PGID (default: `100`)

## Volumes

- `/portainer/Files/AppData/Config/Nginx` → `/config`

## Maintainer

 https://github.com/mycroftwilde/portainer_templates/

