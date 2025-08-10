import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vercel에서 dist 출력으로 배포되도록 outDir=dist 지정
export default defineConfig({
  plugins: [react()],
  build: { outDir: 'dist' },
  server: { port: 5173 }
});

