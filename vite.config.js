import { defineConfig } from 'vite';
import { configDefaults } from 'vitest/config';
import react from '@vitejs/plugin-react';

// GitHub Pages のサブパス(/sign-aiueo/)でも動くよう、相対パスで出力する
export default defineConfig({
  base: './',
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.js',
    // ローカルでは node_modules を node_modules.noindex へのリンクにしているため、実体側も除外する
    exclude: [...configDefaults.exclude, '**/node_modules.noindex/**'],
  },
});
