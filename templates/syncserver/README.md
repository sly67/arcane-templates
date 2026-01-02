# Mozilla Syncserver

Run-Your-Own Firefox Sync Server

![Logo](https://mediadepot.github.io/templates/img/firefox-logo.png)

## Docker Image

`mozilla/syncserver:latest`

## Categories

- Tools

## Ports

- 5000/tcp

## Environment Variables

- `SYNCSERVER_PUBLIC_URL` - SYNCSERVER_PUBLIC_URL (default: `https://syncserver.depot.lan`)
- `SYNCSERVER_SECRET_FILE` - SYNCSERVER_SECRET_FILE (default: `/data/secret_key`)
- `SYNCSERVER_SQLURI` - SYNCSERVER_SQLURI (default: `sqlite:////data/syncserver.db`)
- `SYNCSERVER_BATCH_UPLOAD_ENABLED` - SYNCSERVER_BATCH_UPLOAD_ENABLED (default: `true`)
- `SYNCSERVER_FORCE_WSGI_ENVIRON` - SYNCSERVER_FORCE_WSGI_ENVIRON (default: `false`)
- `PORT` - PORT (default: `5000`)

## Volumes

- `/opt/mediadepot/apps/syncserver` → `/data`

## Maintainer

 https://github.com/mediadepot/templates/

