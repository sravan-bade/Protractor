exports.config = {
  //directConnect: true,
  seleniumAddress: 'http://localhost:4444/wd/hub',
  
  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['../test/*_spec.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
	showcolors: true,
    defaultTimeoutInterval: 30000
  }
};