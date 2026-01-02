# System Stats OLED display

A quick way to display system stats on a 128x64 I2C OLED display.

![Logo](https://camo.githubusercontent.com/4cf4aaa1e53612347e4d48f152d6d4eea0ce93a6ecacacaa9d44061d0994b408/68747470733a2f2f7777772e7468652d6469792d6c6966652e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032322f30392f3138373137323831322d64653264653635632d626433302d343065372d613835322d3264343234656463323761622e6a7067)

## Docker Image

`mklements/oled_stats:latest`

## Categories

- Monitor
- Other

## Environment Variables

- `start` - start displaying screen (default: `8`)
- `end` - end displaying screen (default: `23`)

## Volumes

- `/etc/timezone` → `/etc/timezone`
- `/etc/localtime` → `/etc/localtime`

## Maintainer

 https://github.com/novaspirit/pi-hosted/

