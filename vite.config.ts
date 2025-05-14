import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/tic-tac-toe/', // 👈 This is the key line
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
