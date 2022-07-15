const patient = require('../pageobjects/tc/patientfile');
const dashboard = require('../pageobjects/dashboard/dashboard');
const LoginPage = require('../pageobjects/logins/login.page');
const treatmentplan = require('../pageobjects/tc/treatmentplan');
const orthoaccept = require('../pageobjects/orthoacccept/orthoaccept');
const docusignPage = require('../pageobjects/docusign/docusign.page');
const cartPage = require('../pageobjects/cart/cart.page');

qaunames = ["onelite@mailinator.com","pro15","tier","testi92","enterprisemn","enterprac","sup_coo1"];
qapaswds = ["Tester@123"];
hid = ["WEESELY611067"]
// qaunames = ["ctadmin", "mac", "master", "front", "location", "doctor"];
// qapaswds = ["Qb@123", "Mac@123", "Master@123", "Tester@123", "Location@123", "Doctor@123",];

describe('Tx plan create and approve test :: ', () => {

        it('should login as COO - ' + qaunames[0], async () => {
            browser.url(`/`)
            await LoginPage.login(qaunames[0], qapaswds[0]);

        });

        it('should approve the tx plan with HID - '+hid[0], async()=>{
            await dashboard.approve(hid[0]);
        });

        it('should sign coo contract', async () => {
            await docusignPage.cootx();
            browser.url('/logout');
        });
});
