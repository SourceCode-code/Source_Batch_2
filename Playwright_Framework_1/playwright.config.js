
const { defineConfig, devices } = require('@playwright/test');


module.exports = defineConfig({
  testDir: './tests',
  reporter: 'html', 
  timeout:30000, // 
  fullyParallel: true,
  // report --> html , mochaawesome report , allure report
  use: {
    baseURL:"https://webdriveruniversity.com/",
    trace: 'on-first-retry',
    headless:false,
    viewport:null,
  },
    // /* Configure projects for major browsers */
    // projects: [
    //   {
    //     name: 'chromium',
    //     use: { ...devices['Desktop Chrome'] },
    //   },
  
    //   {
    //     name: 'firefox',
    //     use: { ...devices['Desktop Firefox'] },
    //   },
  
    //   {
    //     name: 'webkit',
    //     use: { ...devices['Desktop Safari'] },
    //   },
  
    //   /* Test against mobile viewports. */
    //   // {
    //   //   name: 'Mobile Chrome',
    //   //   use: { ...devices['Pixel 5'] },
    //   // },
    //   // {
    //   //   name: 'Mobile Safari',
    //   //   use: { ...devices['iPhone 12'] },
    //   // },
  
    //   /* Test against branded browsers. */
    //   // {
    //   //   name: 'Microsoft Edge',
    //   //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    //   // },
    //   // {
    //   //   name: 'Google Chrome',
    //   //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    //   // },
    // ],

});

