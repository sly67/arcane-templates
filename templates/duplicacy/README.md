# Duplicacy

Duplicacy backs up your files to many cloud storages with client-side encryption and the highest level of deduplication

![Logo](https://mediadepot.github.io/templates/img/duplicacy-icon.png)

## Docker Image

`mediadepot/duplicacy:latest`

## Categories

- Utilitybackup

## Ports

- 3875/tcp

## Environment Variables

- `TZ` - TZ (default: `America/Los_Angeles`)

## Volumes

- `/opt/mediadepot/apps/duplicacy/config` → `/config`
- `/opt/mediadepot/apps/duplicacy/logs` → `/logs`
- `/opt/mediadepot/apps/duplicacy/cache` → `/cache`
- `/opt/mediadepot/apps/` → `/source/apps`
- `/media/storage/` → `/source/storage`

## Maintainer

 https://github.com/mediadepot/templates/

