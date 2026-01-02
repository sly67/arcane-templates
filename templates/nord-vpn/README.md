# nord-vpn

This is an OpenVPN client docker container that uses recommended NordVPN server. It makes routing containers traffic through OpenVPN easy.

![Logo](https://s3.us-east-2.amazonaws.com/ccp-prd-s3-uploads/2022/3/8/03500108885898f010e823eeb284e393b99e1ad5.png)

## Docker Image

`azinchen/nordvpn:latest`

## Categories

- Other

## Ports

- 8080:80/tcp

## Environment Variables

- `USER` - NordVPN user (default: `user@email.com`)
- `PASS` - NordVPN password (default: `password`)
- `COUNTRY` - Countries to connect to (see webpage readme) (default: `Spain;Hong Kong;IE;131`)
- `GROUP` - Group name filter to which to connect to (default: `Standard VPN servers`)
- `RANDOM_TOP` - Range of servers to pick from the top (default: `10`)
- `RECREATE_VPN_CRON` - Define when to look again for new defined servers (default: `5 */3 * * *`)
- `CHECK_CONNECTION_URL` - URL to check internet connection is working to (default: `https://www.google.com`)
- `NETWORK` - Subnet to define network access (read Local Network access to services connecting to the internet through the VPN readme to get the right subnet!) (default: `192.168.1.0/24;192.168.2.0/24`)
- `OPENVPN_OPTS` - Used to pass extra parameters to openvpn (default: `--mute-replay-warnings`)

## Maintainer

 https://github.com/novaspirit/pi-hosted/

