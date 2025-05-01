import { describe, expect, it } from 'vitest';

import { readCfgFile } from '../src/index';

describe('readCfgFile', () => {
  it('should read and parse .js file correctly', async () => {
    const filePath = '../../commitlint.config.js';
    const result = await readCfgFile(filePath);
    expect(result).toEqual({
      extends: ['@commitlint/config-conventional']
    });
  });

  it('should read and parse .mjs file correctly', async () => {
    const filePath = '../../release.mjs';
    const result = await readCfgFile(filePath) as object;
    expect(Object.keys(result)).toEqual([]);
  });

  it('should read and parse .ts file correctly', async () => {
    const filePath = 'src/index.ts';
    const result = await readCfgFile<{readCfgFile: () => void}>(filePath);
    expect(typeof result!.readCfgFile).toBe('function');
  });

  it('should read and parse .json file correctly', async () => {
    const filePath = 'package.json';
    const result = await readCfgFile(filePath);
    expect(result).toMatchObject({ name: 'read-cfg-file' });
  });

  it('should read and parse .yaml file correctly', async () => {
    const filePath = '../../pnpm-workspace.yaml';
    const result = await readCfgFile(filePath);
    expect(result).toMatchObject({
      packages: [
        'packages/*'
      ]
    });
  });
});
