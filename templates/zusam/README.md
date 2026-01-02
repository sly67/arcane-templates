# Zus.am

Zusam is a free and open-source way to self-host private forums for groups of friends.

![Logo](https://github.com/zusam/zusam/raw/master/app/src/assets/zusam_logo.png)

## Docker Image

`zusam/zusam`

## Categories

- Social
- Forum

## Ports

- 4180:8080/tcp

## Environment Variables

- `INIT_USER` - INIT_USER (default: `email@domain.example`)
- `INIT_PASSWORD` - INIT_PASSWORD (default: `initpass zusam`)

## Volumes

- `/portainer/Files/AppData/Config/Zusam` → `/zusam/data`

## Maintainer

 https://github.com/xneo1/portainer_templates/

