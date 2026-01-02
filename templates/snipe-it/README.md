# Snipe-it

Snipe-it makes asset management easy. It was built by people solving real-world IT and asset management problems, and a solid UX has always been a top priority. Straightforward design and bulk actions mean getting things done faster.

![Logo](https://s3-us-west-2.amazonaws.com/linuxserver-docs/images/snipe-it-logo500x500.png)

## Docker Image

`linuxserver/snipe-it:latest`

## Categories

- Managementutilityserver

## Ports

- 8080:80/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `APP_URL` - APP_URL (default: `<hostname or ip>`)
- `MYSQL_PORT_3306_TCP_ADDR` - MYSQL_PORT_3306_TCP_ADDR (default: `<mysql host>`)
- `MYSQL_PORT_3306_TCP_PORT` - MYSQL_PORT_3306_TCP_PORT (default: `<mysql port>`)
- `MYSQL_DATABASE` - MYSQL_DATABASE (default: `<mysql database>`)
- `MYSQL_USER` - MYSQL_USER (default: `<mysql pass>`)
- `MYSQL_PASSWORD` - MYSQL_PASSWORD (default: `changeme`)

## Volumes

- `/volume1/docker/snipe-it/config` → `/config`

## Maintainer

 https://github.com/mycroftwilde/portainer_templates/

