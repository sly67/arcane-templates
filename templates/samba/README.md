# Samba

Samba has provided secure, stable and fast file and print services for all clients using the SMB/CIFS protocol, such as all versions of DOS and Windows, OS/2, Linux and many others.

![Logo](https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/samba.png)

## Docker Image

`dperson/samba:latest`

## Categories

- Other
- Tools

## Ports

- 139:139/tcp
- 445:445/tcp

## Environment Variables

- `PUID` - PUID (default: `1000`)
- `PGID` - PGID (default: `1000`)
- `USERID` - USERID (default: `1000`)
- `GROUPID` - GROUPID (default: `1000`)
- `USER` - USER (default: `guest;guest`)
- `PERMISSIONS` - PERMISSIONS (default: `true`)
- `SHARE` - SHARE (default: `portainer;/share;yes;no;yes;guest`)

## Volumes

- `/portainer/Downloads` → `/share`

## Maintainer

 https://github.com/novaspirit/pi-hosted/

