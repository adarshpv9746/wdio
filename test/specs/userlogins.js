const LoginPage = require('../pageobjects/logins/login.page');
qaunames = ["ctadmin","master","mac","front","location","doctor"];
qapaswds = ["Qb@123","Master@123","Mac@123","Tester@123","Location@123", "Doctor@123", ];

describe('Login test', () => {
    
    //browser.fullscreenwindow();
    for (let i=0; i<qaunames.length;i++){
    it('should login to '+qaunames[i], async () => {
        browser.maximizeWindow()
        browser.url(`https://qa.practicecatapult.com/login`)
        await LoginPage.login(qaunames[i], qapaswds[i]);
        browser.url('https://qa.practicecatapult.com/logout');
        
        
    });}



});