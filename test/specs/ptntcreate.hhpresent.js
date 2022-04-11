const patient = require('../pageobjects/tc/patientfile');
const dashboard = require('../pageobjects/dashboard/dashboard');
const LoginPage = require('../pageobjects/logins/login.page');
const orthoaccept = require('../pageobjects/logins/access.login.page');
const hhPage1 = require('../pageobjects/hh/hh.page1');
const hhPage2 = require('../pageobjects/hh/hh.page2');
const hhPage3 = require('../pageobjects/hh/hh.page3');
const hhPage4 = require('../pageobjects/hh/hh.page4');
const hhPage5 = require('../pageobjects/hh/hh.page5');
const hhPage6 = require('../pageobjects/hh/hh.page6');
const hhPage7 = require('../pageobjects/hh/hh.page7');
const hhPage8 = require('../pageobjects/hh/hh.page8');



describe('Login test', () => {
    
    //browser.fullscreenwindow();
    
    it('should login to ', async () => {
        browser.maximizeWindow()
        browser.url(`/`)
        await LoginPage.login('mac', 'Mac@123');
        await browser.saveScreenshot('/home/qburst/Desktop/orthocatapult/wdio/test/screenshots/dashboard.png');
        
    });

    it('should click add patient ', async () => {
        await dashboard.addp_button();
        await browser.saveScreenshot('/home/qburst/Desktop/orthocatapult/wdio/test/screenshots/peditpage.png');
        
    });

    it('should fill patient details ', async () => {
        
        await patient.create();
        await browser.saveScreenshot('/home/qburst/Desktop/orthocatapult/wdio/test/screenshots/pfile.png');
        
    });

    it('should click present hh',async() =>{
        await patient.hhpresent();
        await browser.pause(5000)
        const handle = await browser.getWindowHandles()
        await browser.switchToWindow(handle[1])
        browser.getUrl()
        await browser.saveScreenshot('/home/qburst/Desktop/orthocatapult/wdio/test/screenshots/accessportal.png');
    });

    it('Should login to hh', async() =>{
        await orthoaccept.login('9999');
        await browser.saveScreenshot('/home/qburst/Desktop/orthocatapult/wdio/test/screenshots/hhloggedin.png');
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
        await browser.saveScreenshot('/home/qburst/Desktop/orthocatapult/wdio/test/screenshots/hhsuccess.png');
    });


});