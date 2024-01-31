/// <reference types="vitest" />

import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.ts'],
    include: ['./**/*.test.{ts,tsx}'],
    css: true,
    coverage: {
      provider: 'v8',
      include: [
        'src/**/*.{ts,tsx}',
        '!src/components/**/index.ts',
        '!src/types/**/*',
        '!src/styles/**/*',
      ],
      all: true,
    },
  },
});
