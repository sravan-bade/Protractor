# How to run the system test

Just step into the folder and run protractor tests as usual:
- `npm install`
- `cd node_modules/protractor/bin/`
- `webdriver-manager update`
- `webdriver-manager start`
- `protractor conf.js`


Action items pending:
1. Report html is not opening in chrome
2. Report generation is failing when tests are failing

Note: 
1. Posttest command is running only when protractor is running by manual server not by direct connect