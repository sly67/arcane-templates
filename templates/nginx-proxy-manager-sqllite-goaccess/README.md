# Nginx Proxy Manager v2 with Sqlite and Goaccess Charts

Nginx Proxy Manager v2 with sqlite and Goaccess Charts enables you to easily forward to your websites running at home or otherwise, including free SSL, without having to know too much about Nginx or Letsencrypt.  Please see the install document at https://github.com/pi-hosted/pi-hosted/tree/master/docs installing the template

![Logo](https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/proxy_mgr.png)

## Docker Image

`undefined`

## Categories

- Proxy
- Tools

## Ports

- 80:80/tcp
- 81:81/tcp
- 443:443/tcp
- 7880:7880/tcp

## Environment Variables

- `PUID` - PUID (default: `1000`)
- `PGID` - PGID (default: `1000`)
- `TZ` - TZ (default: `America/New_York`)
- `SKIP_ARCHIVED_LOGS` - SKIP_ARCHIVED_LOGS (default: `false`)
- `BASIC_AUTH` - BASIC_AUTH (default: `false`)
- `BASIC_AUTH_USERNAME` - BASIC_AUTH_USERNAME Ignore if Basic Auth set to false (default: `user`)
- `BASIC_AUTH_PASSWORD` - BASIC_AUTH_PASSWORD Ignore if Basic Auth set to false (default: `Password`)

## Maintainer

 https://github.com/novaspirit/pi-hosted/

