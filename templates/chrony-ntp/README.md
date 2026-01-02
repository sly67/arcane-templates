# Chrony NTP

chrony is a versatile implementation of the Network Time Protocol (NTP). It can synchronise the system clock with NTP servers, reference clocks (e.g. GPS receiver), and manual input using wristwatch and keyboard. It can also operate as an NTPv4 (RFC 5905) server and peer to provide a time service to other computers in the network.

![Logo](https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/chrony.png)

## Docker Image

`cturra/ntp:latest`

## Categories

- Other
- Tools

## Ports

- 123:123/udp

## Environment Variables

- `LOG_LEVEL` - LOG_LEVEL (default: `0`)
- `NTP_SERVERS` - NTP_SERVERS (default: `time.cloudflare.com`)

## Maintainer

 https://github.com/novaspirit/pi-hosted/

