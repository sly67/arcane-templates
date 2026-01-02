# Ldap-auth

[Ldap-auth](https://github.com/nginxinc/nginx-ldap-auth) software is for authenticating users who request protected resources from servers proxied by nginx. It includes a daemon (ldap-auth) that communicates with an authentication server, and a webserver daemon that generates an authentication cookie based on the user’s credentials. The daemons are written in Python for use with a Lightweight Directory Access Protocol (LDAP) authentication server (OpenLDAP or Microsoft Windows Active Directory 2003 and 2012).

![Logo](https://jumpcloud.com/wp-content/uploads/2016/12/LDAP_Logo-1420591101.jpg)

## Docker Image

`linuxserver/ldap-auth:latest`

## Categories

- Proxyserver

## Ports

- 8888:8888/tcp
- 9000:9000/tcp

## Environment Variables

- `TZ` - TZ (default: `Europe/Amsterdam`)
- `FERNETKEY` - FERNETKEY
- `CERTFILE` - CERTFILE
- `KEYFILE` - KEYFILE

## Maintainer

 https://github.com/mycroftwilde/portainer_templates/

