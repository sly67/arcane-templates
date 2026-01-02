# Mealie

A self-hosted recipe manager and meal planner

![Logo](https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/mealie.png)

## Docker Image

`hkotel/mealie:v0.4.3`

## Categories

- Other
- Tools

## Ports

- 9925:9000/tcp

## Environment Variables

- `PUID` - PUID (default: `1000`)
- `PGID` - PGID (default: `1000`)
- `TZ` - TZ (default: `America/New_York`)
- `WEB_CONCURRENCY` - WEB_CONCURRENCY (default: `2`)
- `MAX_WORKERS` - MAX_WORKERS (default: `8`)
- `RECIPE_PUBLIC` - RECIPE_PUBLIC (default: `true`)
- `RECIPE_SHOW_NUTRITION` - RECIPE_SHOW_NUTRITION (default: `true`)
- `RECIPE_SHOW_ASSETS` - RECIPE_SHOW_ASSETS (default: `true`)
- `RECIPE_LANDSCAPE_VIEW` - RECIPE_LANDSCAPE_VIEW (default: `true`)
- `RECIPE_DISABLE_COMMENTS` - RECIPE_DISABLE_COMMENTS (default: `false`)
- `RECIPE_DISABLE_AMOUNT` - RECIPE_DISABLE_AMOUNT (default: `false`)

## Volumes

- `/portainer/Files/AppData/Config/mealie` → `/app/data`

## Maintainer

 https://github.com/novaspirit/pi-hosted/

