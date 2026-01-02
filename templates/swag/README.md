# Swag

SWAG - Secure Web Application Gateway (formerly known as letsencrypt, no relation to Let's Encrypt™) sets up an Nginx webserver and reverse proxy with php support and a built-in certbot client that automates free SSL server certificate generation and renewal processes (Let's Encrypt and ZeroSSL). It also contains fail2ban for intrusion prevention.

![Logo](https://github.com/linuxserver/docker-templates/raw/master/linuxserver.io/img/swag.gif)

## Docker Image

`linuxserver/swag:latest`

## Ports

- 443:443/tcp
- 80:80/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)
- `URL` - URL (default: `yourdomain.url`)
- `VALIDATION` - VALIDATION (default: `http`)
- `SUBDOMAINS` - SUBDOMAINS (default: `www,`)
- `CERTPROVIDER` - CERTPROVIDER
- `DNSPLUGIN` - DNSPLUGIN (default: `cloudflare`)
- `PROPAGATION` - PROPAGATION
- `EMAIL` - EMAIL
- `ONLY_SUBDOMAINS` - ONLY_SUBDOMAINS (default: `false`)
- `EXTRA_DOMAINS` - EXTRA_DOMAINS
- `STAGING` - STAGING (default: `false`)

## Volumes

- `/volume1/docker/swag/config` → `/config`

## Maintainer

 https://github.com/technorabilia/portainer-templates/

