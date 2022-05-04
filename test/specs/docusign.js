const LoginPage = require('../pageobjects/logins/login.page');
//const coodash = require('../pageobjects/dash.page');
const ctdash = require('../pageobjects/masteradmn/ctdash.page');
const prac = require('../pageobjects/masteradmn/addprac.page');
const docusign = require('../pageobjects/docusign/docusign.page');
const adduser = require('../pageobjects/coo/usermgnt.page');
const orthoaccept = require('../pageobjects/orthoacccept/orthoaccept');


describe('orthocatapult', () => {
    

    it('open orthoaccept', async () => {
        await browser.url(`/ortho-accept/b92b2d8e9ebe03cedc2dfd24e9b9f773e1b9f972/26417?startnow=true&key=20009999`)
        await browser.pause(200);
        await orthoaccept.startnow();
        
    });

    it('Complete signing the docusign contract', async () => {
        browser.getUrl();
        await docusign.tx();
    });

    //it('Complete payment', async () => {
    //    await cartpage.cart();
    //});
    

});