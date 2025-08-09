import { defineConfig } from 'rolldown-vite';

export default defineConfig({
  build: {
    minify: false,
    emptyOutDir: true,
    lib: {
      entry: ['src/index.ts'],
      formats: ['es'],
    },
    rolldownOptions: {
      external: ['alpinejs', '@vue/reactivity'],
    },
  },
});
