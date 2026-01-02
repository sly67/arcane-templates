# SABnzbd

SABnzbd makes Usenet as simple and streamlined as possible by automating everything we can. All you have to do is add an .nzb. SABnzbd takes over from there, where it will be automatically downloaded, verified, repaired, extracted and filed away with zero human interaction.

![Logo](https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/sabnzbd-icon.png)

## Docker Image

`linuxserver/sabnzbd:latest`

## Categories

- Usenetserver

## Ports

- 8080:8080/tcp
- 9090:9090/tcp

## Environment Variables

- `PUID` - PUID (default: `1000`)
- `PGID` - PGID (default: `100`)

## Volumes

- `/portainer/Files/AppData/Config/Sabnzbd` → `/config`
- `/portainer/Downloads` → `/downloads`
- `/portainer/Downloads/incomplete` → `/incomplete-downloads`

## Maintainer

 https://github.com/mycroftwilde/portainer_templates/

