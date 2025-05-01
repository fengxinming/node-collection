# read-cfg-file

[![npm package](https://nodei.co/npm/read-cfg-file.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/read-cfg-file)

[![NPM version](https://img.shields.io/npm/v/read-cfg-file.svg?style=flat)](https://npmjs.org/package/read-cfg-file)
[![NPM Downloads](https://img.shields.io/npm/dm/read-cfg-file.svg?style=flat)](https://npmjs.org/package/read-cfg-file)

> A lightweight utility for reading and parsing configuration files in multiple formats.

---

## Overview

`read-cfg-file` is a versatile tool that supports reading and parsing configuration files in various formats including `.js`, `.cjs`, `.ts`, `.mts`, `.mjs`, `.json`, `.jsonc`, `.json5`, `.yaml`, and `.yml`. It leverages modern build tools like Vite to dynamically compile TypeScript files and provides a unified interface to return the parsed configuration content.

---

## Features

- Supports multiple configuration file formats.
- Automatically handles relative and absolute paths.
- Built-in support for TypeScript using Vite to compile into temporary `.mjs` files before loading.
- Cleans up generated temporary files to keep the environment tidy.
- Exception-safe handling to ensure recovery as much as possible on failure.

---

## Documentation

For detailed usage instructions and API references, please visit the official documentation:

👉 [View Full Documentation](https://fengxinming.github.io/node-collection/modules/read-cfg-file/)

---

## **Quick Start**

### **Basic Usage**

```ts
import { readCfgFile } from 'read-cfg-file';

// Reading a JSON file
const jsonConfig = await readCfgFile<{ port: number }>('./config.json');
console.log(jsonConfig?.port); // Outputs port number

// Reading a YAML file
const yamlConfig = await readCfgFile<{ db: string }>('./config.yaml');
console.log(yamlConfig?.db); // Outputs database name
```

---

## Contributing

We welcome contributions from the community! If you find a bug or want to suggest an improvement, feel free to open an issue or submit a pull request.

### How to Contribute
1. Fork the repository.
2. Create a new branch for your changes.
3. Submit a pull request with a clear description of your changes.

---

## License

This project is licensed under the [MIT License](LICENSE).
