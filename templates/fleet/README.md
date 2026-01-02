# Fleet

[Fleet](https://github.com/linuxserver/fleet) provides an online web interface which displays a set of maintained images from one or more owned repositories.

## Docker Image

`linuxserver/fleet:latest`

## Ports

- 8080:8080/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)
- `fleet_admin_authentication_type` - fleet_admin_authentication_type (default: `DATABASE`)
- `fleet_database_url` - fleet_database_url (default: `jdbc:mariadb://<url>:3306/fleet`)
- `fleet_database_username` - fleet_database_username (default: `fleet_user`)
- `fleet_database_password` - fleet_database_password (default: `dbuserpassword`)
- `fleet_admin_secret` - fleet_admin_secret (default: `randomstring`)

## Volumes

- `/volume1/docker/fleet/config` → `/config`

## Maintainer

 https://github.com/technorabilia/portainer-templates/

