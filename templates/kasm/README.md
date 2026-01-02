# Kasm

[Kasm](https://www.kasmweb.com/?utm_campaign=LinuxServer&utm_source=listing) Workspaces is a docker container streaming platform for delivering browser-based access to desktops, applications, and web services. Kasm uses devops-enabled Containerized Desktop Infrastructure (CDI) to create on-demand, disposable, docker containers that are accessible via web browser. Example use-cases include Remote Browser Isolation (RBI), Data Loss Prevention (DLP), Desktop as a Service (DaaS), Secure Remote Access Services (RAS), and Open Source Intelligence (OSINT) collections. The rendering of the graphical-based containers is powered by the open-source project [KasmVNC](https://www.kasmweb.com/kasmvnc.html?utm_campaign=LinuxServer&utm_source=kasmvnc).

![Logo](https://kasm-ci.s3.amazonaws.com/kasm_wide.png)

## Docker Image

`linuxserver/kasm:latest`

## Ports

- 3000:3000/tcp
- 443:443/tcp

## Environment Variables

- `KASM_PORT` - KASM_PORT (default: `443`)
- `DOCKER_HUB_USERNAME` - DOCKER_HUB_USERNAME (default: `USER`)
- `DOCKER_HUB_PASSWORD` - DOCKER_HUB_PASSWORD (default: `PASS`)
- `DOCKER_MTU` - DOCKER_MTU (default: `1500`)

## Volumes

- `/volume1/docker/kasm/opt` → `/opt`
- `/volume1/docker/kasm/profiles` → `/profiles`
- `/dev/input` → `/dev/input`
- `/run/udev/data` → `/run/udev/data`

## Maintainer

 https://github.com/technorabilia/portainer-templates/

