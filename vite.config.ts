import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [...react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://trackio-f0a81d9359b8.herokuapp.com/',
        changeOrigin: true,
      },
    },
  },
});
