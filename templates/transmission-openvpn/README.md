# Transmission OpenVPN v3

This container contains OpenVPN and Transmission with a configuration
where Transmission is running only when OpenVPN has an active tunnel.
It bundles configuration files for many popular VPN providers to make the setup easier.

![Logo](https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/transmission-icon.png)

## Docker Image

`haugene/transmission-openvpn:3.7.1`

## Categories

- Other
- Vpn
- Tools

## Ports

- 9091:9091/tcp

## Environment Variables

- `PUID` - PUID (default: `1000`)
- `PGID` - PGID (default: `1000`)
- `OPENVPN_PROVIDER` - OPENVPN_PROVIDER (default: `MULLVAD`)
- `OPENVPN_CONFIG` - OPENVPN_CONFIG
- `OPENVPN_USERNAME` - OPENVPN_USERNAME
- `OPENVPN_PASSWORD` - OPENVPN_PASSWORD
- `LOCAL_NETWORK` - LOCAL_NETWORK (default: `192.168.0.0/24`)
- `TRANSMISSION_WATCH_DIR_ENABLED` - watch-dir-enabled (default: `true`)

## Volumes

- `/portainer/Files/AppData/Config/transmission-openvpn` → `/config`
- `/portainer/Downloads` → `/data`
- `/etc/localtime` → `/etc/localtime`

## Maintainer

 https://github.com/novaspirit/pi-hosted/

