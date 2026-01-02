# Arcane Templates Registry

This repository contains 551 Docker Compose templates converted from [Lissy93/portainer-templates](https://github.com/Lissy93/portainer-templates) for use with [Arcane](https://getarcane.app/).

## Overview

This is a comprehensive collection of Docker Compose templates that have been automatically converted from the Portainer template format to the Arcane template registry format. Each template includes:

- `compose.yml` - Docker Compose configuration
- `.env.example` - Environment variable examples
- `README.md` - Documentation for the template

## Using this Registry

To use this registry with Arcane:

1. Add the registry URL to your Arcane instance:
   ```
   https://raw.githubusercontent.com/sly67/arcane-templates/main/registry.json
   ```

2. Browse and deploy templates directly from the Arcane interface

## Template Categories

The templates cover a wide range of applications including:

- Media Management (Plex, Jellyfin, Sonarr, Radarr, etc.)
- Databases (PostgreSQL, MariaDB, MongoDB, etc.)
- Developer Tools (GitLab, Jenkins, VS Code Server, etc.)
- Monitoring & Analytics
- Home Automation
- File Management
- Backup Solutions
- And many more...

## Repository Structure

```
.
├── registry.json          # Main registry file consumed by Arcane
├── templates/            # Individual template directories
│   ├── baserow/
│   │   ├── compose.yml
│   │   ├── .env.example
│   │   └── README.md
│   ├── jellyfin/
│   │   ├── compose.yml
│   │   ├── .env.example
│   │   └── README.md
│   └── ...
└── convert.js            # Conversion script (for reference)
```

## Contributing

If you find issues with any template or want to add new ones:

1. Fork this repository
2. Make your changes
3. Submit a pull request

## Conversion Notes

These templates were automatically converted from [Lissy93/portainer-templates](https://github.com/Lissy93/portainer-templates) Portainer format. Some manual adjustments may be needed for:

- Volume paths (currently set to `/opt/mediadepot/apps/` from the original templates)
- Network configurations
- Template-specific customizations

## License

Individual templates retain their original licenses. Please check each template's documentation for specific licensing information.

## Credits

- Original Portainer templates from [Lissy93/portainer-templates](https://github.com/Lissy93/portainer-templates)
- Conversion performed using automated script
- Arcane template format based on [Arcane Templates Schema](https://registry.getarcane.app/schema.json)

## Support

For issues with:
- **Arcane itself**: Visit [Arcane Documentation](https://getarcane.app/docs)
- **This registry**: Open an issue in this repository
- **Individual templates**: Check the original application's documentation linked in each template's README
