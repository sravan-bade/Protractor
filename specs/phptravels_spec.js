var util = require('util')

describe('To test the gmail login functionality', function(){
	
	beforeach(function(){
		browser.get('https://www.phptravels.net/');
	});
	
	//page object model for gmail login error validation
	it('Should be able to login and logout from phptravels application by asserting the username',function(){
		element(by.css('#li_myaccount > a')).click();
		element(by.css('#li_myaccount > ul > li:nth-child(1) > a')).click();
		var EC = protractor.ExpectedConditions;
		// Waits for the URL to contain login
		browser.wait(EC.urlContains('login'), 5000);
		element(by.name('username')).sendKeys('user@phptravels.com');
		element(by.name('password')).sendKeys('demouser');
		element(by.css('#loginfrm > div.panel.panel-default > div.wow.fadeIn.animated > button')).click();
		var user_name = element(by.css('#body-section > div > div.row > div > div.col-md-6.go-right.RTL > h3')).getText();
		expect(user_name).toBe('Hi, DVhbCERv IlqEZZxz');
		element(by.css('body > div.tbar-top.hidden-sm.hidden-xs > div > div > div.col-md-6.col-sm-8.col-xs-5.go-left > ul > li.open > a')).click();
		element(by.css('body > div.tbar-top.hidden-sm.hidden-xs > div > div > div.col-md-6.col-sm-8.col-xs-5.go-left > ul > li.open > ul > li:nth-child(2) > a')).click();
		browser.wait(EC.urlContains('login'), 5000);
		var Login_title = element(by.css('#loginfrm > div.panel.panel-default > div.panel-heading')).getText();
		expect(Login_title).toBe('Login');
	});
	
});