# How to run the system test

Just step into the folder and run protractor tests as usual:
- `npm install - Will install package.json files` 
- `npm test`
- `Note: In case of webdriver issues run node ./node_modules/protractor/bin/webdriver-manager update`

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