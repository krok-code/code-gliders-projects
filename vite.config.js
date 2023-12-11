import { defineConfig } from 'vite';
import glob from 'glob';
import ViteHtmlPlugin from "vite-plugin-html";
import FullReload from 'vite-plugin-full-reload';

export default defineConfig(({ command }) => {
  return {
    define: {
      [command === 'serve' ? 'global' : '_global']: {},
    },
    root: 'src',
    build: {
      sourcemap: true,
      rollupOptions: {
        input: glob.sync('./src/*.html'),
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
          entryFileNames: 'commonHelpers.js',
        },
        external: ['/img/icons.svg'],
        treeshake: {
          moduleSideEffects: false,
        },
      },
      outDir: '../dist',
      emptyOutDir: true,
    },
    plugins: [
      ViteHtmlPlugin(),
      FullReload(['./src/**/**.html']),
    ],
  };
});
