# NZBHydra 2

NZBHydra is a meta search for NZB indexers and the "spiritual successor" to NZBmegasearcH. It provides easy access to a number of raw and newznab based indexers.

![Logo](https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/hydra-icon.png)

## Docker Image

`linuxserver/nzbhydra2:latest`

## Categories

- Proxyserver

## Ports

- 5076:5076/tcp

## Environment Variables

- `PUID` - PUID (default: `1000`)
- `PGID` - PGID (default: `100`)

## Volumes

- `/portainer/Files/AppData/Config/Nzbhydra2` → `/config`
- `/portainer/Downloads` → `/downloads`

## Maintainer

 https://github.com/mycroftwilde/portainer_templates/

