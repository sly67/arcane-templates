# AriaNG

AriaNg is a modern web frontend making aria2 easier to use. AriaNg is written in pure html & javascript, thus it does not need any compilers or runtime environment. You can just put AriaNg in your web server and open it in your browser. AriaNg uses responsive layout, and supports any desktop or mobile devices.

![Logo](https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/ariang.png)

## Docker Image

`hurlenko/aria2-ariang:latest`

## Categories

- Downloader

## Ports

- 8080:8080/tcp

## Environment Variables

- `PUID` - PUID (default: `1000`)
- `PGID` - PGID (default: `1000`)
- `ARIA2RPCPORT` - ARIA2RPCPORT (default: `443`)

## Volumes

- `/portainer/Files/AppData/Config/AriaNG` → `/aria2/conf`
- `/portainer/Downloads` → `/aria2/data`

## Maintainer

 https://github.com/novaspirit/pi-hosted/

