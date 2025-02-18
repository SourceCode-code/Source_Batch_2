
const { defineConfig, devices } = require('@playwright/test');


module.exports = defineConfig({
  testDir: './tests',
  reporter: 'html', 
  timeout:30000, // 
  // report --> html , mochaawesome report , allure report
  use: {
    baseURL:"https://webdriveruniversity.com/",
    trace: 'on-first-retry',
    headless:false,
    viewport:null,
  },

});

