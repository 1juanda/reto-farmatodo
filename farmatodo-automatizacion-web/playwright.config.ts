import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 8000,
  retries: 0,
  use: {
    baseURL: 'https://www.saucedemo.com/',
    browserName: 'chromium',
    headless: false,
    viewport: null,
    launchOptions: {
      args: ['--start-maximized'],
    },
    screenshot: 'on',
    video: 'on',
  },
  workers: 1,
  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }]
  ]
});
