const LoginPage = require('../pageobjects/logins/login.page');
//const coodash = require('../pageobjects/dash.page');
const ctdash = require('../pageobjects/masteradmn/ctdash.page');
const prac = require('../pageobjects/masteradmn/addprac.page');
const docusign = require('../pageobjects/docusign/docusign.page');
const adduser = require('../pageobjects/coo/usermgnt.page');


describe('orthocatapult', () => {
    

    it('should login with valid credentials', async () => {
        browser.url(`http://qa.practicecatapult.com`)
        await LoginPage.login('tester50', 'Tester@123');
        browser.pause(200);
        
    });

    it('Complete signing the docusign contract', async () => {
        browser.getUrl();
        await docusign.act();
    });

    //it('Complete payment', async () => {
    //    await cartpage.cart();
    //});
    

});