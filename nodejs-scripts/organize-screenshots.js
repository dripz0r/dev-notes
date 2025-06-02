// organize-screenshots.js
// ✅ Moves PNG screenshots from ~/Desktop/dev-progress/screenshots into dev-notes/YYYY-MM/DD
// ✅ Renames based on time taken to: screenshot-HH-MM-SS-AMPM.png (cleaner format)
// ✅ Places each screenshot in the correct folder based on its original timestamp
// ✅ Run manually after screenshot dump or alias as a shortcut

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🟢 HOW TO USE:
// 1. Place all screenshots in: ~/Desktop/dev-progress/screenshots
// 2. Run this from anywhere:
//    node ~/projects/dev-notes/nodejs-scripts/organize-screenshots.js
// 3. It will:
//    - Auto-create the daily folder (based on each screenshot's timestamp)
//    - Rename based on the time photo was taken
//    - Move screenshots into the correct dated subfolder
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const fs = require('fs');
const path = require('path');
const os = require('os');

// 📂 Define source and destination paths
const SRC_DIR = path.join(os.homedir(), 'Desktop/dev-progress/screenshots');
const DEST_ROOT = path.join(os.homedir(), 'projects/dev-notes');

// 📸 Filter for PNG screenshots from the source folder
const files = fs.readdirSync(SRC_DIR).filter(f => f.startsWith('Screenshot') && f.endsWith('.png'));

files.forEach((file, index) => {
  const fullSrc = path.join(SRC_DIR, file);
  const stat = fs.statSync(fullSrc); // ⏱ Get creation or modified time of file
  const timestamp = new Date(stat.birthtime || stat.ctime);

  // 🧭 Use screenshot timestamp to build correct folder path
  const yyyy = timestamp.getFullYear();
  const mm = String(timestamp.getMonth() + 1).padStart(2, '0');
  const dd = String(timestamp.getDate()).padStart(2, '0');
  const destDir = path.join(DEST_ROOT, `${yyyy}-${mm}`, `${yyyy}-${mm}-${dd}`);

  // 📁 Ensure correct dated folder exists
  fs.mkdirSync(destDir, { recursive: true });

  // ⏰ Format time into readable string
  const isPM = timestamp.getHours() >= 12;
  const hour12 = timestamp.getHours() % 12 || 12;
  const ampm = isPM ? 'PM' : 'AM';
  const hh = String(hour12).padStart(2, '0');
  const min = String(timestamp.getMinutes()).padStart(2, '0');
  const sec = String(timestamp.getSeconds()).padStart(2, '0');

  // 🏷️ Final formatted file name (shortened version)
  const newName = `screenshot-${hh}-${min}-${sec}-${ampm}.png`;
  const fullDest = path.join(destDir, newName);

  // ✂️ Move and rename the screenshot file
  fs.renameSync(fullSrc, fullDest);
  console.log(`📸 Moved: ${file} → ${newName}`);
});

console.log(`✅ All screenshots processed and moved to their proper date folders.`);
