const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});


module.exports = (on, config) => {
  on('before:browser:launch', (browser = {}, launchOptions) => {
    console.log(launchOptions.args);

    if (browser.name === 'chrome' || browser.name === 'edge' || browser.name === 'firefox') {
      launchOptions.args.push('--disable-gpu');
    }

    return launchOptions;
  });
};