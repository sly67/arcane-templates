# Blender

[Blender](https://www.blender.org/) is a free and open-source 3D computer graphics software toolset used for creating animated films, visual effects, art, 3D printed models, motion graphics, interactive 3D applications, virtual reality, and computer games. **This image does not support GPU rendering out of the box only accelerated workspace experience**

![Logo](https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/blender-logo.png)

## Docker Image

`linuxserver/blender:latest`

## Ports

- 3000:3000/tcp
- 3001:3001/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)
- `SUBFOLDER` - SUBFOLDER (default: `/`)

## Volumes

- `/volume1/docker/blender/config` → `/config`

## Maintainer

 https://github.com/technorabilia/portainer-templates/

