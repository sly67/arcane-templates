# Gitea

Git with a cup of tea! Painless self-hosted all-in-one software development service, including Git hosting, code review, team collaboration, package registry and CI/CD.

![Logo](https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/gitea.png)

## Docker Image

`gitea/gitea:latest`

## Categories

- Web
- Tools

## Ports

- 3000:3000/tcp
- 222:22/tcp

## Environment Variables

- `PUID` - PUID (default: `1000`)
- `PGID` - PGID (default: `100`)

## Volumes

- `/portainer/Files/AppData/Config/Gitea` → `/data`
- ` /etc/timezone` → `/etc/timezone:ro`
- `/etc/localtime` → `/etc/localtime:ro`

## Maintainer

 https://github.com/Qballjos/portainer_templates/

