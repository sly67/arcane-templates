# OScam

OScam is a softcam, software to be used to decrypt digital television channels on a settopbox (receiver), as an alternative for a conditional access module
  (CAM). OScam is, compared with other softcams (CCcam, mgcamd, etc.), open source. Hence, the name Open Source Conditional Access Module (OScam). OScam is based on the
  not so well known softcam MpCS. The main features of OSCam are next to its softcam capabilities, that it is able to function as a cardserver.

![Logo](http://i.imgur.com/8LadrLg.png)

## Docker Image

`linuxserver/oscam:latest`

## Categories

- Other

## Ports

- 8888:8888/tcp
- 10000:10000/tcp

## Environment Variables

- `PUID` - PUID (default: `1000`)
- `PGID` - PGID (default: `100`)

## Volumes

- `/portainer/Files/AppData/Config/OScam` → `/config`

## Maintainer

 https://github.com/SelfhostedPro/selfhosted_templates/

