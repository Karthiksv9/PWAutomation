// @ts-check
import { chromium, defineConfig, devices } from '@playwright/test';
import { trace } from 'console';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  /*Maximum time one test can run for. */

  timeout: 30 * 1000,
  expect: {
    timeout: 40 * 1000,
  },

  reporter: 'html',

  use: {
    browserName: 'firefox',

    //browserName : 'webkit',
    trace: 'on',
    headless: false

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
  }
});

module.exports = config