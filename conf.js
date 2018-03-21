var log4js = require('log4js');

exports.config = {
  directConnect: true,
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  
  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine2',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['specs/calculation_spec.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
	showcolors: true,
    defaultTimeoutInterval: 30000
  },
  
 beforeLaunch:function(){
    log4js.configure({
        appenders: {
            fileLog: { type: 'file', filename: './logs/ExecutionLog.log' },
            console: { type: 'log4js-protractor-appender' }
            },
            categories: {
            file: { appenders: ['fileLog'], level: 'error' },
            another: { appenders: ['console'], level: 'trace' },
            default: { appenders: ['console', 'fileLog'], level: 'trace' }
            }
    });
      
},

onPrepare: function () {
  browser.manage().window().maximize();
  browser.manage().timeouts().pageLoadTimeout(40000);
  browser.manage().timeouts().implicitlyWait(25000);
  logger = log4js.getLogger('protractorLog4js');
	var AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter());
    jasmine.getEnv().afterEach(function(done){
      browser.takeScreenshot().then(function (png) {
        allure.createAttachment('Screenshot', function () {
          return new Buffer(png, 'base64')
        }, 'image/png')();
        done();
      })
    });
  }

};
