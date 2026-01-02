# Deluge openvpn

This container contains OpenVPN and Deluge with a configuration where Deluge is running only when OpenVPN has an active tunnel. It bundles configuration files for many popular VPN providers to make the setup easier.

## Docker Image

`sgtsquiggs/deluge-openvpn:latest`

## Categories

- Other
- Vpn
- Tools

## Ports

- 8112:8112/tcp

## Environment Variables

- `PUID` - PUID (default: `1001`)
- `PUID` - PGID (default: `1001`)
- `OPENVPN_PROVIDER` - OPENVPN_PROVIDER (default: `MULLVAD`)
- `OPENVPN_USERNAME` - OPENVPN_USERNAME
- `OPENVPN_PASSWORD` - OPENVPN_PASSWORD

## Volumes

- `/etc/localtime` → `/etc/localtime`
- `/portainer/Downloads` → `/downloads`
- `/portainer/Files/AppData/Config/DelugeOpenVPN/config` → `/config`

## Maintainer

 https://github.com/SelfhostedPro/selfhosted_templates/

