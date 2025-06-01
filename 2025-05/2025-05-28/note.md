# Daily Log – 2025-05-28

- Summary: Worked on rendering `.mdx` markdown files as lesson content. Started connecting Obsidian notes to the lesson system via dynamic routes. Ran into several runtime and build errors.

- Issues:
  - ❌ Runtime error: `Cannot read properties of undefined (reading 'title')` → caused by missing frontmatter or data destructuring.
  - ❌ Build error: `Module not found: Can't resolve 'next-mdx-remote/serialize'` → forgot to install package with `npm install next-mdx-remote`.

- Commands:
  ```bash
  npm install next-mdx-remote gray-matter
  ```

- Wins:
  - 📦 Learned how to debug Next.js server/client code boundaries
  - 🔍 Understood where and how `.mdx` rendering fails when improperly configured
  - 💡 Began setting up the Obsidian edit flow and prepping lesson automation

#tags: #bug #mdx #dynamic-routing #obsidian #package-error
