// vite.local.config.ts
import { defineConfig, mergeConfig } from 'vite';
import base from './vite.base.config';

export default mergeConfig(
  base,
  defineConfig({
    server: {
      port: 5173,
      open: true,
    },

    build: {
      sourcemap: true, // Easier debugging
      minify: false, // Faster dev build
    },
  }),
);
