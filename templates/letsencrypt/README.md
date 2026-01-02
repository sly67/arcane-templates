# Let's Encrypt

This container sets up an Nginx webserver and reverse proxy with php support and a built-in letsencrypt client that automates free SSL server certificate generation and renewal processes. It also contains fail2ban for intrusion prevention.
  
  Before running this container, make sure that the url and subdomains are properly forwarded to this container's host.
  
  - Port 443 on the internet side of the router should be forwarded to this container's port 443.
  - If you need a dynamic dns provider, you can use the free provider duckdns.org where the url will be yoursubdomain.duckdns.org and the subdomains    can be www,ftp,cloud
  - The container detects changes to url and subdomains, revokes existing certs and generates new ones during start. 
  - It also detects changes to the DHLEVEL parameter and replaces the dhparams file.
  
  - If you'd like to password protect your sites, you can use htpasswd. Run the following command on your host to generate the htpasswd file docker exec -it letsencrypt htpasswd -c /config/nginx/.htpasswd &lt;username&gt;

![Logo](https://raw.githubusercontent.com/SelfhostedPro/selfhosted_templates/master/Images/letsencrypt.png)

## Docker Image

`linuxserver/letsencrypt:latest`

## Categories

- Tools
- Web

## Ports

- 80/tcp
- 443/tcp

## Environment Variables

- `EMAIL` - EMAIL
- `URL` - URL
- `SUBDOMAINS` - SUBDOMAINS
- `ONLY_SUBDOMAINS` - ONLY_SUBDOMAINS
- `DHLEVEL` - DHLEVEL
- `PUID` - PUID (default: `1000`)
- `PGID` - PGID (default: `100`)
- `VALIDATION` - VALIDATION
- `DNSPLUGIN` - DNSPLUGIN

## Volumes

- `/portainer/Files/AppData/Config/LetsEncrypt` → `/config`

## Maintainer

 https://github.com/SelfhostedPro/selfhosted_templates/

