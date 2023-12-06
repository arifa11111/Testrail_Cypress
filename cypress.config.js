const { defineConfig } = require("cypress");
//newman:9QrB1JxUZV7sZ8RKA1R2-GqQTIe63tTrl6tbAZn1q
module.exports = defineConfig({
  e2e: {
    baseUrl:"https://www.amazon.in/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return require('./cypress/plugins/index.js')(on, config)
    },
    viewportHeight:800,
    viewportWidth:1300
  },
  chromeWebSecurity: false,
  reporter: "salty-cypress-testrail-reporter",
  reporterOptions: {
      domain: "arifa786.testrail.io",
      username: "shaik.arifa@zemosolabs.com",
      password: "Arifa@786",
      projectId: 4,
      suiteId: 11,
      createTestRun: true,
      // runId: 4,
      // runName: "testing"
    }
});
