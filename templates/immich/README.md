# Immich {shmolf}

Self-hosted backup solution for photos and videos on mobile device.

![Logo](https://raw.githubusercontent.com/shmolf/portainer-templates/main/assets/logos/immich-logo.svg)

## Source Repository

- Repository: https://github.com/shmolf/portainer-templates
- Stack File: stacks/immich/docker-compose.yml

## Categories

- Photos
- Backup

## Environment Variables

- `PUID` - PUID (default: `1000`)
- `PGID` - PGID (default: `1000`)
- `IMMICH_VERSION` - Immich version (default: `release`)
- `DB_USERNAME` - Database username (default: `postgres`)
- `DB_PASSWORD` - Database password (default: `please-change-this-to-a-random-secret`)
- `DB_DATABASE_NAME` - Database name (default: `immich`)
- `DB_HOSTNAME` - Database hostname (default: `immich_postgres`)
- `UPLOAD_LOCATION` - File backup location (default: `/portainer/Files/AppData/Immich/upload`)
- `REDIS_HOSTNAME` - Redis hostname (default: `immich_redis`)
- `PORT` - Http Port (default: `2283`)

## Maintainer

 https://github.com/shmolf/portainer-templates/

