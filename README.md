# Node Collection

[![GitHub Issues](https://img.shields.io/github/issues/fengxinming/node-collection)](https://github.com/fengxinming/node-collection/issues)
[![License: MIT](https://img.shields.io/badge/license-MIT-blueviolet)](https://github.com/fengxinming/node-collection/blob/main/LICENSE)

> A collection of Node.js utilities and packages.

## 📦 Overview

`node-collection` is a **private monorepo** project that uses `pnpm` to manage multiple sub-packages. Each package can be built, tested, and published independently. This project focuses on providing reusable utility functions and small libraries for use in other Node.js projects.

## 🧰 Tech Stack & Dependency Management

- **Languages**: TypeScript, JavaScript
- **Build Tool**: Vite
- **Documentation**: [VitePress](https://vitepress.dev/)
- **Code Quality**:
  - ESLint + [eslint-config-fe](https://www.npmjs.com/package/eslint-config-fe)
  - Commitlint + Husky
- **Package Manager**: pnpm
- **CI/CD**: Can be integrated with GitHub Actions for automated releases

## 📁 Project Structure

```bash
node-collection/
├── docs/               # Documentation site (powered by VitePress)
├── packages/           # Individual packages
│   └── read-cfg-file/  # Example package: reads config files in various formats
├── package.json
└── release.mjs         # Release script
```

## 🚀 Quick Start

### Install Dependencies

```bash
npm run deps
```

### Build All Packages

```bash
npm run build:all
```

### Run Tests in Parallel

```bash
npm run test:all
```

### Start Documentation Dev Server

```bash
npm run docs:dev
```

### Release New Version

```bash
npm run release:all
```

## 🛠️ Development Guidelines

- Lint code using ESLint:
  ```bash
  npm run eslint
  ```

- Git commit messages follow the Conventional Commits specification, enforced via Husky and Commitlint.

## 📄 Documentation

📚 The documentation site is located in the `/docs` directory and built with VitePress. You can preview it locally using:

```bash
npm run docs:dev
```

## 📬 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request. Please ensure your code adheres to the linting rules and includes appropriate tests.

## 📜 License

This project is licensed under the MIT License. See [LICENSE](./LICENSE) for details.
