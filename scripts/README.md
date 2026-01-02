# Conversion Scripts

This directory contains the automation scripts used to convert Portainer templates to Arcane format and enhance the resulting registry.

## Scripts Overview

### 1. convert.js
**Purpose**: Converts Portainer template format to Arcane template format

**Input**:
- `portainer_registery.json` - Portainer v3 template format

**Output**:
- `templates/` - Directory structure with individual template folders
- `registry.json` - Arcane registry file

**What it does**:
- Reads Portainer template JSON
- Creates a folder for each template with:
  - `compose.yml` - Docker Compose configuration
  - `.env.example` - Environment variable examples with sensible defaults
  - `README.md` - Template documentation
- Generates Arcane registry.json with proper URLs
- Handles both container-based (type 1) and stack-based (type 3) templates
- Normalizes categories to tags

**Usage**:
```bash
node scripts/convert.js
```

---

### 2. merge-registries.js
**Purpose**: Merges multiple Portainer registry files into a single unified registry

**Input**:
- `portainer_registery.json` - Main registry
- `portainer_registery extra 1.json`
- `portainer_registery extra 2.json`
- `portainer_registery extra 3.json`

**Output**:
- `portainer_registery_merged.json` - Deduplicated merged registry

**What it does**:
- Reads all four Portainer registry files
- Combines templates into a single array
- Deduplicates by template name (case-insensitive)
- Keeps first occurrence when duplicates are found
- Provides detailed statistics on merge results

**Usage**:
```bash
node scripts/merge-registries.js
# Then replace the main registry:
mv portainer_registery_merged.json portainer_registery.json
```

---

### 3. fix-incomplete.js
**Purpose**: Fetches actual Docker Compose files from GitHub for stack-based templates

**Input**:
- `portainer_registery.json` - Portainer template data
- `templates/` - Generated template directories

**Output**:
- Updates `compose.yml` files with fetched content from GitHub
- Moves unfixable templates to `templates-incomplete/`
- Creates `incomplete-templates.json` with failure details

**What it does**:
- Identifies templates without Docker images (stack-based)
- Fetches actual compose files from GitHub repositories
- Tries both `master` and `main` branches
- Fast-fails on 404 errors with 3-second timeout
- Moves templates that can't be fixed to incomplete folder
- Generates detailed failure report

**Features**:
- GitHub rate limiting protection (50ms delay between requests)
- Smart branch detection (master/main)
- Comprehensive error handling

**Usage**:
```bash
node scripts/fix-incomplete.js
```

---

### 4. add-tags.js
**Purpose**: Enhances templates with comprehensive tags for better discoverability

**Input**:
- `registry.json` - Arcane registry
- `portainer_registery.json` - Portainer data for categories

**Output**:
- Updated `registry.json` with enhanced tags

**What it does**:
- Analyzes template names and descriptions for keywords
- Maps 200+ keywords to relevant tags
- Combines Portainer categories with keyword-based tags
- Normalizes all tags (lowercase, no special characters)
- Automatically deduplicates tags
- Provides tag distribution statistics

**Tag Categories Covered**:
- Media management (Plex, Jellyfin, *arr apps)
- Development tools (IDEs, Git, CI/CD, APIs)
- Networking (Proxies, VPN, DNS)
- Security (Password managers, authentication)
- Creative tools (Design, graphics, video, audio)
- Communication (Chat, email, messaging)
- Databases and caching
- Monitoring and analytics
- And 20+ more categories...

**Usage**:
```bash
node scripts/add-tags.js
```

---

## Typical Workflow

When converting a new set of Portainer templates, follow this sequence:

```bash
# Step 1: Merge multiple registries (if you have extras)
node scripts/merge-registries.js
mv portainer_registery_merged.json portainer_registery.json

# Step 2: Convert Portainer format to Arcane format
node scripts/convert.js

# Step 3: Fix incomplete templates by fetching from GitHub
node scripts/fix-incomplete.js

# Step 4: Enhance tags for better discoverability
node scripts/add-tags.js

# Step 5: Commit and push to GitHub
git add .
git commit -m "Update templates"
git push
```

## Requirements

- Node.js (any recent version)
- No external npm dependencies - uses only Node.js built-ins:
  - `fs` - File system operations
  - `path` - Path manipulation
  - `https` - GitHub API requests

## Script Configuration

### convert.js
Update these constants at the top of the file:
```javascript
const GITHUB_USERNAME = 'sly67';
const GITHUB_REPO = 'arcane-templates';
const INPUT_FILE = 'portainer_registery.json';
```

### fix-incomplete.js
Adjust timeouts if needed:
```javascript
const GITHUB_TIMEOUT = 3000; // 3 seconds
const REQUEST_DELAY = 50;    // 50ms between requests
```

## Output Statistics

Each script provides detailed statistics upon completion:

- **convert.js**: Number of templates converted
- **merge-registries.js**: Total templates, duplicates removed
- **fix-incomplete.js**: Fixed templates, moved to incomplete
- **add-tags.js**: Templates enhanced, tags added, distribution

## Troubleshooting

### fix-incomplete.js fails with timeouts
- Increase `GITHUB_TIMEOUT` to 5000 or higher
- Check your internet connection
- GitHub may be rate limiting - increase `REQUEST_DELAY`

### convert.js creates invalid compose files
- Check that `portainer_registery.json` is in v3 format
- Verify template has either `image` or `repository` field

### add-tags.js doesn't add many tags
- Verify template names/descriptions contain recognizable keywords
- Check that Portainer categories are present
- Consider adding more keyword mappings to `keywordTags`

## License

These scripts are open source and free to use, modify, and distribute.
