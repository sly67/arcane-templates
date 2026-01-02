# Transmission-OpenVPN

This container contains OpenVPN and Transmission with a configuration where Transmission is running only when OpenVPN has an active tunnel. It bundles configuration files for many popular VPN providers to make the setup easier.

![Logo](https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/transmission-icon.png)

## Docker Image

`haugene/transmission-openvpn:latest`

## Categories

- Torrentserver

## Ports

- 9091:9091/tcp

## Environment Variables

- `PUID` - PUID (default: `1000`)
- `PGID` - PGID (default: `100`)
- `OPENVPN_PROVIDER` - OPENVPN_PROVIDER (default: `MULLVAD`)
- `OPENVPN_USERNAME` - OPENVPN_USERNAME
- `OPENVPN_PASSWORD` - OPENVPN_PASSWORD
- `LOCAL_NETWORK` - LOCAL_NETWORK (default: `192.168.0.0/24`)

## Volumes

- `/portainer/Downloads` → `/data`
- `/etc/localtime` → `/etc/localtime`

## Maintainer

 https://github.com/mycroftwilde/portainer_templates/

