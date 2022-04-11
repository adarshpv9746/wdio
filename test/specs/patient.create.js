const patient = require('../pageobjects/tc/patientfile');
const dashboard = require('../pageobjects/dashboard/dashboard');
const LoginPage = require('../pageobjects/logins/login.page');


describe('Login test', () => {
    
    //browser.fullscreenwindow();
    
    it('should login ', async () => {
        browser.maximizeWindow()
        browser.url(`https://qa.practicecatapult.com/login`)
        await LoginPage.login('mac', 'Mac@123');
        
        
    });

    it('should click add patient ', async () => {
        await dashboard.addp_button();
        
    });

    it('should fill patient details ', async () => {
        
        await patient.create();
        
    });
    



});