import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const readme = await readFile(new URL('../README.md', import.meta.url), 'utf8');

test('opens with production AI engineering positioning', () => {
  assert.match(readme, /AI systems.*prototype.*production/is);
  assert.match(readme, /agentic workflows/i);
  assert.match(readme, /RAG/);
  assert.match(readme, /evaluation/i);
});

test('highlights current products and public proof', () => {
  for (const name of ['Sourcebound', 'RemaindALL', 'StyleTrip.ai', 'AI Job Matcher', 'Job Autofill Agent']) {
    assert.match(readme, new RegExp(name.replace('.', '\\.'), 'i'));
  }
  assert.match(readme, /sudheerbatthina\/job_postings/);
  assert.match(readme, /sudheerbatthina\/JobAutofill_LLM-API/);
});

test('uses evidence instead of decorative profile widgets', () => {
  assert.match(readme, /163 passing automated tests/i);
  assert.match(readme, /88 automated tests/i);
  assert.match(readme, /72 automated tests/i);
  assert.doesNotMatch(readme, /github-readme-stats|streak-stats|activity-graph|shields\.io/i);
});

test('does not expose the phone number or link private source', () => {
  assert.doesNotMatch(readme, /716[-\s]305[-\s]8248/);
  assert.doesNotMatch(readme, /github\.com\/sudheerbatthina\/Sourcebound/i);
});

test('frames enterprise platform experience without implying direct employment', () => {
  for (const company of ['NVIDIA', 'Google Cloud', 'Adobe', 'Salesforce', 'Databricks', 'Microsoft', 'AWS']) {
    assert.match(readme, new RegExp(company, 'i'));
  }
  assert.match(readme, /enterprise technology ecosystems/i);
});
