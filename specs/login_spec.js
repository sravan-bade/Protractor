var util = require('util')
var gmail_page = require('../pages/gmail_page.js')

describe('To test the Angular login functionality', function(){
	
	beforeEach(function(){
		browser.waitForAngularEnabled(false);
		browser.get('http://www.way2automation.com/angularjs-protractor/registeration/');
	});
	
//Angular application automation for registration journey
	it('Should be able to login registration form successfully and logout',function(){
		logger.info("Scenario 1");
		var EC = protractor.ExpectedConditions;
		browser.wait(EC.visibilityOf(element(by.id('username'))), 10000);
		element(by.id('username')).sendKeys("angular");
		element(by.id('password')).sendKeys("password");
        expect(element(by.buttonText('Login')).getAttribute('disabled')).toBe('true');
		element(by.model('model[options.ky]')).sendKeys("Sravan");
		element(by.buttonText('Login')).click();
		
		browser.wait(EC.urlContains('login'), 5000);
		browser.wait(EC.visibilityOf(element(by.css('body > div.jumbotron > div > div > div > h1'))), 10000);
		expect(element(by.css('body > div.jumbotron > div > div > div > h1')).getText()).toBe('Home');
		expect(element(by.css('body > div.jumbotron > div > div > div > p:nth-child(2)')).getText()).toBe("You're logged in!!");
		element(by.linkText('Logout')).click();
		// Waits for the URL to contain 'login'.
		browser.wait(EC.urlContains('login'), 5000);	
	});

	it('Should be display error message when invalid login cradentials are entered',function(){
		logger.info("Scenario 2");
		element(by.id('username')).sendKeys("angula");
		element(by.id('password')).sendKeys("password");
		element(by.model('model[options.key]')).sendKeys("Sravan");
		var errWebElement = element(by.css('body > div.jumbotron > div > div > div > div.alert.alert-danger.ng-binding.ng-scope'));
		var EC = protractor.ExpectedConditions;
		element(by.buttonText('Login')).click();
		browser.wait(EC.visibilityOf(errWebElement), 10000);
		var err_message = errWebElement.getText();
		expect(err_message).toBe('Username or password is incorrect');
	});
	
});