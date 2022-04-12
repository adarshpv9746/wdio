const LoginPage = require('../pageobjects/logins/login.page');
const cart = require('../pageobjects/cart/cart.page');
qaunames = ["ctadmin","master","mac","front","location","doctor"];
qapaswds = ["Qb@123","Master@123","Mac@123","Tester@123","Location@123", "Doctor@123", ];

describe('Login test', () => {
    
    //browser.fullscreenwindow();
    it('should login to '+qaunames[1], async () => {
        browser.maximizeWindow()
        browser.url('/login')
        await LoginPage.login(qaunames[1], qapaswds[1]);
        
    });

    it('shoudl open cart page', async() =>{
        browser.url('/cart');
        await cart.pay();
    });
    



});