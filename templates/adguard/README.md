# Adguard

AdGuard Home is a network-wide software for blocking ads & tracking. After you set it up, it’ll cover ALL your home devices, and you don’t need any client-side software for that. With the rise of Internet-Of-Things and connected devices, it becomes more and more important to be able to control your whole network.

![Logo](https://raw.githubusercontent.com/mikestraney/portainer-templates/master/Images/adguard.png)

## Docker Image

`adguard/adguardhome:latest`

## Categories

- Other

## Ports

- 53:53/tcp
- 53:53/udp
- 67:67/udp
- 68:68/tcp
- 68:68/udp
- 80:80/tcp
- 443:443/tcp
- 853:853/tcp
- 3000:3000/tcp

## Environment Variables

- `PUID` - PUID (default: `1000`)
- `PGID` - PGID (default: `100`)
- `CONTEXT_PATH` - CONTEXT_PATH

## Volumes

- `/portainer/Files/AppData/Adguard/Workdir` → `/opt/adguardhome/work`
- `/portainer/Files/AppData/Adguard/Conf` → `/opt/adguardhome/conf`

## Maintainer

 https://github.com/mikestraney/portainer-templates/

