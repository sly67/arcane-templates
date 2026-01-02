#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Read the Portainer template
const portainerData = JSON.parse(fs.readFileSync('portainer_registery.json', 'utf8'));

// Create templates directory
const templatesDir = path.join(__dirname, 'templates');
if (!fs.existsSync(templatesDir)) {
  fs.mkdirSync(templatesDir, { recursive: true });
}

// Initialize Arcane registry
const arcaneRegistry = {
  "$schema": "https://registry.getarcane.app/schema.json",
  "name": "Arcane Templates from Portainer",
  "description": "Docker Compose Templates converted from Portainer templates",
  "author": "Converted",
  "url": "https://github.com/yourusername/arcane-templates",
  "version": "1.0.0",
  "templates": []
};

// Helper function to create a slug from name
function createSlug(name) {
  if (!name) return 'unnamed-template';
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Helper function to convert Portainer volumes to Docker Compose format
function convertVolumes(volumes) {
  if (!volumes || volumes.length === 0) return [];
  return volumes.map(vol => `${vol.bind}:${vol.container}`);
}

// Helper function to convert Portainer env to Docker Compose format
function convertEnv(envVars) {
  if (!envVars || envVars.length === 0) return {};
  const env = {};
  envVars.forEach(e => {
    if (e.default) {
      env[e.name] = e.default;
    } else {
      env[e.name] = `\${${e.name}}`;
    }
  });
  return env;
}

// Helper function to convert Portainer labels to Docker Compose format
function convertLabels(labels) {
  if (!labels || labels.length === 0) return {};
  const labelObj = {};
  labels.forEach(label => {
    labelObj[label.name] = label.value;
  });
  return labelObj;
}

// Helper function to convert Portainer ports to Docker Compose format
function convertPorts(ports) {
  if (!ports || ports.length === 0) return [];
  return ports.map(port => port);
}

// Helper function to generate docker-compose.yml content as YAML string
function generateDockerCompose(template) {
  const serviceName = template.name || 'app';
  let yaml = '';

  // Handle stack-based templates (type 3) differently
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

  yaml = `version: '3.8'\n\nservices:\n  ${serviceName}:\n`;
  yaml += `    image: ${template.image || 'IMAGE_NOT_SPECIFIED'}\n`;
  yaml += `    container_name: ${serviceName}\n`;
  yaml += `    restart: unless-stopped\n`;

  // Add ports
  const ports = convertPorts(template.ports);
  if (ports.length > 0) {
    yaml += `    ports:\n`;
    ports.forEach(port => {
      yaml += `      - "${port}"\n`;
    });
  }

  // Add volumes
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
      // Escape values that contain special characters
      const escapedValue = value.toString().includes(':') || value.toString().includes('#')
        ? `"${value}"`
        : value;
      yaml += `      ${key}: ${escapedValue}\n`;
    });
  }

  // Add labels
  const labels = convertLabels(template.labels);
  if (Object.keys(labels).length > 0) {
    yaml += `    labels:\n`;
    Object.entries(labels).forEach(([key, value]) => {
      yaml += `      ${key}: "${value}"\n`;
    });
  }

  return yaml;
}

// Helper function to generate .env.example content
function generateEnvExample(template) {
  if (!template.env || template.env.length === 0) return '';

  let envContent = '# Environment variables for ' + (template.title || template.name) + '\n\n';

  template.env.forEach(e => {
    if (e.label && e.label !== e.name) {
      envContent += `# ${e.label}\n`;
    }
    if (e.description) {
      envContent += `# ${e.description}\n`;
    }
    // Provide sensible defaults for common variables
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

// Helper function to generate README.md content
function generateReadme(template) {
  let readme = `# ${template.title || template.name}\n\n`;
  readme += `${template.description}\n\n`;

  if (template.logo) {
    readme += `![Logo](${template.logo})\n\n`;
  }

  // Add Docker Image or Repository info based on template type
  if (template.image) {
    readme += `## Docker Image\n\n`;
    readme += `\`${template.image}\`\n\n`;
  } else if (template.repository) {
    readme += `## Source Repository\n\n`;
    readme += `- Repository: ${template.repository.url}\n`;
    if (template.repository.stackfile) {
      readme += `- Stack File: ${template.repository.stackfile}\n`;
    }
    readme += `\n`;
  }

  if (template.categories && template.categories.length > 0) {
    readme += `## Categories\n\n`;
    template.categories.forEach(cat => {
      readme += `- ${cat}\n`;
    });
    readme += `\n`;
  }

  if (template.ports && template.ports.length > 0) {
    readme += `## Ports\n\n`;
    template.ports.forEach(port => {
      readme += `- ${port}\n`;
    });
    readme += `\n`;
  }

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

  if (template.volumes && template.volumes.length > 0) {
    readme += `## Volumes\n\n`;
    template.volumes.forEach(vol => {
      readme += `- \`${vol.bind}\` → \`${vol.container}\`\n`;
    });
    readme += `\n`;
  }

  if (template.maintainer) {
    readme += `## Maintainer\n\n`;
    readme += `${template.maintainer}\n\n`;
  }

  return readme;
}

// Convert each template
console.log(`Converting ${portainerData.templates.length} templates...`);

portainerData.templates.forEach((template, index) => {
  const templateId = createSlug(template.name);
  const templateDir = path.join(templatesDir, templateId);

  // Create template directory
  if (!fs.existsSync(templateDir)) {
    fs.mkdirSync(templateDir, { recursive: true });
  }

  // Generate docker-compose.yml
  const composeContent = generateDockerCompose(template);
  fs.writeFileSync(
    path.join(templateDir, 'compose.yml'),
    composeContent
  );

  // Generate .env.example
  const envContent = generateEnvExample(template);
  fs.writeFileSync(
    path.join(templateDir, '.env.example'),
    envContent
  );

  // Generate README.md
  const readmeContent = generateReadme(template);
  fs.writeFileSync(
    path.join(templateDir, 'README.md'),
    readmeContent
  );

  // Add to Arcane registry
  const tags = (template.categories || ['other']).map(cat =>
    cat.toLowerCase().replace(/[^a-z0-9]+/g, '-')
  );

  arcaneRegistry.templates.push({
    id: templateId,
    name: template.title || template.name,
    description: template.description || '',
    version: '1.0.0',
    author: 'Converted from Portainer',
    compose_url: `https://raw.githubusercontent.com/yourusername/arcane-templates/main/templates/${templateId}/compose.yml`,
    env_url: `https://raw.githubusercontent.com/yourusername/arcane-templates/main/templates/${templateId}/.env.example`,
    documentation_url: `https://github.com/yourusername/arcane-templates/tree/main/templates/${templateId}`,
    tags: tags
  });

  if ((index + 1) % 50 === 0) {
    console.log(`Processed ${index + 1} templates...`);
  }
});

// Write the Arcane registry
fs.writeFileSync(
  'registry.json',
  JSON.stringify(arcaneRegistry, null, 2)
);

console.log(`\nConversion complete!`);
console.log(`- Converted ${arcaneRegistry.templates.length} templates`);
console.log(`- Created templates in: ${templatesDir}`);
console.log(`- Generated registry.json`);
console.log(`\nNext steps:`);
console.log(`1. Review the generated files`);
console.log(`2. Update the URLs in registry.json with your actual GitHub repository URL`);
console.log(`3. Initialize git: git init`);
console.log(`4. Add files: git add .`);
console.log(`5. Commit: git commit -m "Initial commit of converted templates"`);
console.log(`6. Push to your GitHub repository`);
