# Pure-FTP Server

Pure-FTPd is a free (BSD), secure, production-quality and standard-conformant FTP server. 

![Logo](https://mediadepot.github.io/templates/img/pureftpd-icon.jpg)

## Docker Image

`stilliard/pure-ftpd:hardened`

## Categories

- Networkother
- Utilities

## Ports

- 21/tcp
- 30000/tcp
- 30001/tcp
- 30002/tcp
- 30003/tcp
- 30004/tcp
- 30005/tcp
- 30006/tcp
- 30007/tcp
- 30008/tcp
- 30009/tcp

## Environment Variables

- `FTP_USER_NAME` - FTP_USER_NAME (default: `depot`)
- `FTP_USER_PASS` - FTP_USER_PASS (default: `badpass`)
- `FTP_USER_HOME` - FTP_USER_HOME (default: `/data`)
- `FTP_USER_GID` - FTP_USER_GID (default: `15000`)
- `FTP_USER_UID` - FTP_USER_UID (default: `15000`)
- `TZ` - TZ (default: `America/Los_Angeles`)
- `PUBLICHOST` - PUBLICHOST (default: `localhost`)

## Volumes

- `/opt/mediadepot/apps/pureftp` → `/etc/pure-ftpd/passwd`
- `/media/storage/tvshows` → `/data/tvshows`
- `/media/storage/movies` → `/data/movies`
- `/media/storage/music` → `/data/music`
- `/media/storage/ebooks` → `/data/ebooks`
- `/media/storage/photos` → `/data/photos`
- `/media/storage/documents` → `/data/documents`
- `/media/storage/downloads` → `/data/downloads`
- `/media/storage/software` → `/data/software`
- `/media/temp/blackhole` → `/data/blackhole`
- `/media/temp/processing` → `/data/processing`

## Maintainer

 https://github.com/mediadepot/templates/

