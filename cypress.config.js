const { defineConfig } = require('cypress')
const Mochawesome = require('mochawesome')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.automationexercise.com',
    defaultCommandTimeout: 6000,
    pageLoadTimeout: 10000,
    video: true,
    screenshotOnRunFailure: true,
    viewportWidth: 1280,
    viewportHeight: 720,



    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: "cypress/reports",
      html: true,
      json: false,
      overwrite: true,
      reportFilename: "[name]_[datetime]",
      timestamp: "YYYY-mm-dd_HH-MM-ss"
    },

    env:
    {
      activeEnv: 'dev',

      int: {

        email: "mom@gmail.com",
        password: "mom@123"
      },

      dev:
      {
        email: "mom@gmail.com",
        password: "mom@123"
      }

    },
    setupNodeEvents(on, config) { }
  }
})
