# clrsole 

[![npm package](https://nodei.co/npm/clrsole.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/clrsole)

[![NPM version](https://img.shields.io/npm/v/clrsole.svg?style=flat)](https://npmjs.org/package/clrsole) 
[![NPM Downloads](https://img.shields.io/npm/dm/clrsole.svg?style=flat)](https://npmjs.org/package/clrsole)

> **Colorful console.log for structured logging**  
> A logging utility with log levels and color highlighting inspired by log4j

---

## Features
- 🎨 **Colorized output**: Green/Red/Yellow/Blue for different message types
- 📝 **6-level logging**: trace/debug/info/warn/error/fatal
- 🛠 **Flexible formatting**: Customize log message templates
- 🌐 **TypeScript support**: Full type definitions included

---

## Installation

::: code-group
```bash [npm]
npm add clrsole
```
```bash [pnpm]
pnpm add clrsole
```
```bash [yarn]
yarn add clrsole
```
:::

---

## Getting Started

### Basic Usage
```javascript
import { factory, clrsole } from 'clrsole';

// Create named logger
const appLogger = factory.getLogger('app');

// Structured logging with level indicators
appLogger.info('User login success:', { userId: 123, timestamp: new Date() });
appLogger.error('Request failed:', { statusCode: 500 });

// Direct color output
clrsole.green('Success message');
clrsole.red('Error occurred', new Error('Detailed error'));
```

### Output Example
```text
\x1b[32m[2023-08-01 10:00:00.620+08:00] [INFO] [app] - User login success: { userId: 123, ... }\x1b[0m
\x1b[31m[2023-08-01 10:01:00.620+08:00] [ERROR] [app] - Request failed: { statusCode: 500 }\x1b[0m
```

---

## Advanced Features

### Level Control
```javascript
// Only log warnings and above
appLogger.level = 'WARN';
```
