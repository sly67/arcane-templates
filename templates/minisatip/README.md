# Minisatip

Minisatip is a multi-threaded satip server version 1.2 that runs under Linux and it was tested with DVB-S, DVB-S2, DVB-T, DVB-T2, DVB-C, DVB-C2, ATSC and ISDB-T cards.

  The application is designed to stream the requested data to multiple clients (even with one dvb card) at the same time while opening different pids.
  

![Logo](https://raw.githubusercontent.com/SelfhostedPro/selfhosted_templates/master/Images/minisatip-icon.png)

## Docker Image

`linuxserver/minisatip:latest`

## Categories

- Video
- Other
- Tools

## Ports

- 8875:8875/tcp
- 554:554/tcp
- 1900:1900/udp

## Environment Variables

- `PUID` - PUID (default: `1000`)
- `PGID` - PGID (default: `100`)

## Maintainer

 https://github.com/SelfhostedPro/selfhosted_templates/

