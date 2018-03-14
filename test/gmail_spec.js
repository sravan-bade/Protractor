var util = require('util')
var gmail_page = require('../page/gmail_page.js')

describe('To test the gmail login functionality', function(){
	
	beforeach(function(){
		browser.get('https://www.google.com');
	});
	
	//x keyword before it will ignore the Test case for execution
	xit('Should be able to login gmail application',function(){
		element(by.linkText('Gmail')).click();
		var Signin_heading_text = element(by.id('headingText')).getText();
		expect(Signin_heading_text).toBe('Sign in');
		element(by.id('identifierId')).sendkeys(value);
		element(by.buttonText('Next')).click();		
		var email_validation_text = element(by.id('profileIdentifier')).getText();
		expect(email_validation_text).toBe('sravankumarreddy.bade@gmail.com');
		element(by.name('password')).sendkeys('password');
		element(by.buttonText('Next')).click();
		var password_incorrect_error = element(by.css('#password > div.LXRPh > div.dEOOab.RxsGPe')).getText();
		expect(password_incorrect_error).toBe('Wrong password. Try again or click Forgot password to reset it.');		
	});
	
	//page object model for gmail login error validation
	it('Should be able to login gmail application by page object model',function(){
		gmail_page.click_gmail_link();
		var Signin_heading_text = gmail_page.Gmail_new_user_SignIn_header();
		expect(Signin_heading_text).toBe('Sign in');
		gmail_page.Email_address('sravankumarreddy.bade@gmail.com');
		gmail_page.click_Next();
		//When we use another page object model, we need assign the variable like below and call that page object name in next steps
		//Something like below
		//var xx_page = gmail_page.clickNext();
		//And use xx_page objects like below
		//xx_page.xx_pagefunction();
		var email_validation_text = gmail_page.populated_Email();
		expect(email_validation_text).toBe('sravankumarreddy.bade@gmail.com');
		gmail_page.Password('password');
		gmail_page.clickNext();
		var password_incorrect_error = gmail_page.incorrect_password_error();
		expect(password_incorrect_error).toBe('Wrong password. Try again or click Forgot password to reset it.');
	});
	
});