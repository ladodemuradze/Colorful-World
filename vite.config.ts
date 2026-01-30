import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Setting base to './' is critical for GitHub Pages to find assets 
  // when the site is hosted at username.github.io/repo-name/
  base: './', 
});