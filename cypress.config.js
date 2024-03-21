const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // Set the reporter at the top level
  "reporter": "cypress-mochawesome-reporter",

  setupNodeEvents(on, config) {
    // Implement node event listeners here
  },

  // Remove the unnecessary e2e configuration
  env: {
    URL: "https://opencart.abstracta.us/index.php?route=account/register",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
