// log-commit-to-devnotes.js (Full Version w/ File Tracking & Simulation Option)

const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

// === CONFIG ===
const DEV_NOTES_ROOT = '/Users/stealth1/projects/dev-notes';
const SIMULATE = false; // Set to true to test without actual git commit

// === DATE SETUP ===
const now = new Date();
const yyyy = now.getFullYear();
const mm = String(now.getMonth() + 1).padStart(2, '0');
const dd = String(now.getDate()).padStart(2, '0');
const hour = now.getHours();
const timestamp = now.toLocaleTimeString();

// === TIME BLOCKS ===
let timeBlock = '☀️ Morning';
if (hour >= 12 && hour < 17) timeBlock = '🌤 Afternoon';
else if (hour >= 17 || hour < 5) timeBlock = '🌙 Evening';

// === FOLDER STRUCTURE ===
const folderPath = path.join(DEV_NOTES_ROOT, `${yyyy}-${mm}`, `${yyyy}-${mm}-${dd}`);
const logPath = path.join(folderPath, 'log.md');

fs.mkdirSync(folderPath, { recursive: true });

// === GIT INFO ===
let commit = '';
let branch = '';
let changedFiles = [];

try {
  if (SIMULATE) {
    commit = 'abc123 - Simulated commit for testing (Stealth 1)';
    branch = 'test-branch';
    changedFiles = ['src/pages/index.tsx', 'styles/global.css'];
  } else {
    commit = execSync('git log -1 --pretty=format:"%h - %s (%an)"').toString().trim();
    branch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
    changedFiles = execSync('git diff --name-only HEAD~1 HEAD').toString().trim().split('\n');
  }
} catch (e) {
  console.error("❌ Failed to read Git info. Make sure you're in a Git repo.");
  process.exit(1);
}

// === FORMAT ENTRY ===
const fileList = changedFiles.length ? `\n**📝 Files Changed:**\n` + changedFiles.map(f => `- ${f}`).join('\n') + '\n' : '';
const entry = `- ${timestamp} [${branch}] → ${commit}${fileList}\n`;

let logContent = '';
if (!fs.existsSync(logPath)) {
  logContent = `## ${timeBlock}\n\n${entry}`;
} else {
  const existing = fs.readFileSync(logPath, 'utf-8');
  if (existing.includes(`## ${timeBlock}`)) {
    logContent = existing.replace(`## ${timeBlock}`, `## ${timeBlock}\n\n${entry}`);
  } else {
    logContent = `${existing}\n\n## ${timeBlock}\n\n${entry}`;
  }
}

fs.writeFileSync(logPath, logContent);
console.log(`✅ Commit logged under ${timeBlock} in: ${logPath}`);
