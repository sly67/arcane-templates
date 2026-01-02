#!/usr/bin/env node

/**
 * Portainer to Arcane Template Converter
 *
 * This script converts Portainer template format to Arcane template format.
 * It creates a complete directory structure with compose.yml, .env.example,
 * and README.md for each template.
 *
 * Input: portainer_registery.json (Portainer v3 template format)
 * Output:
 *   - templates/ directory with individual template folders
 *   - registry.json (Arcane registry format)
 *
 * Usage: node scripts/convert.js
 */

const fs = require('fs');
const path = require('path');

// Configuration
const GITHUB_USERNAME = 'sly67';
const GITHUB_REPO = 'arcane-templates';
const INPUT_FILE = 'portainer_registery.json';

// Read the Portainer template data
console.log('Reading Portainer template data...');
const portainerData = JSON.parse(fs.readFileSync(INPUT_FILE, 'utf8'));

// Create templates directory if it doesn't exist
const templatesDir = path.join(__dirname, '..', 'templates');
if (!fs.existsSync(templatesDir)) {
  fs.mkdirSync(templatesDir, { recursive: true });
}

// Initialize Arcane registry structure
const arcaneRegistry = {
  "$schema": "https://registry.getarcane.app/schema.json",
  "name": "Arcane Templates from Portainer",
  "description": "Docker Compose Templates converted from Portainer templates",
  "author": "Converted",
  "url": `https://github.com/${GITHUB_USERNAME}/${GITHUB_REPO}`,
  "version": "2.0.0",
  "templates": []
};

/**
 * Creates a URL-safe slug from a template name
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
 * Converts Portainer volume format to Docker Compose format
 * @param {Array} volumes - Portainer volumes array
 * @returns {Array} Docker Compose volume strings
 */
function convertVolumes(volumes) {
  if (!volumes || volumes.length === 0) return [];
  return volumes.map(vol => `${vol.bind}:${vol.container}`);
}

/**
 * Converts Portainer environment variables to Docker Compose format
 * @param {Array} envVars - Portainer environment variables
 * @returns {Object} Environment variable object
 */
function convertEnv(envVars) {
  if (!envVars || envVars.length === 0) return {};
  const env = {};
  envVars.forEach(e => {
    if (e.default) {
      env[e.name] = e.default;
    } else {
      // Use variable substitution for values without defaults
      env[e.name] = `\${${e.name}}`;
    }
  });
  return env;
}

/**
 * Converts Portainer labels to Docker Compose format
 * @param {Array} labels - Portainer labels array
 * @returns {Object} Labels object
 */
function convertLabels(labels) {
  if (!labels || labels.length === 0) return {};
  const labelObj = {};
  labels.forEach(label => {
    labelObj[label.name] = label.value;
  });
  return labelObj;
}

/**
 * Converts Portainer ports to Docker Compose format
 * @param {Array} ports - Portainer ports array
 * @returns {Array} Port strings
 */
function convertPorts(ports) {
  if (!ports || ports.length === 0) return [];
  return ports.map(port => port);
}

/**
 * Generates Docker Compose YAML content
 * @param {Object} template - Portainer template object
 * @returns {string} YAML content as string
 */
function generateDockerCompose(template) {
  const serviceName = template.name || 'app';
  let yaml = '';

  // Handle stack-based templates (type 3) that don't have an image
  // These reference external compose files in repositories
  if (!template.image && template.repository) {
    yaml += `# This template is based on an external compose file\n`;
    yaml += `# Repository: ${template.repository.url}\n`;
    if (template.repository.stackfile) {
      yaml += `# Stack file: ${template.repository.stackfile}\n`;
    }
    yaml += `#\n`;
    yaml += `# Please refer to the repository for the complete docker-compose configuration\n`;
    yaml += `# Or manually create your compose configuration below\n\n`;
    yaml += `version: '3.8'\n\n`;
    yaml += `services:\n`;
    yaml += `  ${serviceName}:\n`;
    yaml += `    # Configure your service here\n`;
    yaml += `    # image: your-image:tag\n`;
    return yaml;
  }

  // Generate standard Docker Compose configuration
  yaml = `version: '3.8'\n\nservices:\n  ${serviceName}:\n`;
  yaml += `    image: ${template.image || 'IMAGE_NOT_SPECIFIED'}\n`;
  yaml += `    container_name: ${serviceName}\n`;
  yaml += `    restart: unless-stopped\n`;

  // Add port mappings
  const ports = convertPorts(template.ports);
  if (ports.length > 0) {
    yaml += `    ports:\n`;
    ports.forEach(port => {
      yaml += `      - "${port}"\n`;
    });
  }

  // Add volume mounts
  const volumes = convertVolumes(template.volumes);
  if (volumes.length > 0) {
    yaml += `    volumes:\n`;
    volumes.forEach(vol => {
      yaml += `      - ${vol}\n`;
    });
  }

  // Add environment variables
  const env = convertEnv(template.env);
  if (Object.keys(env).length > 0) {
    yaml += `    environment:\n`;
    Object.entries(env).forEach(([key, value]) => {
      // Escape values that contain special YAML characters
      const escapedValue = value.toString().includes(':') || value.toString().includes('#')
        ? `"${value}"`
        : value;
      yaml += `      ${key}: ${escapedValue}\n`;
    });
  }

  // Add Docker labels
  const labels = convertLabels(template.labels);
  if (Object.keys(labels).length > 0) {
    yaml += `    labels:\n`;
    Object.entries(labels).forEach(([key, value]) => {
      yaml += `      ${key}: "${value}"\n`;
    });
  }

  return yaml;
}

/**
 * Generates .env.example file content with sensible defaults
 * @param {Object} template - Portainer template object
 * @returns {string} Environment file content
 */
function generateEnvExample(template) {
  if (!template.env || template.env.length === 0) return '';

  let envContent = '# Environment variables for ' + (template.title || template.name) + '\n\n';

  template.env.forEach(e => {
    // Add label as comment if different from variable name
    if (e.label && e.label !== e.name) {
      envContent += `# ${e.label}\n`;
    }
    // Add description as comment
    if (e.description) {
      envContent += `# ${e.description}\n`;
    }

    // Provide sensible defaults for common environment variables
    let defaultValue = e.default || '';
    if (!defaultValue) {
      if (e.name === 'TZ') defaultValue = 'UTC';
      else if (e.name === 'PUID') defaultValue = '1000';
      else if (e.name === 'PGID') defaultValue = '1000';
      else if (e.name.includes('PASSWORD') || e.name.includes('SECRET')) {
        defaultValue = 'changeme';
      } else if (e.name.includes('URL') || e.name.includes('HOST')) {
        defaultValue = 'http://localhost';
      }
    }
    envContent += `${e.name}=${defaultValue}\n\n`;
  });

  return envContent;
}

/**
 * Generates README.md documentation for a template
 * @param {Object} template - Portainer template object
 * @returns {string} Markdown content
 */
function generateReadme(template) {
  let readme = `# ${template.title || template.name}\n\n`;
  readme += `${template.description}\n\n`;

  // Add logo if available
  if (template.logo) {
    readme += `![Logo](${template.logo})\n\n`;
  }

  // Add Docker Image info for container-based templates
  if (template.image) {
    readme += `## Docker Image\n\n`;
    readme += `\`${template.image}\`\n\n`;
  }
  // Add repository info for stack-based templates
  else if (template.repository) {
    readme += `## Source Repository\n\n`;
    readme += `- Repository: ${template.repository.url}\n`;
    if (template.repository.stackfile) {
      readme += `- Stack File: ${template.repository.stackfile}\n`;
    }
    readme += `\n`;
  }

  // Add categories
  if (template.categories && template.categories.length > 0) {
    readme += `## Categories\n\n`;
    template.categories.forEach(cat => {
      readme += `- ${cat}\n`;
    });
    readme += `\n`;
  }

  // Add exposed ports
  if (template.ports && template.ports.length > 0) {
    readme += `## Ports\n\n`;
    template.ports.forEach(port => {
      readme += `- ${port}\n`;
    });
    readme += `\n`;
  }

  // Add environment variables documentation
  if (template.env && template.env.length > 0) {
    readme += `## Environment Variables\n\n`;
    template.env.forEach(e => {
      readme += `- \`${e.name}\``;
      if (e.label) readme += ` - ${e.label}`;
      if (e.default) readme += ` (default: \`${e.default}\`)`;
      readme += `\n`;
    });
    readme += `\n`;
  }

  // Add volume mounts documentation
  if (template.volumes && template.volumes.length > 0) {
    readme += `## Volumes\n\n`;
    template.volumes.forEach(vol => {
      readme += `- \`${vol.bind}\` → \`${vol.container}\`\n`;
    });
    readme += `\n`;
  }

  // Add maintainer info
  if (template.maintainer) {
    readme += `## Maintainer\n\n`;
    readme += `${template.maintainer}\n\n`;
  }

  return readme;
}

// Main conversion process
console.log(`Converting ${portainerData.templates.length} templates...\n`);

portainerData.templates.forEach((template, index) => {
  const templateId = createSlug(template.name);
  const templateDir = path.join(templatesDir, templateId);

  // Create template directory
  if (!fs.existsSync(templateDir)) {
    fs.mkdirSync(templateDir, { recursive: true });
  }

  // Generate and write docker-compose.yml
  const composeContent = generateDockerCompose(template);
  fs.writeFileSync(
    path.join(templateDir, 'compose.yml'),
    composeContent
  );

  // Generate and write .env.example
  const envContent = generateEnvExample(template);
  fs.writeFileSync(
    path.join(templateDir, '.env.example'),
    envContent
  );

  // Generate and write README.md
  const readmeContent = generateReadme(template);
  fs.writeFileSync(
    path.join(templateDir, 'README.md'),
    readmeContent
  );

  // Add template to Arcane registry
  // Convert categories to normalized tags
  const tags = (template.categories || ['other']).map(cat =>
    cat.toLowerCase().replace(/[^a-z0-9]+/g, '')
  );

  arcaneRegistry.templates.push({
    id: templateId,
    name: template.title || template.name,
    description: template.description || '',
    version: '1.0.0',
    author: 'Converted from Portainer',
    compose_url: `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${GITHUB_REPO}/main/templates/${templateId}/compose.yml`,
    env_url: `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${GITHUB_REPO}/main/templates/${templateId}/.env.example`,
    documentation_url: `https://github.com/${GITHUB_USERNAME}/${GITHUB_REPO}/tree/main/templates/${templateId}`,
    tags: tags
  });

  // Progress indicator
  if ((index + 1) % 50 === 0) {
    console.log(`Processed ${index + 1} templates...`);
  }
});

// Write the Arcane registry JSON
fs.writeFileSync(
  path.join(__dirname, '..', 'registry.json'),
  JSON.stringify(arcaneRegistry, null, 2)
);

// Summary
console.log(`\n${'='.repeat(60)}`);
console.log('CONVERSION COMPLETE');
console.log('='.repeat(60));
console.log(`Templates converted: ${arcaneRegistry.templates.length}`);
console.log(`Templates directory: ${templatesDir}`);
console.log(`Registry file: registry.json`);
console.log('\nNext steps:');
console.log('1. Review the generated files');
console.log('2. Run fix-incomplete.js to fetch missing compose files');
console.log('3. Run add-tags.js to enhance template tags');
console.log('4. Commit and push to GitHub');
