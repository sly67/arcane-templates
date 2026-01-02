#!/usr/bin/env node

/**
 * Portainer Registry Merger
 *
 * This script merges multiple Portainer registry JSON files into a single
 * unified registry, removing duplicates based on template names.
 *
 * Input:
 *   - portainer_registery.json (main registry)
 *   - portainer_registery extra 1.json
 *   - portainer_registery extra 2.json
 *   - portainer_registery extra 3.json
 *
 * Output:
 *   - portainer_registery_merged.json (deduplicated merged registry)
 *
 * Usage: node scripts/merge-registries.js
 */

const fs = require('fs');
const path = require('path');

// Input file paths
const INPUT_FILES = [
  'portainer_registery.json',
  'portainer_registery extra 1.json',
  'portainer_registery extra 2.json',
  'portainer_registery extra 3.json'
];

// Output file path
const OUTPUT_FILE = 'portainer_registery_merged.json';

console.log('Portainer Registry Merger');
console.log('='.repeat(60));

// Read all registry files
console.log('\nReading registry files...');
const registries = INPUT_FILES.map(file => {
  try {
    const data = JSON.parse(fs.readFileSync(file, 'utf8'));
    return data;
  } catch (error) {
    console.error(`Error reading ${file}:`, error.message);
    process.exit(1);
  }
});

// Display original counts
console.log('\nOriginal template counts:');
console.log(`  Main registry:        ${registries[0].templates.length} templates`);
console.log(`  Extra registry 1:     ${registries[1].templates.length} templates`);
console.log(`  Extra registry 2:     ${registries[2].length} templates (array format)`);
console.log(`  Extra registry 3:     ${registries[3].length} templates (array format)`);

// Combine all templates into a single array
// Note: extra2 and extra3 are plain arrays, while main and extra1 have .templates property
const allTemplates = [
  ...registries[0].templates,
  ...registries[1].templates,
  ...registries[2],  // Direct array
  ...registries[3]   // Direct array
];

const totalBeforeDedup = allTemplates.length;
console.log(`\nTotal templates before deduplication: ${totalBeforeDedup}`);

/**
 * Deduplicate templates by name (case-insensitive)
 * When duplicates are found, the first occurrence is kept
 */
console.log('\nDeduplicating templates...');
const seen = new Map();
const uniqueTemplates = [];
let duplicateCount = 0;

allTemplates.forEach((template) => {
  // Create a unique key from the template name (case-insensitive)
  const key = (template.name || template.title || 'unnamed').toLowerCase();

  if (!seen.has(key)) {
    // First occurrence - add it to the result
    seen.set(key, true);
    uniqueTemplates.push(template);
  } else {
    // Duplicate found - skip it
    duplicateCount++;
    console.log(`  ⚠️  Skipping duplicate: ${template.name || template.title}`);
  }
});

const totalAfterDedup = uniqueTemplates.length;
console.log(`\nTotal templates after deduplication: ${totalAfterDedup}`);
console.log(`Duplicates removed: ${duplicateCount}`);

// Create merged registry with proper structure
const mergedRegistry = {
  version: "3",
  templates: uniqueTemplates
};

// Save merged registry to file
console.log(`\nWriting merged registry to: ${OUTPUT_FILE}`);
fs.writeFileSync(
  OUTPUT_FILE,
  JSON.stringify(mergedRegistry, null, 2)
);

// Summary
console.log('\n' + '='.repeat(60));
console.log('MERGE COMPLETE');
console.log('='.repeat(60));
console.log(`Input files:          ${INPUT_FILES.length}`);
console.log(`Original templates:   ${totalBeforeDedup}`);
console.log(`Unique templates:     ${totalAfterDedup}`);
console.log(`Duplicates removed:   ${duplicateCount}`);
console.log(`Output file:          ${OUTPUT_FILE}`);
console.log('\nNext step: Replace portainer_registery.json with the merged file');
console.log(`  mv ${OUTPUT_FILE} portainer_registery.json`);
