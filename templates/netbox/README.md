# Netbox

[Netbox](https://github.com/netbox-community/netbox) is an IP address management (IPAM) and data center infrastructure management (DCIM) tool. Initially conceived by the network engineering team at DigitalOcean, NetBox was developed specifically to address the needs of network and infrastructure engineers. It is intended to function as a domain-specific source of truth for network operations.

![Logo](https://raw.githubusercontent.com/netbox-community/netbox/develop/docs/netbox_logo.png)

## Docker Image

`linuxserver/netbox:latest`

## Categories

- Managementutilityserver

## Ports

- 8000:8000/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)
- `SUPERUSER_EMAIL` - SUPERUSER_EMAIL (default: `<SUPERUSER_EMAIL>`)
- `SUPERUSER_PASSWORD` - SUPERUSER_PASSWORD (default: `<SUPERUSER_PASSWORD>`)
- `ALLOWED_HOST` - ALLOWED_HOST (default: `<ALLOWED_HOST>`)
- `DB_NAME` - DB_NAME (default: `<DB_NAME>`)
- `DB_USER` - DB_USER (default: `<DB_USER>`)
- `DB_PASSWORD` - DB_PASSWORD (default: `<DB_PASSWORD>`)
- `DB_HOST` - DB_HOST (default: `<DB_HOST>`)
- `DB_PORT` - DB_PORT (default: `<DB_PORT>`)
- `REDIS_HOST` - REDIS_HOST (default: `<REDIS_HOST>`)
- `REDIS_PORT` - REDIS_PORT (default: `<REDIS_PORT>`)
- `REDIS_PASSWORD` - REDIS_PASSWORD (default: `<REDIS_PASSWORD>`)
- `REDIS_DB_TASK` - REDIS_DB_TASK (default: `<REDIS_DB_TASK>`)
- `REDIS_DB_CACHE` - REDIS_DB_CACHE (default: `<REDIS_DB_CACHE>`)
- `BASE_PATH` - BASE_PATH (default: `<BASE_PATH>`)
- `REMOTE_AUTH_ENABLED` - REMOTE_AUTH_ENABLED (default: `<REMOTE_AUTH_ENABLED>`)
- `REMOTE_AUTH_BACKEND` - REMOTE_AUTH_BACKEND (default: `<REMOTE_AUTH_BACKEND>`)
- `REMOTE_AUTH_HEADER` - REMOTE_AUTH_HEADER (default: `<REMOTE_AUTH_HEADER>`)
- `REMOTE_AUTH_AUTO_CREATE_USER` - REMOTE_AUTH_AUTO_CREATE_USER (default: `<REMOTE_AUTH_AUTO_CREATE_USER>`)
- `REMOTE_AUTH_DEFAULT_GROUPS` - REMOTE_AUTH_DEFAULT_GROUPS (default: `<REMOTE_AUTH_DEFAULT_GROUPS>`)
- `REMOTE_AUTH_DEFAULT_PERMISSIONS` - REMOTE_AUTH_DEFAULT_PERMISSIONS (default: `<REMOTE_AUTH_DEFAULT_PERMISSIONS>`)

## Volumes

- `/volume1/docker/netbox/config` → `/config`

## Maintainer

 https://github.com/mycroftwilde/portainer_templates/

