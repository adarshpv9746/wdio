const patient = require('../pageobjects/tc/patientfile');
const dashboard = require('../pageobjects/dashboard/dashboard');
const LoginPage = require('../pageobjects/logins/login.page');
const treatmentplan = require('../pageobjects/tc/treatmentplan');
const orthoaccept = require('../pageobjects/orthoacccept/orthoaccept');
const docusignPage = require('../pageobjects/docusign/docusign.page');
const cartPage = require('../pageobjects/cart/cart.page');

qaunames = ["ctadmin","tester76tc","tester76","litetc", "onelite@mailinator.com","protc","pro15","tiertc","tier","testtc","testi92","enterprisetc","enterprisemn","enterall","enterprac","sup_coo1_tc1","sup_coo1","alaskatc1","enteralaska"];
qapaswds = ["Qb@123", "Tester@123"];
//
// qaunames = ["ctadmin", "mac", "master", "front", "location", "doctor"];
// qapaswds = ["Qb@123", "Mac@123", "Master@123", "Tester@123", "Location@123", "Doctor@123",];

describe('Tx plan create and approve test :: ', () => {
    for(let i=0; i<qaunames.length-1; i=i+2){
        let a = i + 1;
        let b = i + 2;
        //browser.fullscreenwindow()
        it('should login as TC - ' + qaunames[a], async () => {
            //browser.maximizeWindow()
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

        it('should login as COO - ' + qaunames[b], async () => {
            browser.url(`/`)
            await LoginPage.login(qaunames[b], qapaswds[1]);

        });

        it('should approve the tx plan with HID - '+patient.v_hid, async()=>{
            await dashboard.approve(patient.v_hid);
        });

        it('should sign coo contract', async () => {
            await docusignPage.cootx();
            browser.url('/logout');
        });

    }
});
