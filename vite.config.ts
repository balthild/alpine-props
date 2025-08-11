import { defineConfig } from 'vite';
import dts from 'unplugin-dts/vite';

export default defineConfig({
  plugins: [dts()],
  build: {
    minify: false,
    emptyOutDir: true,
    lib: {
      entry: ['src/index.ts'],
      formats: ['es'],
    },
    rollupOptions: {
      external: ['alpinejs', '@vue/reactivity'],
    },
  },
});
