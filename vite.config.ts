import dts from 'unplugin-dts/vite';
import terser from '@rollup/plugin-terser';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [dts()],
  build: {
    minify: false,
    emptyOutDir: true,
    lib: {
      entry: ['src/index.ts'],
    },
    rollupOptions: {
      external: ['alpinejs', '@vue/reactivity'],
      output: [
        {
          format: 'es',
          entryFileNames: 'index.js',
        },
        {
          format: 'es',
          entryFileNames: 'index.min.js',
          plugins: [terser()],
        },
      ],
    },
  },
});
