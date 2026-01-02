#!/usr/bin/env node

/**
 * Incomplete Template Fixer
 *
 * This script identifies templates without Docker images (stack-based templates)
 * and attempts to fetch their actual Docker Compose files from GitHub repositories.
 * Templates that cannot be fixed are moved to templates-incomplete/ folder.
 *
 * Input:
 *   - portainer_registery.json (Portainer template data)
 *   - templates/ directory (generated templates)
 *
 * Output:
 *   - Updates compose.yml files with fetched content
 *   - Moves unfixable templates to templates-incomplete/
 *   - Creates incomplete-templates.json with failure details
 *
 * Usage: node scripts/fix-incomplete.js
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

// Configuration
const GITHUB_TIMEOUT = 3000; // 3 seconds timeout for GitHub requests
const REQUEST_DELAY = 50;    // 50ms delay between requests to avoid rate limiting

// Read the Portainer template data
const portainerData = JSON.parse(fs.readFileSync('portainer_registery.json', 'utf8'));

// Ensure directories exist
const incompleteDir = path.join(__dirname, '..', 'templates-incomplete');
if (!fs.existsSync(incompleteDir)) {
  fs.mkdirSync(incompleteDir, { recursive: true });
}

const templatesDir = path.join(__dirname, '..', 'templates');

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
 * Fetches a file from a GitHub repository with timeout and branch fallback
 *
 * @param {string} repoUrl - GitHub repository URL
 * @param {string} filePath - Path to the file within the repository
 * @returns {Promise<string>} File content
 *
 * Features:
 * - Converts repository URL to raw.githubusercontent.com format
 * - Tries both 'master' and 'main' branches
 * - Fast-fail on 404 errors
 * - 3-second timeout to prevent hanging
 */
function fetchGitHubFile(repoUrl, filePath) {
  return new Promise((resolve, reject) => {
    // Validate inputs
    if (!repoUrl || !filePath) {
      return reject(new Error('Missing repo URL or file path'));
    }

    // Extract owner and repo name from GitHub URL
    const match = repoUrl.match(/github\.com\/([^\/]+)\/([^\/]+)/);
    if (!match) {
      return reject(new Error('Invalid GitHub URL'));
    }

    const [, owner, repo] = match;
    const cleanRepo = repo.replace(/\.git$/, '');

    // Try both master and main branches (common default branch names)
    const branches = ['master', 'main'];
    let attemptCount = 0;

    /**
     * Recursively try different branches until file is found or all attempts fail
     * @param {number} branchIndex - Current branch index to try
     */
    function tryBranch(branchIndex) {
      if (branchIndex >= branches.length) {
        return reject(new Error('HTTP 404'));
      }

      const branch = branches[branchIndex];
      const rawUrl = `https://raw.githubusercontent.com/${owner}/${cleanRepo}/${branch}/${filePath}`;

      // Only log the first attempt to reduce console noise
      if (attemptCount === 0) {
        console.log(`  Fetching: ${rawUrl}`);
      }
      attemptCount++;

      const req = https.get(rawUrl, { timeout: GITHUB_TIMEOUT }, (res) => {
        // Fast-fail on 404 - immediately try next branch
        if (res.statusCode === 404) {
          return tryBranch(branchIndex + 1);
        }

        // Handle other HTTP errors
        if (res.statusCode !== 200) {
          return reject(new Error(`HTTP ${res.statusCode}`));
        }

        // Success - collect response data
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => resolve(data));
      });

      // Handle network errors
      req.on('error', (err) => {
        if (err.code === 'ETIMEDOUT') {
          return reject(new Error('Timeout'));
        }
        reject(err);
      });

      // Handle timeout
      req.on('timeout', () => {
        req.destroy();
        reject(new Error('Timeout'));
      });
    }

    // Start trying branches
    tryBranch(0);
  });
}

/**
 * Main process to fix incomplete templates
 */
async function processIncompleteTemplates() {
  // Find templates without Docker images (stack-based templates)
  const incompleteTemplates = portainerData.templates.filter(
    t => !t.image || t.image === ''
  );

  console.log('Incomplete Template Fixer');
  console.log('='.repeat(60));
  console.log(`Found ${incompleteTemplates.length} incomplete templates (no Docker image)\n`);

  // Statistics tracking
  const stats = {
    fixed: 0,
    moved: 0,
    failed: []
  };

  // Process each incomplete template
  for (const template of incompleteTemplates) {
    const templateId = createSlug(template.name);
    const templateDir = path.join(templatesDir, templateId);

    console.log(`Processing: ${template.name} (${templateId})`);

    // Check if template has repository information
    if (!template.repository || !template.repository.stackfile) {
      console.log(`  ⚠️  No repository info - moving to incomplete`);
      if (fs.existsSync(templateDir)) {
        const destDir = path.join(incompleteDir, templateId);
        fs.renameSync(templateDir, destDir);
      }
      stats.moved++;
      stats.failed.push({ name: template.name, reason: 'No repository info' });
      continue;
    }

    try {
      // Attempt to fetch the Docker Compose file from GitHub
      const composeContent = await fetchGitHubFile(
        template.repository.url,
        template.repository.stackfile
      );

      // Save the fetched compose file
      if (fs.existsSync(templateDir)) {
        fs.writeFileSync(
          path.join(templateDir, 'compose.yml'),
          composeContent
        );
        console.log(`  ✓ Fixed - fetched compose file`);
        stats.fixed++;
      } else {
        console.log(`  ⚠️  Template directory doesn't exist`);
        stats.moved++;
      }

      // Small delay to avoid GitHub rate limiting
      await new Promise(resolve => setTimeout(resolve, REQUEST_DELAY));

    } catch (error) {
      console.log(`  ✗ Failed to fetch: ${error.message}`);

      // Move failed template to incomplete folder
      if (fs.existsSync(templateDir)) {
        const destDir = path.join(incompleteDir, templateId);
        fs.renameSync(templateDir, destDir);
        console.log(`  → Moved to incomplete folder`);
      }

      stats.moved++;
      stats.failed.push({
        name: template.name,
        reason: error.message,
        repo: template.repository.url,
        stackfile: template.repository.stackfile
      });
    }
  }

  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('SUMMARY');
  console.log('='.repeat(60));
  console.log(`Templates processed:      ${incompleteTemplates.length}`);
  console.log(`Successfully fixed:       ${stats.fixed}`);
  console.log(`Moved to incomplete:      ${stats.moved}`);

  console.log(`\nFailed templates:`);
  if (stats.failed.length === 0) {
    console.log('  None');
  } else {
    stats.failed.forEach(f => {
      console.log(`  - ${f.name}: ${f.reason}`);
    });
  }

  // Write detailed failure information to file
  fs.writeFileSync(
    'incomplete-templates.json',
    JSON.stringify(stats.failed, null, 2)
  );
  console.log(`\nDetailed failure info saved to: incomplete-templates.json`);
}

// Run the process
processIncompleteTemplates().catch(console.error);
