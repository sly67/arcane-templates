# MinIO

MinIO is a High Performance Object Storage released under GNU Affero GPL v3.0. It is API compatible with Amazon S3 cloud storage service.

![Logo](https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/minio.png)

## Docker Image

`minio/minio:latest`

## Categories

- Other
- Tools

## Ports

- 8760:9000/tcp
- 8761:9090/tcp

## Environment Variables

- `PUID` - PUID (default: `1000`)
- `PGID` - PGID (default: `1000`)
- `MINIO_ROOT_USER` - MINIO_ROOT_USER (default: `ROOTUSER`)
- `MINIO_ROOT_PASSWORD` - MINIO_ROOT_PASSWORD (default: `CHANGEME123`)
- `MINIO_SERVER_URL` - MINIO_SERVER_URL

## Volumes

- `/portainer/Files/AppData/Config/MinIO` → `/data`

## Maintainer

 https://github.com/novaspirit/pi-hosted/

