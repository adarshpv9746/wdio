const LoginPage = require('../pageobjects/logins/login.page');
const cart = require('../pageobjects/cart/cart.page');
//const coodash = require('../pageobjects/dash.page');
const ctdash = require('../pageobjects/masteradmn/ctdash.page');
const prac = require('../pageobjects/masteradmn/addprac.page');
const docusign = require('../pageobjects/docusign/docusign.page');
const adduser = require('../pageobjects/coo/usermgnt.page');


describe('orthocatapult practice creation and activation', () => {
    //for (let i=0; i<5;i++){
    it('should login with valid credentials', async () => {
        browser.url(`/`)
        await LoginPage.login("ctadmin", 'Qb@123');
        
    });

    it('navigate to practice management', async () => {
        //browser.getUrl();
        await ctdash.add_pract(); 
    });
    
    it('Add a practice', async () => {
        //browser.getUrl();
        await prac.pract();
    });

    it('should login with valid credentials', async () => {
        browser.url(`/`)
        await LoginPage.login(prac.username, 'Tester@123');
        
    });

    it('Complete signing the docusign contract', async () => {
        browser.getUrl();
        await docusign.act();
    });

    // it('Complete payment', async () => {
        
    //     await cart.pay();
    //     await browser.url('/logout')
    // });//}

    // it('Add a new user', async () =>{
    //     browser.getUrl();
    //     await adduser.newuser();
    // });

    

});