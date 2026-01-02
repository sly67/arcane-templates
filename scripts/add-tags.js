#!/usr/bin/env node

/**
 * Template Tag Enhancer
 *
 * This script enhances Arcane registry templates with comprehensive tags
 * by analyzing template names and descriptions for keywords and combining
 * them with Portainer categories.
 *
 * Input:
 *   - registry.json (Arcane registry)
 *   - portainer_registery.json (Portainer template data for categories)
 *
 * Output:
 *   - Updated registry.json with enhanced tags
 *
 * Features:
 *   - Keyword-based tag assignment (200+ keyword mappings)
 *   - Category import from Portainer templates
 *   - Tag normalization (lowercase, no special characters)
 *   - Automatic deduplication
 *
 * Usage: node scripts/add-tags.js
 */

const fs = require('fs');

// Read input files
const portainerData = JSON.parse(fs.readFileSync('portainer_registery.json', 'utf8'));
const arcaneRegistry = JSON.parse(fs.readFileSync('registry.json', 'utf8'));

/**
 * Creates a URL-safe slug from a template name
 * Used to match templates between Portainer and Arcane registries
 *
 * @param {string} name - Template name
 * @returns {string} URL-safe slug
 */
function createSlug(name) {
  if (!name) return 'unnamed-template';
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Normalizes a tag by converting to lowercase and removing special characters
 *
 * @param {string} tag - Tag to normalize
 * @returns {string} Normalized tag
 */
function normalizeTag(tag) {
  return tag.toLowerCase().replace(/[^a-z0-9]+/g, '');
}

// Create a lookup map of Portainer templates by slug
const portainerMap = new Map();
portainerData.templates.forEach(template => {
  const slug = createSlug(template.name || template.title);
  portainerMap.set(slug, template);
});

/**
 * Keyword to tag mappings
 *
 * This comprehensive mapping assigns relevant tags based on keywords
 * found in template names and descriptions.
 *
 * Categories covered:
 * - Media management (Plex, Jellyfin, *arr apps)
 * - Dashboards (Heimdall, Homer, Dashy, etc.)
 * - Cloud storage (Nextcloud, Seafile, Syncthing)
 * - Download clients (Torrent, Usenet)
 * - Docker management (Portainer, Dockge, Yacht)
 * - Networking (Proxies, VPN, DNS)
 * - Home automation (Home Assistant, Homebridge)
 * - Security (Password managers, authentication)
 * - Databases (PostgreSQL, MySQL, MongoDB, Redis)
 * - Development tools (Git, CI/CD, IDEs)
 * - Monitoring (Grafana, Prometheus, Uptime)
 * - Documentation (Wikis, CMS, blogs)
 * - Photos and media libraries
 * - Books and comics (eBooks, audiobooks)
 * - Gaming and game servers
 * - Backup solutions
 * - Automation and workflow
 * - Bookmarks and RSS readers
 * - Finance and budgeting
 * - Communication (Chat, email, messaging)
 * - Creative tools (Design, graphics, video, audio)
 * - AI and machine learning
 */
const keywordTags = {
  // Media Management
  'media': ['media', 'entertainment'],
  'plex': ['media', 'video', 'streaming'],
  'jellyfin': ['media', 'video', 'streaming'],
  'emby': ['media', 'video', 'streaming'],
  'sonarr': ['media', 'tv', 'automation', 'downloaders'],
  'radarr': ['media', 'movies', 'automation', 'downloaders'],
  'lidarr': ['media', 'music', 'automation', 'downloaders'],
  'prowlarr': ['media', 'indexer', 'automation'],
  'bazarr': ['media', 'subtitles', 'automation'],
  'overseerr': ['media', 'requests'],
  'jellyseerr': ['media', 'requests'],
  'tautulli': ['media', 'monitoring', 'analytics'],

  // Dashboards
  'heimdall': ['dashboard'],
  'homer': ['dashboard'],
  'homarr': ['dashboard'],
  'dashy': ['dashboard'],
  'flame': ['dashboard'],
  'organizr': ['dashboard'],

  // Cloud Storage & File Sync
  'nextcloud': ['cloud', 'files', 'productivity'],
  'owncloud': ['cloud', 'files'],
  'seafile': ['cloud', 'files'],
  'syncthing': ['sync', 'files'],

  // Download Clients - Torrent
  'transmission': ['torrent', 'downloaders'],
  'qbittorrent': ['torrent', 'downloaders'],
  'deluge': ['torrent', 'downloaders'],
  'rutorrent': ['torrent', 'downloaders'],

  // Download Clients - Usenet
  'sabnzbd': ['usenet', 'downloaders'],
  'nzbget': ['usenet', 'downloaders'],
  'nzbhydra': ['usenet', 'indexer'],

  // Docker Management
  'docker': ['docker', 'management'],
  'portainer': ['docker', 'management'],
  'dockge': ['docker', 'management'],
  'yacht': ['docker', 'management'],

  // Networking - Proxies
  'proxy': ['proxy', 'networking'],
  'nginx': ['proxy', 'webserver'],
  'traefik': ['proxy', 'networking'],
  'caddy': ['proxy', 'webserver'],

  // Networking - VPN
  'vpn': ['vpn', 'networking', 'security'],
  'wireguard': ['vpn', 'networking'],
  'openvpn': ['vpn', 'networking'],

  // Networking - DNS & Ad Blocking
  'pihole': ['dns', 'adblock', 'networking'],
  'adguard': ['dns', 'adblock', 'networking'],
  'unbound': ['dns', 'networking'],

  // Home Automation
  'home assistant': ['homeautomation', 'iot'],
  'homeassistant': ['homeautomation', 'iot'],
  'homebridge': ['homeautomation', 'iot'],

  // Security - Password Managers
  'vaultwarden': ['password', 'security'],
  'bitwarden': ['password', 'security'],
  'keepass': ['password', 'security'],

  // Security - Authentication
  'authelia': ['authentication', 'security'],
  'authentik': ['authentication', 'security'],
  'keycloak': ['authentication', 'security'],
  'fail2ban': ['security', 'firewall'],

  // Databases
  'database': ['database'],
  'postgres': ['database'],
  'mysql': ['database'],
  'mariadb': ['database'],
  'mongodb': ['database'],
  'redis': ['database', 'cache'],

  // Development - Version Control
  'gitlab': ['git', 'devops', 'development'],
  'gitea': ['git', 'development'],
  'github': ['git', 'development'],
  'gitqlient': ['git', 'development'],

  // Development - CI/CD
  'jenkins': ['ci-cd', 'devops'],
  'drone': ['ci-cd', 'devops'],

  // Development - IDEs
  'code-server': ['development', 'ide'],
  'vscode': ['development', 'ide'],
  'vscodium': ['development', 'ide'],
  'fleet': ['development', 'ide'],

  // Development - Other
  'jupyter': ['development', 'datascience'],
  'yaak': ['development', 'api'],
  'api': ['development', 'api'],
  'postman': ['development', 'api'],
  'pylon': ['development'],
  'testing': ['development', 'testing'],
  'tester': ['development', 'testing'],

  // Monitoring & Analytics
  'monitoring': ['monitoring'],
  'grafana': ['monitoring', 'analytics'],
  'prometheus': ['monitoring', 'metrics'],
  'uptime': ['monitoring', 'uptime'],
  'netdata': ['monitoring', 'metrics'],

  // Documentation & Knowledge
  'wiki': ['wiki', 'documentation'],
  'bookstack': ['wiki', 'documentation'],
  'outline': ['wiki', 'documentation'],
  'wikijs': ['wiki', 'documentation'],
  'raneto': ['wiki', 'documentation'],

  // CMS & Blogging
  'wordpress': ['cms', 'blog'],
  'ghost': ['cms', 'blog'],
  'joomla': ['cms'],
  'drupal': ['cms'],

  // Documents & OCR
  'paperless': ['documents', 'ocr'],
  'invoice': ['finance', 'invoicing'],
  'pdf': ['pdf', 'tools'],
  'stirling': ['pdf', 'tools'],

  // Photos & Galleries
  'photoprism': ['photos', 'gallery'],
  'immich': ['photos', 'gallery'],
  'piwigo': ['photos', 'gallery'],

  // Books & Reading
  'audiobookshelf': ['audiobooks', 'media'],
  'calibre': ['ebooks', 'books'],
  'komga': ['comics', 'books'],
  'kavita': ['comics', 'books', 'ebooks'],

  // Gaming
  'minecraft': ['gaming', 'gameserver'],
  'steam': ['gaming'],
  'terraria': ['gaming', 'gameserver'],

  // Backup
  'backup': ['backup'],
  'duplicati': ['backup'],
  'restic': ['backup'],

  // Automation & Workflow
  'n8n': ['automation', 'workflow'],
  'nodered': ['automation', 'workflow'],
  'activepieces': ['automation', 'workflow'],

  // Bookmarks & Reading Lists
  'bookmarks': ['bookmarks'],
  'linkwarden': ['bookmarks'],
  'linkding': ['bookmarks'],
  'wallabag': ['reading', 'bookmarks'],

  // RSS & News
  'freshrss': ['rss', 'news'],
  'miniflux': ['rss', 'news'],

  // Networking Tools
  'speedtest': ['networking', 'testing'],
  'librespeed': ['networking', 'testing'],

  // Search Engines
  'search': ['search'],
  'searxng': ['search', 'privacy'],
  'whoogle': ['search', 'privacy'],

  // Recipes & Cooking
  'mealie': ['recipes', 'cooking'],
  'tandoor': ['recipes', 'cooking'],

  // Household Management
  'grocy': ['inventory', 'household'],

  // Finance & Budgeting
  'firefly': ['finance', 'budgeting'],
  'actual': ['finance', 'budgeting'],
  'budget': ['finance', 'budgeting'],
  'budge': ['finance', 'budgeting'],

  // 3D Printing
  '3d': ['3dprinting'],
  'octoprint': ['3dprinting'],
  'klipper': ['3dprinting'],
  'bambustudio': ['3dprinting', 'design'],
  'cura': ['3dprinting', 'slicer'],

  // Communication - Chat
  'chat': ['chat', 'communication'],
  'mattermost': ['chat', 'communication'],
  'rocket': ['chat', 'communication'],
  'element': ['chat', 'communication'],
  'discord': ['chat', 'communication'],
  'webcord': ['chat', 'communication'],

  // Communication - Email
  'mail': ['email', 'communication'],
  'mailcow': ['email', 'communication'],
  'poste': ['email', 'communication'],

  // Communication - Messaging
  'altus': ['messaging', 'whatsapp'],
  'whatsapp': ['messaging', 'communication'],

  // Browsers
  'browser': ['browser', 'web'],
  'chromium': ['browser', 'web'],
  'firefox': ['browser', 'web'],
  'librewolf': ['browser', 'privacy'],
  'opera': ['browser', 'web'],
  'edge': ['browser', 'web'],

  // Design & Graphics
  'design': ['design', 'creative'],
  'gimp': ['design', 'graphics', 'photography'],
  'inkscape': ['design', 'graphics', 'vector'],
  'krita': ['design', 'graphics', 'painting'],
  'blender': ['design', '3dmodeling', 'graphics'],
  'freecad': ['design', '3dcad', 'engineering'],
  'kicad': ['design', 'electronics', 'pcb'],

  // Photography
  'darktable': ['photography', 'editing'],
  'rawtherapee': ['photography', 'editing'],

  // Video
  'video': ['video', 'media'],
  'kdenlive': ['video', 'editing'],
  'shotcut': ['video', 'editing'],
  'obs': ['video', 'streaming'],
  'youtube': ['media', 'video'],
  'freetube': ['media', 'video', 'youtube'],
  'tube': ['media', 'video'],

  // Audio & Music
  'audio': ['audio', 'music'],
  'ardour': ['audio', 'daw', 'production'],
  'audacity': ['audio', 'editing'],
  'music': ['music', 'audio'],
  'spotube': ['music', 'streaming'],
  'navidrome': ['music', 'streaming'],
  'piper': ['audio', 'tts'],
  'tts': ['audio', 'voice'],

  // Notes & Knowledge Management
  'obsidian': ['notes', 'knowledge'],
  'note': ['notes'],

  // Remote Access
  'remote': ['remote', 'access'],
  'remmina': ['remote', 'rdp'],
  'guacamole': ['remote', 'access'],

  // Project Management
  'planka': ['projectmanagement', 'kanban'],
  'trello': ['projectmanagement', 'kanban'],

  // Collaboration
  'whiteboard': ['collaboration', 'drawing'],
  'excalidraw': ['drawing', 'whiteboard'],

  // File Management & Sharing
  'file': ['files', 'filemanagement'],
  'pairdrop': ['filesharing', 'transfer'],
  'snapdrop': ['filesharing', 'transfer'],
  'pydio': ['cloud', 'files'],

  // Download Managers
  'download': ['downloaders'],
  'pyload': ['downloaders'],
  'aria2': ['downloaders'],
  'jdownloader': ['downloaders'],

  // AI & Machine Learning
  'whisper': ['ai', 'transcription'],
  'llm': ['ai', 'llm'],
  'ollama': ['ai', 'llm'],

  // Family & Tracking
  'baby': ['family', 'tracking'],
  'babybuddy': ['family', 'childcare'],

  // Media Requests
  'series': ['media', 'tv'],
  'doplarr': ['media', 'requests'],

  // Utilities
  'history': ['utilities', 'history']
};

console.log('Template Tag Enhancer');
console.log('='.repeat(60));
console.log(`Processing ${arcaneRegistry.templates.length} templates...\n`);

let enhancedCount = 0;
let totalTagsAdded = 0;

// Process each template in the Arcane registry
arcaneRegistry.templates.forEach(template => {
  const originalTags = [...(template.tags || [])];
  const newTags = new Set(originalTags.map(normalizeTag));

  // Get corresponding Portainer template for category data
  const portainerTemplate = portainerMap.get(template.id);

  // Add tags from Portainer categories
  if (portainerTemplate && portainerTemplate.categories) {
    portainerTemplate.categories.forEach(cat => {
      const normalized = normalizeTag(cat);
      if (normalized && !newTags.has(normalized)) {
        newTags.add(normalized);
      }
    });
  }

  // Add tags based on keywords found in name and description
  const searchText = `${template.name} ${template.description || ''}`.toLowerCase();

  Object.entries(keywordTags).forEach(([keyword, tags]) => {
    if (searchText.includes(keyword)) {
      tags.forEach(tag => {
        const normalized = normalizeTag(tag);
        if (!newTags.has(normalized)) {
          newTags.add(normalized);
        }
      });
    }
  });

  // Convert back to sorted array
  const finalTags = Array.from(newTags).sort();

  // Track statistics
  if (finalTags.length > originalTags.length) {
    const added = finalTags.length - originalTags.length;
    console.log(`${template.name}: Added ${added} tags (${originalTags.length} → ${finalTags.length})`);
    enhancedCount++;
    totalTagsAdded += added;
  }

  // Update template with enhanced tags
  template.tags = finalTags;
});

// Save updated registry
fs.writeFileSync('registry.json', JSON.stringify(arcaneRegistry, null, 2));

// Summary
console.log('\n' + '='.repeat(60));
console.log('TAG ENHANCEMENT COMPLETE');
console.log('='.repeat(60));
console.log(`Templates enhanced:       ${enhancedCount}`);
console.log(`Total tags added:         ${totalTagsAdded}`);
console.log(`Output file:              registry.json`);

// Calculate tag distribution statistics
const tagCounts = arcaneRegistry.templates.map(t => t.tags.length);
const avgTags = (tagCounts.reduce((a, b) => a + b, 0) / tagCounts.length).toFixed(2);
const zeroTags = tagCounts.filter(c => c === 0).length;
const oneTags = tagCounts.filter(c => c === 1).length;
const fourPlusTags = tagCounts.filter(c => c >= 4).length;

console.log('\nTag Distribution:');
console.log(`  Average tags per template: ${avgTags}`);
console.log(`  Templates with 0 tags:     ${zeroTags}`);
console.log(`  Templates with 1 tag:      ${oneTags}`);
console.log(`  Templates with 4+ tags:    ${fourPlusTags}`);
