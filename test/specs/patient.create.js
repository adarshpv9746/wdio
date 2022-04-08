const addPatient = require('../pageobjects/tc/add.patient');
const dashboard = require('../pageobjects/dashboard/dashboard');
const LoginPage = require('../pageobjects/logins/login.page');


describe('Login test', () => {
    
    //browser.fullscreenwindow();
    
    it('should login to ', async () => {
        browser.maximizeWindow()
        browser.url(`https://qa.practicecatapult.com/login`)
        await LoginPage.login('tc@clt.com', 'tc');
        
        
    });

    it('should click add patient ', async () => {
        await dashboard.addp_button();
        
    });

    it('should fill patient details ', async () => {
        
        await addPatient.create();
        
    });




});