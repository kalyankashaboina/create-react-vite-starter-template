import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@router': path.resolve(__dirname, 'src/router'),
      '@types': path.resolve(__dirname, 'src/types'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // This is the most robust way to make globals available to every component.
        // It ensures the color module, variables, and mixins are all available.
        additionalData: `
          @use "sass:color";
          @use "@assets/styles/_variables.scss" as *;
          @use "@assets/styles/_mixins.scss" as *;
        `,
      },
    },
    // The 'modules' object must be inside the 'css' object
    modules: {
      // Enables the use of camelCase for CSS class names in TypeScript
      // e.g., styles.homeCounter instead of styles['home-counter']
      localsConvention: 'camelCase',
    },
  },
  build: {
    // Automatic code splitting strategy
    rollupOptions: {
      output: {
        // Split vendor libraries into separate chunk
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom', '@reduxjs/toolkit', 'react-redux'],
          store: ['src/store/store.ts', 'src/store/slices/counterSlice.ts'],
        },
        // Generate chunk filename pattern for better caching
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 500,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs in production
      },
    },
  },
});
