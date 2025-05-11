# clrsole 

[![npm package](https://nodei.co/npm/clrsole.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/clrsole)

[![NPM version](https://img.shields.io/npm/v/clrsole.svg?style=flat)](https://npmjs.org/package/clrsole) 
[![NPM Downloads](https://img.shields.io/npm/dm/clrsole.svg?style=flat)](https://npmjs.org/package/clrsole)

> **结构化彩色日志工具**  
> 受log4j启发的日志工具，支持日志级别和颜色高亮显示

---

## 特性
- 🎨 **彩色输出**：绿色/红色/黄色/蓝色区分不同类型消息
- 📝 **6级日志系统**：trace/debug/info/warn/error/fatal
- 🛠 **灵活格式化**：自定义日志消息模板
- 🌐 **TypeScript支持**：包含完整类型定义

---

## 安装方法

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

## 快速开始

### 基础用法
```javascript
import { factory, clrsole } from 'clrsole';

// 创建具名日志记录器
const appLogger = factory.getLogger('app');

// 带级别标识的结构化日志
appLogger.info('用户登录成功:', { userId: 123, timestamp: new Date() });
appLogger.error('请求失败:', { statusCode: 500 });

// 直接颜色输出
clrsole.green('成功消息');
clrsole.red('发生错误', new Error('详细错误信息'));
```

### 输出示例
```text
\x1b[32m[2023-08-01 10:00:00.620+08:00] [INFO] [app] - 用户登录成功: { userId: 123, ... }\x1b[0m
\x1b[31m[2023-08-01 10:01:00.620+08:00] [ERROR] [app] - 请求失败: { statusCode: 500 }\x1b[0m
```

---

## 高级功能

### 级别控制
```javascript
// 仅记录警告及以上级别
appLogger.level = 'WARN';
```
