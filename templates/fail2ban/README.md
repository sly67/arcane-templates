# Fail2ban

[Fail2ban](http://www.fail2ban.org/) is a daemon to ban hosts that cause multiple authentication errors.

![Logo](https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/fail2ban-logo.png)

## Docker Image

`linuxserver/fail2ban:latest`

## Ports

- 80:80/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)
- `VERBOSITY` - VERBOSITY (default: `-vv`)

## Volumes

- `/volume1/docker/fail2ban/config` → `/config`
- `/volume1/docker/fail2ban/var/log:ro` → `/var/log:ro`
- `/volume1/docker/fail2ban/remotelogs/airsonic:ro` → `/remotelogs/airsonic:ro`
- `/volume1/docker/fail2ban/remotelogs/apache2:ro` → `/remotelogs/apache2:ro`
- `/volume1/docker/fail2ban/remotelogs/authelia:ro` → `/remotelogs/authelia:ro`
- `/volume1/docker/fail2ban/remotelogs/emby:ro` → `/remotelogs/emby:ro`
- `/volume1/docker/fail2ban/remotelogs/filebrowser:ro` → `/remotelogs/filebrowser:ro`
- `/volume1/docker/fail2ban/remotelogs/homeassistant:ro` → `/remotelogs/homeassistant:ro`
- `/volume1/docker/fail2ban/remotelogs/lighttpd:ro` → `/remotelogs/lighttpd:ro`
- `/volume1/docker/fail2ban/remotelogs/nextcloud:ro` → `/remotelogs/nextcloud:ro`
- `/volume1/docker/fail2ban/remotelogs/nginx:ro` → `/remotelogs/nginx:ro`
- `/volume1/docker/fail2ban/remotelogs/nzbget:ro` → `/remotelogs/nzbget:ro`
- `/volume1/docker/fail2ban/remotelogs/overseerr:ro` → `/remotelogs/overseerr:ro`
- `/volume1/docker/fail2ban/remotelogs/prowlarr:ro` → `/remotelogs/prowlarr:ro`
- `/volume1/docker/fail2ban/remotelogs/radarr:ro` → `/remotelogs/radarr:ro`
- `/volume1/docker/fail2ban/remotelogs/sabnzbd:ro` → `/remotelogs/sabnzbd:ro`
- `/volume1/docker/fail2ban/remotelogs/sonarr:ro` → `/remotelogs/sonarr:ro`
- `/volume1/docker/fail2ban/remotelogs/unificontroller:ro` → `/remotelogs/unificontroller:ro`
- `/volume1/docker/fail2ban/remotelogs/vaultwarden:ro` → `/remotelogs/vaultwarden:ro`

## Maintainer

 https://github.com/technorabilia/portainer-templates/

