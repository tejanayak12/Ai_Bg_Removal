// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  css: {
    postcss: './postcss.config.cjs', // Make sure this matches the correct path to your postcss config
  },
});
