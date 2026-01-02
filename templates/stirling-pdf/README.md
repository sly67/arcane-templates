# Stirling PDF {shmolf}

Your locally hosted one-stop-shop for all your PDF needs.

![Logo](https://raw.githubusercontent.com/shmolf/portainer-templates/main/assets/logos/stirling-pdf.svg)

## Docker Image

`frooodle/s-pdf:0.18.1`

## Categories

- Tools
- Pdf

## Ports

- 5417:8080/tcp

## Environment Variables

- `PUID` - PUID (default: `1000`)
- `PGID` - PGID (default: `1000`)
- `DOCKER_ENABLE_SECURITY` - Enable Login

## Volumes

- `/portainer/Files/AppData/Config/StirlingPDF` → `/configs`
- `/portainer/Files/AppData/Libraries/StirlingPDF/tessdata` → `/usr/share/tesseract-ocr/5/tessdata`

## Maintainer

 https://github.com/shmolf/portainer-templates/

