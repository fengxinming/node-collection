# read-cfg-file

[![npm package](https://nodei.co/npm/read-cfg-file.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/read-cfg-file)

[![NPM version](https://img.shields.io/npm/v/read-cfg-file.svg?style=flat)](https://npmjs.org/package/read-cfg-file)
[![NPM Downloads](https://img.shields.io/npm/dm/read-cfg-file.svg?style=flat)](https://npmjs.org/package/read-cfg-file)

> 一个轻量级工具包，用于读取和解析多种格式的配置文件。

## 概述

`read-cfg-file` 是一款多功能工具，支持读取并解析 `.js`, `.cjs`, `.ts`, `.mts`, `.mjs`, `.json`, `.jsonc`, `.json5`, `.yaml`, 和 `.yml` 等格式的配置文件。它利用现代前端构建技术（如 Vite）动态编译 TypeScript 文件，并提供统一接口返回配置内容。

## 特性

- 支持多种配置文件格式。
- 自动处理相对路径与绝对路径。
- 内置对 TypeScript 的支持，通过 Vite 构建生成临时 `.mjs` 文件进行加载。
- 清理临时生成的文件以保持环境整洁。
- 异常安全处理机制，确保在失败时尽可能恢复。

## 安装

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

## 使用方式

### 基本用法

```ts
import { readCfgFile } from 'read-cfg-file';

// 读取配置文件
const config = await readCfgFile<{ key: string }>('./config.ts');

console.log(config);
```

### 支持的文件类型

| 扩展名       | 解析方式                   |
|--------------|----------------------------|
| `.js`, `.cjs`| 通过 `require` 加载        |
| `.ts`, `.mts`| 利用 Vite 编译为 `.mjs` 后加载 |
| `.mjs`       | 通过 `import` 动态加载     |
| `.json`,<br>`.jsonc`, `.json5` | 通过 `JSON5` 解析 |
| `.yaml`, `.yml` | 通过 `js-yaml` 解析 |

## API 文档

### `readCfgFile<T>(configFile: string): Promise<T | undefined>`

#### 参数

- `configFile`: 配置文件的路径。可以是相对路径或绝对路径。

#### 返回值

- 返回一个 `Promise`，解析后得到配置文件的内容，类型为泛型 `T` 或 `undefined`。

#### 示例

```ts
import { readCfgFile } from 'read-cfg-file';

// 读取 JSON 文件
const jsonConfig = await readCfgFile<{ port: number }>('./config.json');
console.log(jsonConfig?.port); // 输出端口号

// 读取 YAML 文件
const yamlConfig = await readCfgFile<{ db: string }>('./config.yaml');
console.log(yamlConfig?.db); // 输出数据库名称
```

## 注意事项

1. **TypeScript 支持**：读取 `.ts` 或 `.mts` 文件时，会借助 Vite 编译成 `.mjs` 格式，然后加载。完成后自动删除生成的临时文件。
2. **异步处理**：所有操作均为异步，需配合 `await` 使用。
3. **错误处理**：建议包裹在 `try...catch` 中避免因文件读取失败导致程序崩溃。
