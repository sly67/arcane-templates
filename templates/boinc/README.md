# Boinc

[BOINC](https://boinc.berkeley.edu/) is a platform for high-throughput computing on a large scale (thousands or millions of computers). It can be used for volunteer computing (using consumer devices) or grid computing (using organizational resources). It supports virtualized, parallel, and GPU-based applications.

![Logo](https://raw.githubusercontent.com/BOINC/boinc/master/doc/logo/boinc_logo_black.jpg)

## Docker Image

`linuxserver/boinc:latest`

## Categories

- Research

## Ports

- 8080:8080/tcp
- 8181:8181/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)
- `PASSWORD` - PASSWORD

## Volumes

- `/volume1/docker/boinc/config` → `/config`

## Maintainer

 https://github.com/technorabilia/portainer-templates/

