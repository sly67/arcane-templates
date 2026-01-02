# RustDesk

A remote desktop software, the open source TeamViewer alternative, works out of the box, no configuration required. You have full control of your data, with no concerns about security.

![Logo](https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/rustdesk.png)

## Docker Image

`rustdesk/rustdesk-server-s6:latest`

## Categories

- Other
- Tools

## Ports

- 21115:21115/tcp
- 21116:21116/tcp
- 21116:21116/udp
- 21117:21117/tcp
- 21118:21118/tcp
- 21119:21119/tcp

## Environment Variables

- `RELAY` - RELAY (default: `rustdesk.example.com:21117`)
- `ENCRYPTED_ONLY` - ENCRYPTED_ONLY (default: `1`)

## Volumes

- `/portainer/Files/AppData/Config/rustdesk` → `/data`

## Maintainer

 https://github.com/novaspirit/pi-hosted/

