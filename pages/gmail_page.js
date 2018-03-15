//require('../page/xx_page.js')

var gmail_page = function(){
	
	this.click_gmail_link = function(){
		element(by.linkText('Gmail')).click();
	};
	
	this.Gmail_new_user_SignIn_header = function(){
		return element(by.id('headingtext')).getText();
	};
	
	this.enteremail = function(value){
		element(by.id('identifierId')).sendkeys(value);
	};
	
	this.clickNext = function(){
		element(by.buttonText('Next')).click();
		//if we are using another new page object file after last action on current page, we can provide the reference here using return keyword
		//something like below
		//return require('./xx_page.js');
		//When we use this new page object we need to import this page object
	};
	
	this.populatedEmail = function(){
		return element(by.id('profileIdentifier')).getText();
	};
	
	this.enterpassword = function(value){
		element(by.name('password')).sendkeys(value);
	};
	
	this.incorrect_password_error = function(){
		return element(by.css('#password > div.LXRPh > div.dEOOab.RxsGPe')).getText();
	}
};

module.exports = new gmail_page();