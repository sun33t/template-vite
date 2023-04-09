import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: '.config/',
  },
  resolve: {
    alias: {
      '~ui': path.resolve(__dirname, 'src/components/ui'),
      '~layouts': path.resolve(__dirname, 'src/layouts'),
      '~pages': path.resolve(__dirname, 'src/pages'),
    },
  },
});
