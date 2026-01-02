# Openssh-server

[Openssh-server](https://www.openssh.com/) is a sandboxed environment that allows ssh access without giving keys to the entire server. Giving ssh access via private key often means giving full access to the server. This container creates a limited and sandboxed environment that others can ssh into. The users only have access to the folders mapped and the processes running inside this container.

![Logo](https://upload.wikimedia.org/wikipedia/en/6/65/OpenSSH_logo.png)

## Docker Image

`linuxserver/openssh-server:latest`

## Categories

- Managementutilityserver

## Ports

- 2222:2222/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)
- `PUBLIC_KEY` - PUBLIC_KEY (default: `yourpublickey`)
- `PUBLIC_KEY_FILE` - PUBLIC_KEY_FILE (default: `/path/to/file`)
- `PUBLIC_KEY_DIR` - PUBLIC_KEY_DIR (default: `/path/to/directory/containing/_only_/pubkeys`)
- `PUBLIC_KEY_URL` - PUBLIC_KEY_URL (default: `https://github.com/username.keys`)
- `SUDO_ACCESS` - SUDO_ACCESS (default: `false`)
- `PASSWORD_ACCESS` - PASSWORD_ACCESS (default: `false`)
- `USER_PASSWORD` - USER_PASSWORD (default: `password`)
- `USER_PASSWORD_FILE` - USER_PASSWORD_FILE (default: `/path/to/file`)
- `USER_NAME` - USER_NAME (default: `linuxserver.io`)

## Volumes

- `/volume1/docker/openssh-server/config` → `/config`

## Maintainer

 https://github.com/mycroftwilde/portainer_templates/

