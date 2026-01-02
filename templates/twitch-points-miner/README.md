# Twitch Points Miner

A simple script that will watch a stream for you and earn the channel points.

![Logo](https://raw.githubusercontent.com/Qballjos/portainer_templates/master/Images/twitchpointsminer.png)

## Docker Image

`rdavidoff/twitch-channel-points-miner-v2:latest`

## Categories

- Tools
- Other

## Ports

- 5000:5000/tcp

## Volumes

- `/portainer/Files/AppData/Config/TwitchPointsMiner/run.py` → `/usr/src/app/run.py`
- `/portainer/Files/AppData/TwitchPointsMiner/cookies` → `/usr/src/app/cookies`
- `/portainer/Files/AppData/TwitchPointsMiner/logs` → `/usr/src/app/logs`
- `/portainer/Files/AppData/TwitchPointsMiner/analytics` → `/usr/src/app/analytics`

## Maintainer

 https://github.com/Qballjos/portainer_templates/

