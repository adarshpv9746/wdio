const LoginPage = require('../pageobjects/login.page');
const coodash = require('../pageobjects/dash.page');
const ctdash = require('../pageobjects/ctdash.page');
const prac = require('../pageobjects/addprac.page');
const SecurePage = require('../pageobjects/secure.page');
const docusign = require('../pageobjects/docusign.page');
const cartpage = require('../pageobjects/cart.page');
const adduser = require('../pageobjects/usermgnt.page');


describe('orthocatapult', () => {
    
    it('should login with valid credentials', async () => {
        browser.url(`http://qa.practicecatapult.com`)
        await LoginPage.login("ctadmin", 'Qb@123');
        
    });

    it('navigate to practice management', async () => {
        browser.getUrl();
        await ctdash.add_pract(); 
    });
    
    it('Add a practice', async () => {
        browser.getUrl();
        await prac.pract();
    });

    it('should login with valid credentials', async () => {
        //browser.url(`http://qa.practicecatapult.com`)
        await LoginPage.login(prac.user, 'Tester@123');
        
    });

    it('Complete signing the docusign contract', async () => {
        browser.getUrl();
        await docusign.act();
    });

    it('Complete payment', async () => {
        await cartpage.cart();
    });

    it('Add a new user', async () =>{
        //broswer.getUrl();
        await adduser.newuser();
    });

    

});