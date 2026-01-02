# Pritunl

Pritunl container built on Alpine Linux. Supports IPv6 and running behind a reverse proxy. This container requires an external Mongo DB and should be run via Docker Compose or other orchestration.

![Logo](https://raw.githubusercontent.com/SelfhostedPro/selfhosted_templates/pritunl/Images/pritunl.png)

## Docker Image

`undefined`

## Categories

- Vpn
- Tools
- Other
- Web

## Environment Variables

- `REVERSE_PROXY` - REVERSE_PROXY (default: `false`)
- `PRITUNL_OPTS` - PRITUNL_OPTS
- `MONGODB_URI` - MONGODB_URI (default: `mongodb://mongo:27017/pritunl`)
- `WIREGUARD` - WIREGUARD (default: `false`)

## Maintainer

 https://github.com/SelfhostedPro/selfhosted_templates/

