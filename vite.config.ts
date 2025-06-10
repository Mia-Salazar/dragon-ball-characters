/// <reference types="vitest/config" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import type { UserConfigExport } from 'vite';
import react from '@vitejs/plugin-react';
import type { TestOptions } from 'vitest';

const config: UserConfigExport = {
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './setupTests.ts',
  } as TestOptions,
};

export default defineConfig(config);
