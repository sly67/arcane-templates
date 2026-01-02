# Logzio Logs Collector

Docker container that uses Filebeat to collect logs from other Docker containers and forward those logs to your Logz.io account.

![Logo](https://mediadepot.github.io/templates/img/logzio-icon.png)

## Docker Image

`logzio/docker-collector-logs`

## Categories

- Tools

## Environment Variables

- `LOGZIO_TOKEN` - LOGZIO_TOKEN (default: `REPLACE-LOGZIO-TOKEN-HERE`)
- `LOGZIO_URL` - LOGZIO_URL (default: `listener.logz.io:5015`)

## Volumes

- `/var/run/docker.sock` → `/var/run/docker.sock`
- `/var/lib/docker/containers` → `/var/lib/docker/containers`

## Maintainer

 https://github.com/mediadepot/templates/

