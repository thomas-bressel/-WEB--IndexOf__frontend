import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'lcov'], 
      reportsDirectory: './coverage', 
      exclude: ['node_modules/', 'test/', '__tests__/**/*.test.ts'], 
    },
  },
})
