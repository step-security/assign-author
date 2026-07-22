import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    setupFiles: './src/setup.ts',
    clearMocks: true,
    mockReset: true,
    restoreMocks: true,
    coverage: {
      provider: 'v8',
      reporter: ['html', 'lcov', 'text'],
    },
  },
});
