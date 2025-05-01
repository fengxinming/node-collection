import { unlink } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { builtinModules, createRequire } from 'node:module';
import { isAbsolute, join, parse as parsePath, resolve } from 'node:path';

import { load as parseYaml } from 'js-yaml';
import { parse as parseJson } from 'json5';
import { build } from 'vite';

const __require = createRequire(import.meta.url);

function interopDefaultCompat(e: unknown): unknown {
  return e && typeof e === 'object' && 'default' in e
    ? e.default
    : e;
}

export async function readCfgFile<T = any>(configFile: string): Promise<T | undefined> {
  if (!isAbsolute(configFile)) {
    configFile = resolve(configFile);
  }
  const { ext, dir, name } = parsePath(configFile);
  let virtualFilePath: string | undefined;
  let result: T | undefined;

  switch (ext) {
    case '.js':
    case '.cjs':
      result = __require(configFile);
      break;
    case '.ts':
    case '.mts': {
      const virtualName = `${name}-${Math.random().toString(36).slice(2)}.mjs`;
      await build({
        configFile: false,
        logLevel: 'silent',
        build: {
          minify: false,
          target: 'esnext',
          outDir: dir,
          emptyOutDir: false,
          lib: {
            entry: configFile,
            fileName: () => virtualName,
            formats: ['es']
          },
          rollupOptions: {
            external(id) {
              return id.startsWith('node:')
              || builtinModules.some((mod) => id.startsWith(mod))
              || /(\\|\/)node_modules(\\|\/)/.test(id);
            }
          }
        }
      });
      virtualFilePath = join(dir, virtualName);
      configFile = virtualFilePath;
    }
    // break omitted
    case '.mjs':
      try {
        result = interopDefaultCompat(await import(configFile)) as T;
      }
      finally {
        if (virtualFilePath) {
          unlink(virtualFilePath, (err) => {
            if (err) {
              console.error(err);
            }
          });
        }
      }
      break;
    case '.json':
    case '.jsonc':
    case '.json5':
      result = parseJson(await readFile(configFile, 'utf8'));
      break;
    case '.yaml':
    case '.yml':
      result = parseYaml(await readFile(configFile, 'utf8')) as T;
      break;
  }

  return result;
}
