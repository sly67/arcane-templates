# Duplicati

Duplicati works with standard protocols like FTP, SSH, WebDAV as well as popular services like Microsoft OneDrive, Amazon Cloud Drive & S3, Google Drive, box.com, Mega, hubiC and many others.

![Logo](https://mediadepot.github.io/templates/img/duplicati-icon.png)

## Docker Image

`linuxserver/duplicati:latest`

## Categories

- Utilitybackup

## Ports

- 8200/tcp

## Environment Variables

- `TZ` - TZ (default: `America/Los_Angeles`)

## Volumes

- `/opt/mediadepot/apps/duplicati` → `/config`
- `/opt/mediadepot/apps/` → `/source`

## Maintainer

 https://github.com/mediadepot/templates/

