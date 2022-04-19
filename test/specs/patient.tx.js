const patient = require('../pageobjects/tc/patientfile');
const dashboard = require('../pageobjects/dashboard/dashboard');
const LoginPage = require('../pageobjects/logins/login.page');
const treatmentplan = require('../pageobjects/tc/treatmentplan');
const orthoaccept = require('../pageobjects/orthoacccept/orthoaccept');
const docusignPage = require('../pageobjects/docusign/docusign.page');
const cartPage = require('../pageobjects/cart/cart.page');
qaunames = ["ctadmin","master","mac","front","location","doctor"];
qapaswds = ["Qb@123","Master@123","Mac@123","Tester@123","Location@123", "Doctor@123", ];

describe('Tx plan create and approve test :: ', () => {
    //browser.fullscreenwindow()
    it('should login as TC - '+qaunames[2], async () => {
        browser.maximizeWindow()
        browser.url(`https://qa.practicecatapult.com/login`)
        await LoginPage.login(qaunames[2], qapaswds[2]);


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

    it('should sign patients docusign', async()=>{
        await docusignPage.tx();
    });

    it('should perform cart payment', async()=>{
        await cartPage.txpay();
    });

    it('should login as COO - '+qaunames[1], async () => {
        browser.url(`https://qa.practicecatapult.com/login`)
        await LoginPage.login(qaunames[1], qapaswds[1]);

    });

    it('should approve the tx plan with HID - '+patient.v_hid, async()=>{
        await dashboard.approve(patient.v_hid);
    });

    it('should sign coo contract', async()=>{
        await docusignPage.cootx();
    });







});