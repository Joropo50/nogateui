# NoGateUI

Beginner-friendly React UI components. Open to everyone. No gatekeeping.

NoGateUI is an open-source React UI ecosystem built to make contributing to open source **approachable, practical, and welcoming**, especially for people who are new to open source or unsure where to start.

This repository is a **monorepo** that contains multiple independently published UI packages under the `@nogateui` npm scope.

---

## 📦 Packages

Each component lives in its own package, with its own README, versioning, and npm release.

### Available packages

- **Skeleton Loader**  
  Modern, animated skeleton loaders inspired by real production apps.

  - npm: `@nogateui/skeleton`
  - Full Installation Docs: [`packages/skeleton/README.md`](./packages/skeleton/README.md)

- **Button**  
  Clean, accessible button component with practical variants.
  - npm: `@nogateui/button`
  - Full Installation Docs: [`packages/button/README.md`](./packages/button/README.md)

More components will be added over time. Anyone can propose and build new ones.

---

## 🚀 Installation (for users)

Install only what you need. Each package is published independently.

```bash
npm install @nogateui/skeleton
npm install @nogateui/button
```

---

## 🧭 Repository structure

```
nogateui/
  packages/
    skeleton/
    button/
```

- Each folder inside `packages/` is a standalone npm package
- The root repo orchestrates builds and tooling
- Packages share a common setup but publish independently

---

## 🤝 Contributing

Contributing to open source shouldn’t feel intimidating. This project is designed to make contribution easy, safe, and collaborative.

We operate with a **~95% pull request acceptance rate**.
That means we default to **merging and improving together**, not rejecting people for small mistakes.

If something isn’t perfect, we guide, iterate, and refactor openly.

You do **not** need to be an expert. You do **not** need permission. If you can follow steps, you can contribute.

---

## 🛠️ How contributing works (important concept)

NoGateUI follows the **same contribution model used by projects like Chakra UI and MUI**.

### Key rules (important)

- **`main` is protected** (no one pushes directly to it)
- Contributors **do not get write access** to this repo
- All changes come through **Pull Requests**
- Contributors work on **their own branches** in **their own forks**

This keeps the project safe, stable, and easy to maintain.

You do **not** need a shared `dev` branch.

Large UI libraries like Chakra UI and MUI **do not allow contributors to push to a shared development branch**. Instead, they use feature branches + PRs.

---

## 🔁 Contribution flow (start to finish)

This section covers **everything**, even if you’ve never contributed before.

---

## 🅰️ Scenario 1: Improving an existing component

### Step 1: Fork the repository

Go to:
👉 https://github.com/NoGateUI/nogateui

Click **Fork** (top-right). This creates your own copy of the repo.

---

### Step 2: Clone your fork

```bash
git clone https://github.com/YOUR_USERNAME/nogateui.git
cd nogateui
```

---

### Step 3: Install dependencies

```bash
npm install
```

This sets up all packages using the shared workspace setup.

---

### Step 4: Create a new branch

```bash
git checkout -b improve-skeleton-animation
```

Always work on a branch. Never work directly on `main`.

---

### Step 5: Make your changes

Example:

- Improve animation
- Fix styles
- Add a prop
- Improve docs

Files live inside:

```
packages/skeleton/
packages/button/
```

---

### Step 6: Build and test locally

From the repo root:

```bash
npm run build
```

If this passes, your changes are safe.

---

### Step 7: Commit your changes

```bash
git add .
git commit -m "fix: improve skeleton animation"
```

---

### Step 8: Push to your fork

```bash
git push origin improve-skeleton-animation
```

---

### Step 9: Open a Pull Request

On GitHub, you’ll see a **“Compare & pull request”** button.

Open the PR against:

```
NoGateUI/nogateui → main
```

Explain what you changed and why.

That’s it. We’ll review and iterate with you.

---

## 🅱️ Scenario 2: Creating a brand-new component

Yes, you are allowed to do this.

You don’t need permission. You don’t need to ask first.

---

### Step 1: Fork, clone, install

Same as Scenario 1.

---

### Step 2: Create a new package folder

Inside `packages/`, create a new folder:

```
packages/card/
```

---

### Step 3: Add basic structure

```
packages/card/
  src/
    Card.tsx
    index.ts
  package.json
  tsconfig.json
  README.md
  LICENSE
```

You can copy structure from an existing package like `skeleton`.

---

### Step 4: Implement your component

Start simple. Small, focused components are encouraged.

---

### Step 5: Build from root

```bash
npm run build
```

If it builds, you’re good.

---

### Step 6: Commit, push, open PR

Same as Scenario 1.

In your PR description, explain:

- What the component does
- Why it’s useful
- Any design decisions

We’ll review it with you.

---

## ✅ What happens after you open a PR

- We review the code
- We may suggest small changes
- We help you fix issues if needed
- Once ready, we merge it

We care more about **learning and intent** than perfection.

---

## 📜 Versioning & Publishing

- Each package is versioned independently
- Publishing is handled by maintainers
- The root package is marked as `private` and is never published

You do **not** need to worry about npm publishing as a contributor.

---

## 📄 License

NoGateUI is licensed under the **MIT License**.

Each published package includes its own license file for clarity and compliance.

---

## 🌍 Community & Links

- GitHub: https://github.com/NoGateUI/nogateui

If you’ve ever wanted to contribute to open source but didn’t know where to start, this project is for you.

Let’s build something meaningful together.
