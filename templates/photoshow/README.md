# PhotoShow

A simple, easy way to turn a photo album into a webgallery.

![Logo](https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/photoshow-icon.png)

## Docker Image

`linuxserver/photoshow:latest`

## Categories

- Photos

## Ports

- 80/tcp

## Environment Variables

- `PUID` - PUID (default: `1000`)
- `PGID` - PGID (default: `100`)

## Volumes

- `/portainer/Pictures` → `/Pictures`
- `/portainer/Files/AppData/Photoshow/Thumbs` → `/Thumbs`
- `/portainer/Files/AppData/Config/PhotoShow` → `/config`

## Maintainer

 https://github.com/mycroftwilde/portainer_templates/

