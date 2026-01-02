# Homepage

A modern (fully static, fast), secure (fully proxied), highly customizable application dashboard with integrations for more than 25 services and translations for over 15 languages. Easily configured via YAML files (or discovery via docker labels).

![Logo](https://mediadepot.github.io/templates/img/homepage.png)

## Docker Image

`ghcr.io/benphelps/homepage:latest`

## Categories

- Tools
- Networkweb
- Networkother
- Statusstable

## Ports

- 3000/tcp

## Environment Variables

- `PGID` - PGID (default: `15000`)
- `PUID` - PUID (default: `15000`)
- `TZ` - TZ (default: `America/Los_Angeles`)

## Volumes

- `/opt/mediadepot/apps/homepage` → `/app/config`
- `/etc/localtime` → `/etc/localtime`

## Maintainer

 https://github.com/mediadepot/templates/

