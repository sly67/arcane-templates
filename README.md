![Arcane Banner](https://github.com/getarcaneapp/arcane/raw/main/.github/assets/img/PNG-3.png)

# Arcane Templates Registry

[![Open Source](https://img.shields.io/badge/Open%20Source-❤️-green.svg)](https://github.com/sly67/arcane-templates)
[![License](https://img.shields.io/badge/License-Mixed-blue.svg)](#license)
[![Templates](https://img.shields.io/badge/Templates-475-brightgreen.svg)](https://github.com/sly67/arcane-templates/tree/main/templates)
[![Maintained](https://img.shields.io/badge/Maintained-Yes-success.svg)](https://github.com/sly67/arcane-templates)

This repository contains 475 working Docker Compose templates converted from multiple Portainer template sources for use with [Arcane](https://getarcane.app/).

> **Note:** Out of 549 unique templates from merged sources, 475 are fully working with complete Docker Compose files. 6 templates with missing or inaccessible source files have been moved to `templates-incomplete/` for reference.

## Open Source

This project is **100% open source** and free to use. We believe in the power of community-driven development and transparency. All templates, conversion scripts, and registry data are available for anyone to use, modify, and distribute.

### Why Open Source?

- **Transparency**: All conversion logic and template data is publicly auditable
- **Community Contributions**: Anyone can submit improvements or new templates
- **No Vendor Lock-in**: Use and modify these templates however you need
- **Collaborative Improvement**: Learn from others and share your knowledge

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
├── templates/            # Individual template directories (475 templates)
│   ├── baserow/
│   │   ├── compose.yml
│   │   ├── .env.example
│   │   └── README.md
│   ├── jellyfin/
│   │   ├── compose.yml
│   │   ├── .env.example
│   │   └── README.md
│   └── ...
├── scripts/              # Conversion and enhancement scripts
│   ├── README.md         # Script documentation
│   ├── convert.js        # Portainer to Arcane converter
│   ├── merge-registries.js
│   ├── fix-incomplete.js
│   └── add-tags.js
└── LICENSE               # MIT License
```

## Contributing

If you find issues with any template or want to add new ones:

1. Fork this repository
2. Make your changes
3. Submit a pull request

## Conversion Notes

These templates were automatically converted from [Lissy93/portainer-templates](https://github.com/Lissy93/portainer-templates) Portainer format using automated scripts in the `scripts/` directory.

### Conversion Process
1. **merge-registries.js** - Merged 4 separate Portainer registries (819 templates → 549 unique)
2. **convert.js** - Converted Portainer format to Arcane format with compose.yml, .env.example, and README.md
3. **fix-incomplete.js** - Fetched 152 working compose files from GitHub repositories
4. **add-tags.js** - Enhanced templates with 639 additional tags using keyword analysis

### Result
- **475 working templates** with complete Docker Compose files
- **6 incomplete templates** (moved to `templates-incomplete/`)
- **Average 3.67 tags per template** for better discoverability

### Notes
Some manual adjustments may be needed for:
- Volume paths (currently set to `/opt/mediadepot/apps/` from the original templates)
- Network configurations
- Template-specific customizations

See `scripts/README.md` for detailed documentation on the conversion process.

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

**What this means:**
- ✅ Free to use, modify, and distribute
- ✅ Can be used commercially
- ✅ No warranty or liability
- ℹ️ Individual templates retain their original licenses

Please check each template's documentation for specific licensing information about the underlying applications.

## Credits

This project wouldn't be possible without the amazing work of the open source community:

### Primary Sources
- **[Lissy93/portainer-templates](https://github.com/Lissy93/portainer-templates)** - The primary source for template data. Huge thanks to [@Lissy93](https://github.com/Lissy93) for maintaining this comprehensive collection of Portainer templates.

### Technology
- **[Arcane](https://getarcane.app/)** - The modern Docker management platform these templates are designed for
- **[Arcane Templates Schema](https://registry.getarcane.app/schema.json)** - The schema specification used for the registry format
- **[Docker](https://www.docker.com/)** - Container platform that powers all these templates

### Conversion & Enhancement
- Automated conversion scripts developed for this project
- Tag enhancement using keyword analysis and categorization
- Template validation and quality assurance

### Community
- All the developers and maintainers of the 475+ applications included in this registry
- Contributors who submit issues and improvements
- The Docker and self-hosting community

### Special Thanks
- To everyone who uses and contributes to this registry
- To the open source community for making projects like this possible

## Support

For issues with:
- **Arcane itself**: Visit [Arcane Documentation](https://getarcane.app/docs)
- **This registry**: Open an issue in this repository
- **Individual templates**: Check the original application's documentation linked in each template's README
