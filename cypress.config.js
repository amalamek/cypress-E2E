const { defineConfig } = require("cypress");

module.exports = defineConfig({
  setupNodeEvents(on, config) {
    // implement node event listeners here
  },

  env: {
    URL: "https://opencart.abstracta.us/index.php?route=account/register",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
