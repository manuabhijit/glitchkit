# 📦 GlitchKit Monorepo

This monorepo uses [Lerna](https://lerna.js.org/) to manage multiple interrelated packages, including `glitchkit` — a TypeScript toolkit for expressive and structured error handling.

---

## 📁 Directory Structure

```
root/
├── packages/
│   └── glitchkit/             # Core package: error classes and types
├── node_modules/
├── package.json               # Root dependencies & Lerna config
├── lerna.json                 # Lerna settings
└── README.md
```

---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Bootstrap the Monorepo

Link all local packages and install dependencies:

```bash
npx lerna bootstrap
```

### 3. Add a New Package (Optional)

```bash
npx lerna create <your-package-name>
```

---

## 🔁 Common Lerna Commands

| Command                          | Description                                           |
| -------------------------------- | ----------------------------------------------------- |
| `npx lerna bootstrap`            | Link local packages together and install dependencies |
| `npx lerna clean`                | Remove all `node_modules` from all packages           |
| `npx lerna run build`            | Run `npm run build` in each package                   |
| `npx lerna exec -- <command>`    | Run a shell command in each package directory         |
| `npx lerna publish`              | Publish updated packages to npm                       |
| `npx lerna publish from-package` | Publish updated packages to npm                       |
| `npx lerna version`              | Publish updated packages to npm                       |

---

## 📌 Lerna Configuration (`lerna.json`)

```json
{
  "version": "independent",
  "npmClient": "npm",
  "useWorkspaces": true,
  "packages": ["packages/*"]
}
```

Make sure your root `package.json` includes:

```json
{
  "private": true,
  "workspaces": ["packages/*"]
}
```

---

## 🛠 Example: Publishing GlitchKit

1. Bump version manually:

```bash
cd packages/glitchkit
npm version patch
```

2. Then publish:

```bash
npx lerna publish from-package
```

---

## 🧪 Running Tests

To test a single package:

```bash
cd packages/glitchkit
npm test
```

Or run across all:

```bash
npx lerna run test
```

---

## 📖 Resources

- [Lerna Docs](https://lerna.js.org/)
- [Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces/)
- [NPM Workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces)

---
