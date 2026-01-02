# Pi-Hole-Unbound

A Linux network-level advertisement and Internet tracker blocking application which acts as a DNS sinkhole. This version has Ubound software installed on it so you don't need to rely on external DNS providers. When the installation is complete, navigate to your.ip.goes.here:1010/admin. Follow the article <a href='https://medium.com/@niktrix/getting-rid-of-systemd-resolved-consuming-port-53-605f0234f32f'>here</a>

![Logo](https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/pihole-unbound.png)

## Docker Image

`cbcrowe/pihole-unbound:latest`

## Categories

- Other
- Tools

## Ports

- 53:53/tcp
- 53:53/udp
- 1010:80/tcp
- 4443:443/tcp

## Environment Variables

- `ServerIP` - ServerIP (default: `192.168.0.X`)
- `TZ` - TZ (default: `Europe\London`)
- `DNSSEC` - DNSSEC
- `DNS1` - DNS1 (default: `127.0.0.1#5335`)
- `DNS2` - DNS2 (default: `127.0.0.1#5335`)

## Volumes

- `/portainer/Files/AppData/Config/PiHole-Unbound` → `/etc/pihole`
- `/portainer/Files/AppData/Config/PiHole-Unbound/DNS` → `/etc/dnsmasq.d`

## Maintainer

 https://github.com/novaspirit/pi-hosted/

