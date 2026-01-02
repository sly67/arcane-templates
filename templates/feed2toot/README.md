# Feed2toot

[Feed2toot](https://gitlab.com/chaica/feed2toot) automatically parses rss feeds, identifies new posts and posts them on the Mastodon social network.

![Logo](https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/feed2toot-banner.png)

## Docker Image

`linuxserver/feed2toot:latest`

## Environment Variables

- `PUID` - PUID (default: `1024`)
- `PGID` - PGID (default: `100`)
- `TZ` - TZ (default: `Europe/Amsterdam`)
- `FEED_LIMIT` - FEED_LIMIT (default: `5`)

## Volumes

- `/volume1/docker/feed2toot/config` → `/config`

## Maintainer

 https://github.com/technorabilia/portainer-templates/

