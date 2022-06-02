const LoginPage = require('../pageobjects/logins/login.page');
qaunames = ["master","coo@qbcalicut","twilio2@qbpractice"];
qapaswds = ["Master@123","Pa$$w0rd!"];

describe('Login test', () => {
    
    //browser.fullscreenwindow();
    it('should login to '+qaunames[0], async () => {
        //browser.maximizeWindow()
        browser.url('/login')
        await LoginPage.login(qaunames[0], qapaswds[0]);
        await browser.pause(500);
        await $('/html/body/my-app/div[2]/ng-component/ng-component/div/div[3]/div[2]/div[2]').scrollIntoView();
        await $('/html[1]/body[1]/my-app[1]/div[2]/ng-component[1]/ng-component[1]/div[1]/div[3]/div[5]/mdl-card[1]').click();
        await browser.pause(500);
        //browser.url('/logout');
        
        
    });



});