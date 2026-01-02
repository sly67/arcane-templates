# Foldingathome

[Folding@home](https://foldingathome.org/) is a distributed computing project for simulating protein dynamics, including the process of protein folding and the movements of proteins implicated in a variety of diseases. It brings together citizen scientists who volunteer to run simulations of protein dynamics on their personal computers. Insights from this data are helping scientists to better understand biology, and providing new opportunities for developing therapeutics.

![Logo](https://foldingathome.org/wp-content/uploads/2016/09/folding-at-home-logo.png)

## Docker Image

`linuxserver/foldingathome:latest`

## Categories

- Tools

## Ports

- 7396:7396/tcp
- 36330:36330/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)

## Volumes

- `/volume1/docker/foldingathome/config` → `/config`

## Maintainer

 https://github.com/mycroftwilde/portainer_templates/

