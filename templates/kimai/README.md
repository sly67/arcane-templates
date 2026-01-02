# Kimai

[Kimai](https://kimai.org/) is a professional grade time-tracking application, free and open-source. It handles use-cases of freelancers as well as companies with dozens or hundreds of users. Kimai was build to track your project times and ships with many advanced features, including but not limited to: JSON API, invoicing, data exports, multi-timer and punch-in punch-out mode, tagging, multi-user - multi-timezones - multi-language ([over 30 translations existing](https://hosted.weblate.org/projects/kimai/)!), authentication via SAML/LDAP/Database, two-factor authentication (2FA) with TOTP, customizable role and team permissions, responsive design, user/customer/project specific rates, advanced search & filtering, money and time budgets, advanced reporting, support for [plugins](https://www.kimai.org/store/) and so much more.

![Logo](https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/kimai-logo.png)

## Docker Image

`linuxserver/kimai:latest`

## Ports

- 80:80/tcp
- 443:443/tcp

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)
- `DATABASE_URL` - DATABASE_URL (default: `mysql://your_db_user:your_db_pass@your_db_host:3306/your_db_name?charset=your_db_charset&serverVersion=your_db_version`)

## Volumes

- `/volume1/docker/kimai/config` → `/config`

## Maintainer

 https://github.com/technorabilia/portainer-templates/

