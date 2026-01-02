# UniFi Video

UniFi Video is a powerful and flexible, integrated IP video management surveillance system designed to work with Ubiquiti’s UniFi Video Camera product line. UniFi Video has an intuitive, configurable, and feature‑packed user interface with advanced features such as motion detection, auto‑discovery, user‑level security, storage management, reporting, and mobile device support.

![Logo](https://raw.githubusercontent.com/SelfhostedPro/selfhosted_templates/master/Images/UniFiVideo-logo.png)

## Docker Image

`pducharme/unifi-video-controller:latest`

## Categories

- Cctv

## Ports

- 1935:1935/tcp
- 7444:7444/tcp
- 7447:7447/tcp
- 6666:6666/tcp
- 7442:7442/tcp
- 7080:7080/tcp
- 7443:7443/tcp
- 7445:7445/tcp
- 7446:7446/tcp

## Environment Variables

- `PUID` - PUID (default: `99`)
- `PGID` - PGID (default: `100`)
- `UMASK` - UMASK (default: `002`)
- `CONTEXT_PATH` - CONTEXT_PATH

## Volumes

- `/portainer/Files/AppData/Config/UnifFiVideo/Recordings/` → `/recordings`
- `/portainer/Files/AppData/Config/UniFiVideo/` → `/config`

## Maintainer

 https://github.com/SelfhostedPro/selfhosted_templates/

