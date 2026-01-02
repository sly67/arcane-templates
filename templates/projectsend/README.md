# ProjectSend

ProjectSend is a self-hosted application that lets you upload files and assign them to specific clients that you create yourself! Secure, private and easy. No more depending on external services or e-mail to send those files!
  

![Logo](https://raw.githubusercontent.com/SelfhostedPro/selfhosted_templates/master/Images/projectsend-logo.png)

## Docker Image

`linuxserver/projectsend:latest`

## Categories

- Cloud
- Productivity
- Tools
- Other

## Ports

- 80/tcp

## Environment Variables

- `PUID` - PUID (default: `1000`)
- `PGID` - PGID (default: `100`)

## Volumes

- `/portainer/Files/AppData/ProjectSend` → `/data`
- `/portainer/Files/AppData/Config/ProjectSend` → `/config`

## Maintainer

 https://github.com/SelfhostedPro/selfhosted_templates/

