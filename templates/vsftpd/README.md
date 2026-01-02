# vsftpd FTP Server

Secure, fast FTP server for UNIX-like systems

![Logo](https://mediadepot.github.io/templates/img/pureftpd-icon.jpg)

## Docker Image

`delfer/alpine-ftp-server`

## Categories

- Networkother
- Utilities

## Ports

- 21/tcp
- 21000/tcp
- 21001/tcp
- 21002/tcp
- 21003/tcp
- 21004/tcp
- 21005/tcp
- 21006/tcp
- 21007/tcp
- 21008/tcp
- 21009/tcp
- 21010/tcp

## Environment Variables

- `ADDRESS` - ADDRESS
- `USERS` - USERS (default: `depot|badpass|/home/depot|15000`)

## Volumes

- `/media/storage/tvshows` → `/home/depot/tvshows`
- `/media/storage/movies` → `/home/depot/movies`
- `/media/storage/music` → `/home/depot/music`
- `/media/storage/ebooks` → `/home/depot/ebooks`
- `/media/storage/photos` → `/home/depot/photos`
- `/media/storage/documents` → `/home/depot/documents`
- `/media/storage/downloads` → `/home/depot/downloads`
- `/media/storage/software` → `/home/depot/software`
- `/media/temp/blackhole` → `/home/depot/blackhole`
- `/media/temp/processing` → `/home/depot/processing`

## Maintainer

 https://github.com/mediadepot/templates/

