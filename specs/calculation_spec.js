var util = require('util')

describe('To test the Angular binding functionality', function(){
	
	beforeEach(function(){
		browser.waitForAngularEnabled(false);
		browser.get('http://www.way2automation.com/angularjs-protractor/calc/');
	});
	
    //Angular application automation for Calculation journey
	it('should not have any previous results', function () {
        logger.info("Table Handling scenario 1");
        var result = element.all(by.repeater('result in memory'));
        expect(result.count()).toEqual(0);
      });
      
    it('Should display calculation results for performed Arthematic operations and should save results in table',function(){
		logger.info("Table Handling scenario 2");
		var EC = protractor.ExpectedConditions;
		browser.wait(EC.visibilityOf(element(by.model('first'))), 10000);
        element(by.model('first')).sendKeys("10");
		//element(by.css('option[value="DIVISION"]')).click();
        element(by.cssContainingText('option', '/')).click();
        element(by.model('second')).sendKeys("5");
        element(by.buttonText('Go!')).click();
        
        browser.wait(EC.textToBePresentInElement((element(by.binding('latest'))), '2'), 10000);

        var result = element.all(by.repeater('result in memory'));
        expect(result.count()).toEqual(1);

        var result_elm = element.all(by.repeater('result in memory').column('result.value'));
        result_elm.then(function (arr) {
        expect(arr.length).toEqual(1);
        expect(arr[0].getText()).toEqual('2');
        });
    });
    
    it('Should display calculation results for performed Arthematic operations and should save new results in table',function(){
		logger.info("Table Handling scenario 3");
		var EC = protractor.ExpectedConditions;
		browser.wait(EC.visibilityOf(element(by.model('first'))), 10000);
        element(by.model('first')).sendKeys("5");
		//element(by.css('option[value="DIVISION"]')).click();
        element(by.cssContainingText('option', '+')).click();
        element(by.model('second')).sendKeys("5");
        element(by.buttonText('Go!')).click();
        
        browser.wait(EC.textToBePresentInElement((element(by.binding('latest'))), '10'), 5000);

        var result = element.all(by.repeater('result in memory'));
        expect(result.count()).toEqual(1);

        var result_elm = element.all(by.repeater('result in memory').column('result.value'));
        result_elm.then(function (arr) {
        expect(arr.length).toEqual(1);
        expect(arr[0].getText()).toEqual('10');
        });
	});
    
    xit('Should display calculation results for performed Arthematic operations and should save new results in table1',function(){
		logger.info("Table Handling scenario 4");
		//var EC = protractor.ExpectedConditions;
		//browser.wait(EC.visibilityOf(element(by.model('first'))), 10000);
        var operator = element(by.model('operator')).all(by.tagName('option'));
        
        operator.map(function(operators){
            console.log(operators);
            return operators;
        }).then(function(operators){
            var result;
            //console.log(operators.count());
            for(i=0;i<operators.length;i++){
                element(by.model('first')).sendKeys("5");
                operator.get(i).click();
                element(by.model('second')).sendKeys("5");
                element(by.buttonText('Go!')).click();
                result = element.all(by.repeater('result in memory'));
                browser.wait((result.count()).toEqual(i),5000);
                logger.info("Table Handling scenario 4");
            };
        });
    });

});