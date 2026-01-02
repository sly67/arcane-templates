# Trilium

Trilium Notes is a hierarchical note taking application with focus on building large personal knowledge bases

![Logo](https://www.saashub.com/images/app/service_logos/55/2901389fab77/large.png?1561117248)

## Docker Image

`zadam/trilium:latest`

## Categories

- Notesserver

## Ports

- 3388:8080/tcp

## Environment Variables

- `TRILIUM_DATA_DIR` - TRILIUM_DATA_DIR (default: `/home/node/trilium-data`)
- `PORT` - PORT

## Volumes

- `/portainer/Files/AppData/Config/trilium-data` → `/home/node/trilium-data`

## Maintainer

 https://github.com/mycroftwilde/portainer_templates/

