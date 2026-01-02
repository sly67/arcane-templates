# FileBrowser S6

[arm][s6-version] Web File Browser which can be used as a middleware or standalone app.

![Logo](https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/filebrowser.png)

## Docker Image

`filebrowser/filebrowser:s6`

## Categories

- Other
- Tools

## Ports

- 8082:80/tcp

## Environment Variables

- `PUID` - PUID (default: `1000`)
- `PGID` - PGID (default: `1000`)

## Volumes

- `/portainer/Downloads` → `/srv`
- `/portainer/Files/AppData/Config/filebrowser/filebrowser.db` → `/database/filebrowser.db`
- `/portainer/Files/AppData/Config/filebrowser/settings.json` → `/config/settings.json`

## Maintainer

 https://github.com/novaspirit/pi-hosted/

