# Sematext Docker Agent

Collect logs, metrics and docker events

![Logo](https://portainer-io-assets.sfo2.digitaloceanspaces.com/logos/sematext_agent.png)

## Source Repository

- Repository: https://github.com/deviantony/templates
- Stack File: stacks/sematext-agent-docker/docker-stack.yml

## Categories

- Log Management
- Monitoring

## Environment Variables

- `LOGSENE_TOKEN` - Logs token
- `SPM_TOKEN` - SPM monitoring token

## Volumes

- `/var/run/docker.sock` → `/var/run/docker.sock`

