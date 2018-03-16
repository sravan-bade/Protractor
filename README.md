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