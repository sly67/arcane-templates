# Peppermint

Peppermint is a free and open source tickeg management solution with a range of features

![Logo](https://raw.githubusercontent.com/Peppermint-Lab/peppermint/master/public/logo.svg)

## Docker Image

`pepperlabs/peppermint:latest`

## Categories

- Other
- Tools
- Management

## Ports

- 5001:5001/tcp

## Environment Variables

- `PUID` - PUID (default: `1000`)
- `PGID` - PGID (default: `100`)
- `PORT` - PORT (default: `5001`)
- `DB_USERNAME` - DB_USERNAME (default: `peppermint`)
- `DB_PASSWORD` - DB_PASSWORD (default: `1234`)
- `DB_HOST` - DB_HOST (default: `postgres`)

## Volumes

- `/srv/dev-disk-by-label-media/Files/AppData/Config/peppermint` → `/data`

