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
        await LoginPage.login("master", 'Master@123');
        
    });

    it('Add a new user', async () =>{
        browser.getUrl();
        await adduser.newuser();
    });//}

    

});