import { defineConfig } from 'rolldown';

export default defineConfig({
  input: 'src/index.ts',
  external: /node_modules/,
  output: {
    dir: 'dist',
    format: 'es',
    exports: 'named',
    preserveModules: true,
  },
});
