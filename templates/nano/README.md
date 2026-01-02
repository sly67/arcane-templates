# Nano

[Nano](https://nano.org/) is a digital payment protocol designed to be accessible and lightweight, with a focus on removing inefficiencies present in other cryptocurrencies. With ultrafast transactions and zero fees on a secure, green and decentralized network, this makes Nano ideal for everyday transactions.

![Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Nano_logo.png/640px-Nano_logo.png)

## Docker Image

`linuxserver/nano:latest`

## Categories

- Tools

## Ports

- 8075:8075/tcp
- 7076:3000/tcp
- 7077:3001/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)
- `PEER_HOST` - PEER_HOST (default: `localhost`)
- `LIVE_GENESIS_PUB` - LIVE_GENESIS_PUB (default: `GENESIS_PUBLIC`)
- `LIVE_GENESIS_ACCOUNT` - LIVE_GENESIS_ACCOUNT (default: `nano_xxxxxx`)
- `LIVE_GENESIS_WORK` - LIVE_GENESIS_WORK (default: `WORK_FOR_BLOCK`)
- `LIVE_GENESIS_SIG` - LIVE_GENESIS_SIG (default: `BLOCK_SIGNATURE`)
- `CLI_OPTIONS` - CLI_OPTIONS (default: `--config node.enable_voting=true`)
- `LMDB_BOOTSTRAP_URL` - LMDB_BOOTSTRAP_URL (default: `http://example.com/Nano_64_version_20.7z`)

## Volumes

- `/volume1/docker/nano/config` → `/config`

## Maintainer

 https://github.com/mycroftwilde/portainer_templates/

