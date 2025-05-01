# read-cfg-file

[![npm package](https://nodei.co/npm/read-cfg-file.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/read-cfg-file)

[![NPM version](https://img.shields.io/npm/v/read-cfg-file.svg?style=flat)](https://npmjs.org/package/read-cfg-file)
[![NPM Downloads](https://img.shields.io/npm/dm/read-cfg-file.svg?style=flat)](https://npmjs.org/package/read-cfg-file)

> A lightweight utility for reading and parsing configuration files in multiple formats.

## Overview

`read-cfg-file` is a versatile tool that supports reading and parsing configuration files in various formats including `.js`, `.cjs`, `.ts`, `.mts`, `.mjs`, `.json`, `.jsonc`, `.json5`, `.yaml`, and `.yml`. It leverages modern build tools like Vite to dynamically compile TypeScript files and provides a unified interface to return the parsed configuration content.

## Features

- Supports multiple configuration file formats.
- Automatically handles relative and absolute paths.
- Built-in support for TypeScript using Vite to compile into temporary `.mjs` files before loading.
- Cleans up generated temporary files to keep the environment tidy.
- Exception-safe handling to ensure recovery as much as possible on failure.

## Installation

::: code-group
```bash [npm]
npm add read-cfg-file
```
```bash [pnpm]
pnpm add read-cfg-file
```
```bash [yarn]
yarn add read-cfg-file
```
:::

## Usage

### Basic Example

```ts
import { readCfgFile } from 'read-cfg-file';

// Read a config file
const config = await readCfgFile<{ key: string }>('./config.ts');

console.log(config);
```

### Supported File Types

| Extension       | Parsing Method                   |
|------------------|-----------------------------------|
| `.js`, `.cjs`    | Loaded via `require`              |
| `.ts`, `.mts`    | Compiled by Vite into `.mjs` then loaded |
| `.mjs`           | Dynamically loaded via `import`   |
| `.json`,<br>`.jsonc`, `.json5` | Parsed with `JSON5` |
| `.yaml`, `.yml`  | Parsed with `js-yaml`             |

## API Documentation

### `readCfgFile<T>(configFile: string): Promise<T | undefined>`

#### Parameters

- `configFile`: Path to the configuration file. Can be either relative or absolute.

#### Returns

A `Promise` resolving to the parsed content of the configuration file, typed as generic `T` or `undefined`.

#### Examples

```ts
import { readCfgFile } from 'read-cfg-file';

// Reading a JSON file
const jsonConfig = await readCfgFile<{ port: number }>('./config.json');
console.log(jsonConfig?.port); // Outputs port number

// Reading a YAML file
const yamlConfig = await readCfgFile<{ db: string }>('./config.yaml');
console.log(yamlConfig?.db); // Outputs database name
```

## Notes

1. **TypeScript Support**: When reading `.ts` or `.mts` files, they are compiled into `.mjs` format using Vite, then loaded and automatically deleted after use.
2. **Asynchronous Operations**: All operations are asynchronous and should be used with `await`.
3. **Error Handling**: It's recommended to wrap calls in a `try...catch` block to avoid crashes due to file reading errors.
