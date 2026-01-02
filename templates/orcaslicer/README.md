# Orcaslicer

[Orca Slicer](https://github.com/SoftFever/OrcaSlicer) is an open source slicer for FDM printers. OrcaSlicer is fork of Bambu Studio, it was previously known as BambuStudio-SoftFever, Bambu Studio is forked from PrusaSlicer by Prusa Research, which is from Slic3r by Alessandro Ranellucci and the RepRap community

![Logo](https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/orcaslicer-logo.png)

## Docker Image

`linuxserver/orcaslicer:latest`

## Ports

- 3000:3000/tcp
- 3001:3001/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)

## Volumes

- `/volume1/docker/orcaslicer/config` → `/config`

## Maintainer

 https://github.com/technorabilia/portainer-templates/

