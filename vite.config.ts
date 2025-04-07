import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  // Add this to handle client-side routing
  preview: {
    port: 5173,
    strictPort: true,
  }
});