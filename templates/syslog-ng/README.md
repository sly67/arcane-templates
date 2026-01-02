# Syslog-ng

[syslog-ng](https://www.syslog-ng.com/products/open-source-log-management/) allows you to flexibly collect, parse, classify, rewrite and correlate logs from across your infrastructure and store or route them to log analysis tools.

![Logo](https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/syslog-ng-logo.png)

## Docker Image

`linuxserver/syslog-ng:latest`

## Categories

- Taskserver

## Ports

- 514:5514/udp
- 601:6601/tcp
- 6514:6514/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)

## Volumes

- `/volume1/docker/syslog-ng/config` → `/config`
- `/var/log` → `/var/log`

## Maintainer

 https://github.com/mycroftwilde/portainer_templates/

