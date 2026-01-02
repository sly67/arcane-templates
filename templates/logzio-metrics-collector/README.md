# Logzio Metrics Collector

Docker Metrics Collector is a container that runs Metricbeat with the modules you enable at runtime.

![Logo](https://mediadepot.github.io/templates/img/logzio-icon.png)

## Docker Image

`logzio/docker-collector-metrics`

## Categories

- Tools

## Environment Variables

- `LOGZIO_TOKEN` - LOGZIO_TOKEN (default: `REPLACE-LOGZIO-TOKEN-HERE`)
- `LOGZIO_MODULES` - LOGZIO_MODULES (default: `system,docker`)

## Volumes

- `/var/run/docker.sock` → `/var/run/docker.sock`
- `/sys/fs/cgroup` → `/hostfs/sys/fs/cgroup`
- `/proc` → `/hostfs/proc`
- `/` → `/hostfs`

## Maintainer

 https://github.com/mediadepot/templates/

