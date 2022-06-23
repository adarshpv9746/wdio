const patientType = require('../pageobjects/orthoconnect/adultChild');
const AnyConcern = require('../pageobjects/orthoconnect/anyConcern');
const HomePage = require('../pageobjects/orthoconnect/home.page');
const locationselect = require('../pageobjects/orthoconnect/location');
const concern = require('../pageobjects/orthoconnect/mainConcern');
const parent = require('../pageobjects/orthoconnect/parentDetails');
const pDetails = require('../pageobjects/orthoconnect/patientDetails');
const referral = require('../pageobjects/orthoconnect/referralMethod');
const snapper = require('../pageobjects/orthoconnect/snapPhotos');
const tOPtions = require('../pageobjects/orthoconnect/treatOPtion');
const vType = require('../pageobjects/orthoconnect/VirtualType');
//const allureReporter = require('@wdio/allure-reporter').default


describe('OrthoConnect', () => {
    it('Navigate to OrthoConnect home page', async () => {
        // await browser.setWindowSize(390,844)
        //browser.url(`https://plan.chat/NRaFtu`)
        browser.url('https://plan.chat/oLPx4w')
        await browser.pause(10000)
    });

    it('Start a virtual consulatation', async () => {
        await HomePage.start();
    });

    it('new Patient consulatation', async () => {
        await vType.type();
    });

    it('adult or child?', async () => {
        await patientType.pType();
    });

    it('treatment option', async () => {
        await browser.pause(1000)
        await tOPtions.option();
    });

    it('patient details', async () => {
        await pDetails.details();
    });

    it('parent details', async () => {
        await parent.paDetails();
    });

    it('select treatment location', async () => {
        await locationselect.select();
    });

    it('select referral method', async () => {
        await referral.method();
    });

    it('select main concern', async () => {
        await concern.selectConcern();
    });

    it('Any other concern', async () => {
        await browser.pause(2000)
        await AnyConcern.concern();
    });

    it('snap photos', async () => {
        await snapper.take();
        
    });

});


