# OpenVPN Access Server

OpenVPN Access Server is a full featured secure network tunneling VPN software solution that integrates OpenVPN server capabilities, enterprise management capabilities, simplified OpenVPN Connect UI, and OpenVPN Client software packages that accommodate Windows, MAC, Linux, Android, and iOS environments.

![Logo](https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/openvpn-as-icon.png)

## Docker Image

`linuxserver/openvpn-as:latest`

## Categories

- Vpnserver

## Ports

- 943:943/tcp
- 9443:9443/tcp
- 1194:1194/udp

## Environment Variables

- `INTERFACE` - INTERFACE
- `PUID` - PUID (default: `1000`)
- `PGID` - PGID (default: `100`)

## Volumes

- `/portainer/Files/AppData/Config/OpenVPN-AS` → `/config`

## Maintainer

 https://github.com/mycroftwilde/portainer_templates/

