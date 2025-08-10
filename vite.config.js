<<<<<<< HEAD
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vercel 정적 배포 폴더를 dist로 고정
export default defineConfig({
  plugins: [react()],
  build: { outDir: 'dist' },
  server: { port: 5173 }
});
=======
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vercel 정적 배포 폴더를 dist로 고정
export default defineConfig({
  plugins: [react()],
  build: { outDir: 'dist' },
  server: { port: 5173 }
});
>>>>>>> bd28e80 (Resolve merge conflicts)
