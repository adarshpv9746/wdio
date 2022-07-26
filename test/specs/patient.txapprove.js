const patient = require('../pageobjects/tc/patientfile');
const dashboard = require('../pageobjects/dashboard/dashboard');
const LoginPage = require('../pageobjects/logins/login.page');
const treatmentplan = require('../pageobjects/tc/treatmentplan');
const orthoaccept = require('../pageobjects/orthoacccept/orthoaccept');
const docusignPage = require('../pageobjects/docusign/docusign.page');
const cartPage = require('../pageobjects/cart/cart.page');

qaunames = ["ctadmin","litetc","protc","tiertc","testtc","enterprisetc","enterall","sup_coo1_tc1","alaskatc1"];
qapaswds = ["Qb@123","Tester@123"];
//testi92::tcname is  (docusign issue)
qaunames = ["ctadmin","alaskatc1","enteralaska"]
qapaswds = ["Qb@123","Tester@123"];

// qaunames = ["ctadmin","master","mac","front","location","doctor"];
// qapaswds = ["Qb@123","Master@123","Mac@123","Tester@123","Location@123", "Doctor@123", ];
i=0;
describe('Tx plan create and approve test :: ', () => {
    //browser.fullscreenwindow()
    for(let i=0; i<qaunames.length; i=i++){
        let a = i + 1;
        let b = i + 2;
        //browser.fullscreenwindow()
        it('should login as TC - ' + qaunames[a], async () => {
            browser.maximizeWindow()
            await browser.url(`/`)
            await LoginPage.login(qaunames[a], qapaswds[1]);


        });

        it('should click add patient ', async () => {
            await dashboard.addp_button();

        });

        it('should fill patient details ', async () => {

            await patient.create();

        });

        it('should click create tx plan', async () => {
            await patient.createtx();
        });

        it('Should start tx for a patient', async () => {
            await treatmentplan.add_plan();
        });

        it('Should navigate to Orthoaccept and start plan', async () => {
            await orthoaccept.startnow();
        });

        it('should sign patients docusign', async () => {
            await docusignPage.tx();
        });

        it('should perform cart payment', async () => {
            await cartPage.txpay();
        });
    }
});