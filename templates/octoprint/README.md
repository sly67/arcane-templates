# OctoPrint

OctoPrint is an open source 3D printer controller application, which provides a web interface for the connected printers.

![Logo](https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/octoprint.png)

## Docker Image

`octoprint/octoprint:latest`

## Categories

- Other
- Tools

## Ports

- 8051:80/tcp

## Environment Variables

- `NODE_ENV` - NODE_ENV (default: `development `)
- `ENABLE_MJPG_STREAMER` - ENABLE_MJPG_STREAMER (default: `true`)

## Volumes

- `/portainer/Files/AppData/Config/OctoPrint` → `/octoprint`
- `/dev` → `/dev`

## Maintainer

 https://github.com/novaspirit/pi-hosted/

