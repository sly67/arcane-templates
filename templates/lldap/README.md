# LLDAP

This project is a lightweight authentication server that provides an opinionated, simplified LDAP interface for authentication.

![Logo](https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/images/lldap.png)

## Docker Image

`nitnelave/lldap:stable-debian`

## Categories

- Tools
- Productivity

## Ports

- 3890:3890/tcp
- 17170:17170/tcp

## Environment Variables

- `LLDAP_JWT_SECRET` - LLDAP_JWT_SECRET (default: `somesecretjwt`)
- `LLDAP_LDAP_USER_PASS` - LLDAP_LDAP_USER_PASS (default: `someadminpassword`)
- `LLDAP_LDAP_BASE_DN` - LLDAP_LDAP_BASE_DN (default: `dc=example,dc=com`)

## Volumes

- `/portainer/Files/AppData/Config/lldap/data` → `/data`

## Maintainer

 https://github.com/novaspirit/pi-hosted/

