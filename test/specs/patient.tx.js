const patient = require('../pageobjects/tc/patientfile');
const dashboard = require('../pageobjects/dashboard/dashboard');
const LoginPage = require('../pageobjects/logins/login.page');
const treatmentplan = require('../pageobjects/tc/treatmentplan');
const orthoaccept = require('../pageobjects/orthoacccept/orthoaccept');
const docusignPage = require('../pageobjects/docusign/docusign.page');
const cartPage = require('../pageobjects/cart/cart.page');


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
    
    it('should click create tx plan', async()=>{
        await patient.createtx();
    });

    it('Should start tx for a patient', async()=>{
        await treatmentplan.add_plan();
    });

    it('Should navigate to Orthoaccept and start plan', async()=>{
        await orthoaccept.startnow();
    });

    it('should sign docusign', async()=>{
        await docusignPage.tx();
    });

    it('should perform cart payment', async()=>{
        await cartPage.pay();
    });





});