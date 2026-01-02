# Phpmyadmin

[Phpmyadmin](https://github.com/phpmyadmin/phpmyadmin/) is a free software tool written in PHP, intended to handle the administration of MySQL over the Web. phpMyAdmin supports a wide range of operations on MySQL and MariaDB.

![Logo](https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/phpmyadmin-logo.png)

## Docker Image

`linuxserver/phpmyadmin:latest`

## Categories

- Databaseserver

## Ports

- 80:80/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)
- `PMA_ARBITRARY` - PMA_ARBITRARY (default: `1`)
- `PMA_ABSOLUTE_URI` - PMA_ABSOLUTE_URI (default: `https://phpmyadmin.example.com`)

## Volumes

- `/volume1/docker/phpmyadmin/config` → `/config`

## Maintainer

 https://github.com/mycroftwilde/portainer_templates/

