// vite.prod.config.ts
import { defineConfig, mergeConfig } from 'vite';
import base from './vite.base.config';

export default mergeConfig(
  base,
  defineConfig({
    build: {
      minify: 'terser',
      chunkSizeWarningLimit: 500,

      terserOptions: {
        compress: {
          drop_console: true,
        },
      },

      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom', 'react-router-dom', '@reduxjs/toolkit', 'react-redux'],

            store: ['src/store/store.ts', 'src/store/slices/counterSlice.ts'],
          },

          chunkFileNames: 'assets/[name]-[hash].js',
          entryFileNames: 'assets/[name]-[hash].js',
        },
      },
    },
  }),
);
