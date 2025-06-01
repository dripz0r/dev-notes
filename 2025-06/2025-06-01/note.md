# 📅 Dev Log – 2025-06-01

📂 Location: `dev-notes/2025-06/2025-06-01/`

## ✅ Summary
- Created structured folder for June dev logs
- Fixed GitHub push error by switching to SSH and adding public key
- Added `.gitignore`, `README.md`, and `dev-log-template.md` to repo
- Reorganized and cleaned up `2025-05` logs for collapsible use in Notion
- Verified correct alias and `.zshrc` sourcing
- Renamed and cleaned up screenshot references for clarity

---

## 🐛 Issues Encountered

| Screenshot | Description | Fix |
|------------|-------------|-----|
| `github-push-error.png` | Git push failed with HTTP 400 | Switched to SSH, added key to GitHub, push successful |
| `notion-structure-collapsed.png` | Folder structure looked bad in Notion | Rewrote with markdown toggles and headings |
| `terminal-nextjs-success.png` | Placeholder Next.js page showed | Confirmed expected behavior, starter is working |

---

## 💡 Notes / Tags
`#git` `#ssh` `#markdown` `#zshrc` `#logging` `#notion` `#alias`  
- All screenshots renamed to descriptive, kebab-case format  
- Working `create-next-full` alias in `.zshrc`  
- All logs synced with Notion manually

---

## 💻 Useful Commands
```bash
# SSH key setup
ssh-keygen -t ed25519 -C "your-email@example.com"
ssh-add ~/.ssh/id_ed25519
git remote set-url origin git@github.com:your-user/dev-notes.git

# Folder setup
mkdir -p ~/stealth1/projects/dev-notes/2025-06/2025-06-01
mv ~/Desktop/Screenshot-2025-06-01-*.png ~/stealth1/projects/dev-notes/2025-06/2025-06-01/
