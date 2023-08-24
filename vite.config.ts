import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [...react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://trackio-0bb197af8651.herokuapp.com/',
        changeOrigin: true,
      },
    },
  },
});
