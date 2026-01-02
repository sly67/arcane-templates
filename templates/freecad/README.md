# Freecad

[FreeCAD](https://www.freecad.org/) is a general-purpose parametric 3D computer-aided design (CAD) modeler and a building information modeling (BIM) software application with finite element method (FEM) support.

![Logo](https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/freecad-logo.png)

## Docker Image

`linuxserver/freecad:latest`

## Ports

- 3000:3000/tcp
- 3001:3001/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)

## Volumes

- `/volume1/docker/freecad/config` → `/config`

## Maintainer

 https://github.com/technorabilia/portainer-templates/

