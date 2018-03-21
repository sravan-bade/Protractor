var util = require('util')

describe('To test the Angular Multiform handling functionality', function(){
	
	beforeEach(function(){
		browser.waitForAngularEnabled(false);
		browser.get('http://www.way2automation.com/angularjs-protractor/multiform');
	});
	
    //Angular application automation for Multiform journey
	it('Should display awesome popup on completion of multiform',function(){
		logger.info("Multiform success scenario");
		var EC = protractor.ExpectedConditions;
		browser.wait(EC.visibilityOf(element(by.model('formData.name'))), 10000);
        expect(element(by.css('a[href="#/form/profile"]')).getAttribute('class')).toBe('active');
        element(by.model('formData.name')).sendKeys("sravan");
		element(by.model('formData.email')).sendKeys("sravan@gmail.com");
        element(by.linkText('Next Section')).click();
        
        browser.wait(EC.visibilityOf(element(by.css('input[value="ps"]'))), 10000);
        expect(element(by.css('a[href="#/form/interests"]')).getAttribute('class')).toBe('active');
        browser.actions().mouseMove(element(by.css('input[value="ps"]'))).click().perform();        
        logger.info("after ps selection");
        element(by.linkText('Next Section')).click();

        browser.wait(EC.visibilityOf(element(by.buttonText('Submit'))), 10000);
        expect(element(by.css('a[href="#/form/payment"]')).getAttribute('class')).toBe('active');
        element(by.buttonText('Submit')).click();
        
        browser.switchTo().alert().then(function (alert) {
        expect(alert.getText()).toBe('awesome!');
        alert.accept();
        });
	});
    
});