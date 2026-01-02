# Apache Httpd

The Apache HTTP Server is a free and open-source cross-platform web server software, released under the terms of Apache License 2.0. Apache is developed and maintained by an open community of developers under the auspices of the Apache Software Foundation.

![Logo](https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/apache-httpd.png)

## Docker Image

`httpd:latest`

## Categories

- Web
- Proxy

## Ports

- 8080:80/tcp
- 8443:443/tcp

## Environment Variables

- `PUID` - PUID (default: `1000`)
- `PGID` - PGID (default: `1000`)

## Volumes

- `/portainer/Files/AppData/Config/apache-httpd` → `/usr/local/apache2/htdocs/`

## Maintainer

 https://github.com/novaspirit/pi-hosted/

