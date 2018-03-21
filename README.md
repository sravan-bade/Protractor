# Protractor

How to run the system test - Just step into the folder and run below command:
- `npm test`

For first time usage, please run below commands in advance:
- `npm install`
- `node ./node_modules/protractor/bin/webdriver-manager update` - make sure protractor is not installed globally

Features:
- `Protractor with Jasmine framework`
- `Auto allure reporter generation`
- `Log4js loggers`
- `page object model`

Package usage:
- `protractor: Testing framework`
- `log4js and log4js-protractor-appender: used for logger`
- `jasmine-allure-reporter: Used for Test Reporting`
- `allure-commandline: Used to generate reports automatically after Test completion`

Limitations: 
- `Report html file will open in MS Edge or Firefox. Chrome and few other browsers wont allow by default to load files folders into html file.`

Easy way to get locators and steps:
- `npm install -g elementor`
- `Open webpage by elementor using cmd: elementor http://www.angulasjs.com. This will brings up a webpage with provided URL`
- `Take a duplicate of webpage and goto Developer tools(F12).`
- `Go to Elements tab and select Protractor Locators tab in it.`
- `When we inspect an element we will get all the possible Locator option with number of results`