
const patient = require('../pageobjects/tc/patientfile');
const dashboard = require('../pageobjects/dashboard/dashboard');
const LoginPage = require('../pageobjects/logins/login.page');
const treatmentplan = require('../pageobjects/tc/treatmentplan');
const orthoaccept = require('../pageobjects/orthoacccept/orthoaccept');
const accessportal = require('../pageobjects/logins/access.login.page');
const docusignPage = require('../pageobjects/docusign/docusign.page');
const cartPage = require('../pageobjects/cart/cart.page');

//hh 
const hhPage1 = require('../pageobjects/hh/hh.page1');
const hhPage2 = require('../pageobjects/hh/hh.page2');
const hhPage3 = require('../pageobjects/hh/hh.page3');
const hhPage4 = require('../pageobjects/hh/hh.page4');
const hhPage5 = require('../pageobjects/hh/hh.page5');
const hhPage6 = require('../pageobjects/hh/hh.page6');
const hhPage7 = require('../pageobjects/hh/hh.page7');
const hhPage8 = require('../pageobjects/hh/hh.page8');

unames = ["master","mac","ctadmin","front","location","doctor"];
paswds = ["Master@123","Mac@123","Qb@123","Tester@123","Location@123", "Doctor@123", ];

//unames = ["twilio2@qbpractice", "coo@qbcalicut","antc","anpractice"];
//paswds = ["Pa$$w0rd!", "Pa$$w0rd!","Password123@","Password123@"];

//unames = ["TestDSO","sachinc+1@qburst.com"]
//paswds = ["Test1234","987654"]



describe('Basic-', () => {
    //browser.fullscreenwindow()
    it('should login as TC - '+unames[1], async () => {
        //browser.maximizeWindow()
        browser.url(`/`)
        await LoginPage.login(unames[1], paswds[1]);


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

    it('should login as COO - '+unames[0], async () => {
        browser.url(`/login`)
        await LoginPage.login(unames[0], paswds[0]);

    });

    it('should approve the tx plan with HID - '+patient.v_hid, async()=>{
        await dashboard.approve(patient.v_hid);
    });

    it('should sign coo contract', async()=>{
        await docusignPage.cootx();
        await browser.url('/logout');
    });

    it('should login as TC - '+unames[1], async () => {
        //browser.url(`/login`)
        await LoginPage.login(unames[1], paswds[1]);

    });

    it('should click pat with HID - '+patient.v_hid, async()=>{
        await dashboard.patient(patient.v_hid);
    });

    it('should click present hh',async() =>{
        await patient.hhpresent();
        await browser.pause(5000)
        const handle = await browser.getWindowHandles()
        await browser.switchToWindow(handle[1])
        browser.getUrl()
        //await browser.saveScreenshot('/home/qburst/Desktop/orthocatapult/wdio/test/screenshots/accessportal.png');
    });

    it('Should login to hh', async() =>{
        await accessportal.login('9999');
        //await browser.saveScreenshot('/home/qburst/Desktop/orthocatapult/wdio/test/screenshots/hhloggedin.png');
    });

    it('hh page1', async () => {
        browser.getUrl();
        await hhPage1.one(); 
    });
    
    it('hh page 2', async () => {
        browser.getUrl();
        await hhPage2.two();
    });

    it('hh page 3', async () => {
        browser.getUrl();
        await hhPage3.three();
    });

    it('hh page 4', async () => {
        browser.getUrl();
        await hhPage4.four();
    });

    it('hh page 5', async () => {
        browser.getUrl();
        await hhPage5.five();
    });

    it('hh page 6', async () => {
        browser.getUrl();
        await hhPage6.six();
    });
    it('hh page 7', async () => {
        browser.getUrl();
        await hhPage7.seven();
    });
    it('hh page 8', async () => {
        browser.getUrl();
        await hhPage8.eight();
    });









});