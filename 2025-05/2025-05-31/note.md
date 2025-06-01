# Daily Log – 2025-05-31

- Summary: Hit a wave of technical bumps while refining the project setup and migrating markdown lessons into a new, TypeScript-based `mysite-login` branch. Focused on restoring Tailwind + PostCSS integration, fixing style imports, and customizing the lesson UI/markdown workflow. Also implemented dev journaling automation, `.zshrc` edits, and laid out long-term portfolio planning.

- Issues:
  - ❌ `Module not found: Can't resolve '@styles/globals.css'` — missing alias or file
  - ❌ `Error: you're trying to use 'tailwindcss' directly as a PostCSS plugin` — need to add `@tailwindcss/postcss` manually
  - ❌ Encountered multiple missing module errors from misconfigured imports
  - ⚠️ Set up `.zshrc` for aliases, but had to debug path/syntax

- Commands:
  ```bash
  npm install @tailwindcss/postcss postcss autoprefixer
  npm install --save-dev tailwindcss
  ```

- Wins:
  - 🛠 Cleaned up Tailwind/PostCSS integration for new branch
  - 🧠 Explored aliasing and customizing imports for better scalability
  - ✅ Resolved the build errors by correcting module paths
  - 🗂 Organized screenshots + dev logs with `/dev-notes/YYYY-MM/DD/`
  - 💾 Set up alias script in `.zshrc` and tested it
  - 📦 Re-established working local server for `mysite-login`
  - 🎯 Refined entire project vision, tying it into long-term dev portfolio

- Screenshots:
  - `Screenshot-2025-05-31-globals-css-error.png`
  - `Screenshot-2025-05-31-postcss-plugin-error.png`
  - `Screenshot-2025-05-31-terminal-zshrc.png`
  - `Screenshot-2025-05-31-tools-recommendation.png`

#tags: #tailwind #postcss #bugfix #build-error #portfolio #zshrc #typescript #alias #journaling #setup
