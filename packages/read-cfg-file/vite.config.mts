import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import pluginExternal from 'vite-plugin-external';

import { dependencies } from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    dts({
      include: 'src/index.ts'
    }),
    pluginExternal({
      nodeBuiltins: true,
      externalizeDeps: Object.keys(dependencies)
    })
  ],
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es', 'cjs'],
      fileName: '[name]'
    },
    minify: false
  }
});
