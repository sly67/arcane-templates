# ArchiSteamFarm

C# application with primary purpose of farming Steam cards from multiple accounts simultaneously.

![Logo](https://raw.githubusercontent.com/JustArchiNET/ArchiSteamFarm/main/resources/ASF_184x184.png)

## Docker Image

`justarchi/archisteamfarm:latest`

## Categories

- Other
- Tools
- Games

## Ports

- 1242:1242/tcp

## Environment Variables

- `PUID` - PUID (default: `1000`)
- `PGID` - PGID (default: `1000`)

## Volumes

- `/portainer/Files/AppData/Config/ArchiSteamFarm/config` → `/app/config`
- `/portainer/Files/AppData/Config/ArchiSteamFarm/plugins` → `/app/plugins`
- `/portainer/Files/AppData/Config/ArchiSteamFarm/logs` → `/app/logs`

## Maintainer

 https://github.com/novaspirit/pi-hosted/

