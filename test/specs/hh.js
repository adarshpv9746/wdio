const accessportal = require('../pageobjects/logins/access.login.page');
const hhPage1 = require('../pageobjects/hh/hh.page1');
const hhPage2 = require('../pageobjects/hh/hh.page2');
const hhPage3 = require('../pageobjects/hh/hh.page3');
const hhPage4 = require('../pageobjects/hh/hh.page4');
const hhPage5 = require('../pageobjects/hh/hh.page5');
const hhPage6 = require('../pageobjects/hh/hh.page6');
const hhPage7 = require('../pageobjects/hh/hh.page7');
const hhPage8 = require('../pageobjects/hh/hh.page8');


describe('HH form ', () => {
    
    //browser.fullscreenwindow();
    it('should login with valid credentials to access portal', async () => {
        browser.maximizeWindow()
        browser.url(`https://ortho.practicecatapult.com/health-history/1a54080229c34c0fa7be0a14554dfa90`)
        //browser.switchWindow();
        await accessportal.login('9999');
        
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