import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import solidSvg from 'vite-plugin-solid-svg';
import suidPlugin from '@suid/vite-plugin';

export default defineConfig({
  plugins: [solidPlugin(), solidSvg(), suidPlugin()],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
