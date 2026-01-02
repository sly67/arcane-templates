# Let's Encrypt / SWAG

This container sets up an Nginx webserver and reverse proxy with php support and a built-in letsencrypt client that automates free SSL server certificate generation and renewal processes. It also contains fail2ban for intrusion prevention.

![Logo](https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/letsencrypt.png)

## Docker Image

`linuxserver/swag:latest`

## Categories

- Proxyserver

## Ports

- 80/tcp
- 443/tcp

## Environment Variables

- `EMAIL` - EMAIL
- `URL` - URL
- `SUBDOMAINS` - SUBDOMAINS
- `ONLY_SUBDOMAINS` - ONLY_SUBDOMAINS
- `DHLEVEL` - DHLEVEL
- `PUID` - PUID (default: `1000`)
- `PGID` - PGID (default: `100`)
- `VALIDATION` - VALIDATION
- `DNSPLUGIN` - DNSPLUGIN

## Volumes

- `/portainer/Files/AppData/Config/LetsEncrypt` → `/config`

## Maintainer

 https://github.com/mycroftwilde/portainer_templates/

