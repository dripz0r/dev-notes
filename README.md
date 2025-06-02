# 🧠 Dev Notes

This repository contains development notes, logs, and screenshots related to multiple projects including:

- **[german-lernreise](https://github.com/dripz0r/german-lernreise)**
- **[mysite-login](https://github.com/dripz0r/mysite-login)**

---

## 📁 Folder Structure

Each folder under `dev-notes/YYYY-MM/DD/` may contain:
- Screenshots
- `log.md` with timestamped Git commit entries
- `note.md` for detailed developer notes
- `summary.md` for daily digests (optional)

---

## 🧠 Scripts

### 🧾 log-commit-to-devnotes.js
Logs the latest Git commit into `dev-notes/YYYY-MM/DD/log.md`, grouped by time of day.
Includes:
- Timestamp
- Git commit hash
- Commit message
- Branch name
- Files changed

**Usage:**
```bash
node nodejs-scripts/log-commit-to-devnotes.js
```
Or hook it to Git:
```bash
# Inside .git/hooks/post-commit
node ~/projects/dev-notes/nodejs-scripts/log-commit-to-devnotes.js
```

---

### 🖼 organize-screenshots.js
Sorts screenshots from `~/Desktop/dev-progress/screenshots` into the correct day folder in `dev-notes/`, based on creation timestamp.
Automatically renames files as:
```
screenshot-HH-MM-SS-AMPM.png
```

**Usage:**
```bash
node nodejs-scripts/organize-screenshots.js
```
Or use the alias if set:
```bash
ssort
```

---

## 📓 Dev Log Format

Each folder corresponds to a day (`YYYY-MM-DD`) and may contain:
- Screenshots
- `.md` logs
- Notes on bugs, fixes, and progress
- Ideas and to-dos

---

## 💻 Useful Commands
```bash
# Add and commit a daily log
git add .
git commit -m "Added dev logs for 2025-06-01"
git push

# Rename branch (if still on master)
git branch -m main
git push -u origin main
```

---

## 📅 Future Plans
- Add `summary.md` generator
- Optionally sync with Notion or GitHub Issues
- Weekly rollups
- GitHub Action version of `log-commit`
