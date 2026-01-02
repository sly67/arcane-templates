# Terraria Server {shmolf}

Docker container for a Terraria dedicated server.

![Logo](https://raw.githubusercontent.com/shmolf/portainer-templates/main/assets/logos/terraria-server.png)

## Docker Image

`passivelemon/terraria-docker:latest`

## Categories

- Games

## Ports

- 7777:7777/tcp

## Environment Variables

- `PUID` - PUID (default: `1000`)
- `PGID` - PGID (default: `1000`)
- `WORLD` - World name (default: `dockerworld`)

## Volumes

- `/portainer/Files/AppData/Libraries/StirlingPDF/tessdata` → `/usr/share/tesseract-ocr/5/tessdata`

## Maintainer

 https://github.com/shmolf/portainer-templates/

