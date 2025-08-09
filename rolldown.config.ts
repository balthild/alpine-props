import { defineConfig } from 'rolldown';
import dev from 'rollup-plugin-dev';

export default defineConfig({
  plugins: [dev({ spa: 'example.html', host: '127.0.0.1', port: 3000 })],
  input: 'src/index.ts',
  external: ['alpinejs', '@vue/reactivity'],
  output: {
    file: './dist/index.js',
    format: 'es',
    exports: 'named',
  },
});
