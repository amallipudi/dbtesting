const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "junit",
  projectId: "yqfhgu",


  reporterOptions: {
    mochaFile: "results/my-test-output-[hash].xml",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
