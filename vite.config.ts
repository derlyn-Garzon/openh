import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    port: 12001,
    strictPort: true,
    allowedHosts: ['.prod-runtime.all-hands.dev'],
  },
  preview: {
    host: true,
    port: 12001,
    strictPort: true,
    allowedHosts: ['.prod-runtime.all-hands.dev'],
  },
});
