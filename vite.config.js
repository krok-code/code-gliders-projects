import { defineConfig } from 'vite';
import glob from 'glob';
import path from 'path';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig(({ command }) => {
  return {
    define: {
      [command === 'serve' ? 'global' : '_global']: {},
    },
    root: 'src',
    resolve: {
      alias: {
        '/@/': path.resolve(__dirname, 'src'),
      },
    },
    build: {
      sourcemap: true,

      rollupOptions: {
        input: glob.sync('./src/*.html').reduce((entries, entry) => {
          entries[path.basename(entry, '.html')] = path.resolve(__dirname, entry);
          return entries;
        }, {}),
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
          entryFileNames: 'commonHelpers.js',
        },
      },
      outDir: '../dist',
    },
    plugins: [injectHTML(), FullReload(['./src/**/**.html'])],
  };
});
