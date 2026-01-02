# Tvheadend

Tvheadend is a TV streaming server and recorder for Linux, FreeBSD and Android supporting DVB-S, DVB-S2, DVB-C, DVB-T, ATSC, ISDB-T, IPTV, SAT&gt;IP and HDHomeRun as input sources.
Tvheadend offers the HTTP (VLC, MPlayer), HTSP (Kodi, Movian) and SAT&gt;IP streaming.
Multiple EPG sources are supported (over-the-air DVB and ATSC including OpenTV DVB extensions, XMLTV, PyXML).

![Logo](http://i.imgur.com/zGSUAT4.png)

## Docker Image

`linuxserver/tvheadend:latest`

## Categories

- Video
- Other

## Ports

- 9981:9981/tcp
- 9982:9982/tcp

## Environment Variables

- `PUID` - PUID (default: `1000`)
- `PGID` - PGID (default: `100`)

## Volumes

- `/portainer/Files/AppData/Config/TVHeadend` → `/config`
- `undefined` → `/recordings`

## Maintainer

 https://github.com/SelfhostedPro/selfhosted_templates/

