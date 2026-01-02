# Jellyfin-Accounts

jfa-go is a user management app for Jellyfin (and now Emby) that provides invite-based account creation as well as other features that make one's instance much easier to manage.

![Logo](https://github.com/hrfee/jfa-go/raw/main/images/jfa-go-icon.png)

## Docker Image

`hrfee/jfa-go:latest`

## Categories

- Video
- Music
- Photos
- Management

## Ports

- 8056:8056/tcp

## Volumes

- `/portainer/Files/AppData/Config/Jelllyfin` → `/jf`
- `/portainer/Files/AppData/Config/jfago` → `/data`
- `/etc/localtime` → `/etc/localtime`

## Maintainer

 https://github.com/novaspirit/pi-hosted/

