# Yaak

[Yaak](https://yaak.app/) is a desktop API client for organizing and executing REST, GraphQL, and gRPC requests. It's built using [Tauri](https://tauri.app/), [Rust](https://www.rust-lang.org/), and [ReactJS](https://react.dev/).

![Logo](https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/yaak-logo.png)

## Docker Image

`linuxserver/yaak:latest`

## Ports

- 3000:3000/tcp
- 3001:3001/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)

## Volumes

- `/volume1/docker/yaak/config` → `/config`

## Maintainer

 https://github.com/technorabilia/portainer-templates/

