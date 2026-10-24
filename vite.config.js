import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages のサブパス(/sign-aiueo/)でも動くよう、相対パスで出力する
export default defineConfig({
  base: './',
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.js',
  },
});
