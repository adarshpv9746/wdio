const helper = require('..//../helpers/helper');
////////////// PAGE 6  //////////////////


class hhsix {
    //HH form page 6 elements
    get physician() { return $("/html[1]/body[1]/my-app[1]/div[1]/ng-component[1]/div[2]/mat-horizontal-stepper[1]/div[2]/div[6]/form[1]/medical-history[1]/section[1]/div[1]/form[1]/div[1]/div[1]/div[1]/div[1]/mdl-radio[1]/span[4]"); }
    get reason() { return $("/html[1]/body[1]/my-app[1]/div[1]/ng-component[1]/div[2]/mat-horizontal-stepper[1]/div[2]/div[6]/form[1]/medical-history[1]/section[1]/div[1]/form[1]/div[1]/div[2]/mdl-textfield[1]/div[1]/input[1]"); }
    get visit() { return $("/html[1]/body[1]/my-app[1]/div[1]/ng-component[1]/div[2]/mat-horizontal-stepper[1]/div[2]/div[6]/form[1]/medical-history[1]/section[1]/div[1]/form[1]/div[2]/div[1]/div[1]/img[1]"); }
    get set() { return $(".mbsc-fr-btn1"); }
    get phy() { return $("/html[1]/body[1]/my-app[1]/div[1]/ng-component[1]/div[2]/mat-horizontal-stepper[1]/div[2]/div[6]/form[1]/medical-history[1]/section[1]/div[1]/form[1]/div[2]/div[2]/mdl-textfield[1]/div[1]/input[1]"); }
    get phone() { return $("/html[1]/body[1]/my-app[1]/div[1]/ng-component[1]/div[2]/mat-horizontal-stepper[1]/div[2]/div[6]/form[1]/medical-history[1]/section[1]/div[1]/form[1]/div[2]/div[3]/mdl-textfield[1]/div[1]/input[1]"); }

    get medications() { return $("/html[1]/body[1]/my-app[1]/div[1]/ng-component[1]/div[2]/mat-horizontal-stepper[1]/div[2]/div[6]/form[1]/medical-history[1]/section[1]/div[1]/form[1]/div[3]/div[1]/div[1]/div[1]/mdl-radio[1]/span[4]"); }
    get dosage() { return $("/html[1]/body[1]/my-app[1]/div[1]/ng-component[1]/div[2]/mat-horizontal-stepper[1]/div[2]/div[6]/form[1]/medical-history[1]/section[1]/div[1]/form[1]/div[3]/div[2]/mdl-textfield[1]/div[1]/input[1]"); }

    get illness() { return $("/html[1]/body[1]/my-app[1]/div[1]/ng-component[1]/div[2]/mat-horizontal-stepper[1]/div[2]/div[6]/form[1]/medical-history[1]/section[1]/div[1]/form[1]/div[4]/div[1]/div[1]/div[1]/mdl-radio[1]/span[4]"); }
    get describe() { return $("/html[1]/body[1]/my-app[1]/div[1]/ng-component[1]/div[2]/mat-horizontal-stepper[1]/div[2]/div[6]/form[1]/medical-history[1]/section[1]/div[1]/form[1]/div[4]/div[2]/mdl-textfield[1]/div[1]/input[1]"); }

    get trans() { return $("/html[1]/body[1]/my-app[1]/div[1]/ng-component[1]/div[2]/mat-horizontal-stepper[1]/div[2]/div[6]/form[1]/medical-history[1]/section[1]/div[1]/form[1]/div[5]/div[1]/div[1]/div[1]/mdl-radio[1]/span[4]"); }
    get dates() { return $("/html[1]/body[1]/my-app[1]/div[1]/ng-component[1]/div[2]/mat-horizontal-stepper[1]/div[2]/div[6]/form[1]/medical-history[1]/section[1]/div[1]/form[1]/div[5]/div[2]/mdl-textfield[1]/div[1]/input[1]"); }

    get preg() { return $("/html[1]/body[1]/my-app[1]/div[1]/ng-component[1]/div[2]/mat-horizontal-stepper[1]/div[2]/div[6]/form[1]/medical-history[1]/section[1]/div[1]/form[1]/div[6]/div[1]/div[1]/div[2]/mdl-radio[1]/span[4]"); }
    get nursing() { return $("/html[1]/body[1]/my-app[1]/div[1]/ng-component[1]/div[2]/mat-horizontal-stepper[1]/div[2]/div[6]/form[1]/medical-history[1]/section[1]/div[1]/form[1]/div[6]/div[2]/div[1]/div[1]/mdl-radio[1]/span[4]"); }

    get penicilin() { return $("/html[1]/body[1]/my-app[1]/div[1]/ng-component[1]/div[2]/mat-horizontal-stepper[1]/div[2]/div[6]/form[1]/medical-history[1]/section[1]/div[1]/form[1]/div[7]/div[1]/div[3]/div[1]/mdl-checkbox[1]/span[4]"); }
    get other() { return $("/html[1]/body[1]/my-app[1]/div[1]/ng-component[1]/div[2]/mat-horizontal-stepper[1]/div[2]/div[6]/form[1]/medical-history[1]/section[1]/div[1]/form[1]/div[8]/div[1]/div[1]/div[1]/mdl-checkbox[1]/span[4]"); }
    get other1() { return $("/html[1]/body[1]/my-app[1]/div[1]/ng-component[1]/div[2]/mat-horizontal-stepper[1]/div[2]/div[6]/form[1]/medical-history[1]/section[1]/div[1]/form[1]/div[8]/div[1]/div[1]/div[2]/mdl-textfield[1]/div[1]/input[1]"); }
    get cancer() { return $("/html[1]/body[1]/my-app[1]/div[1]/ng-component[1]/div[2]/mat-horizontal-stepper[1]/div[2]/div[6]/form[1]/medical-history[1]/section[1]/div[1]/form[1]/div[9]/div[1]/div[3]/div[1]/mdl-checkbox[1]/span[4]"); }
    get next() { return $("/html[1]/body[1]/my-app[1]/div[1]/ng-component[1]/div[2]/mat-horizontal-stepper[1]/div[2]/div[6]/form[1]/medical-history[1]/section[1]/div[2]/button[2]"); }

    async six() {
        //await browser.pause(2000)
        await this.physician.click();
        await this.reason.setValue(helper.test_string);
        await this.visit.click();
        await this.set.click();
        await this.phone.setValue("0000009000");
        await this.phy.setValue(helper.test_string);
        await browser.pause(3000)

        await this.medications.click();
        await this.dosage.setValue(helper.test_string+89);

        await this.illness.click();
        await this.describe.setValue(helper.test_string+89);

        await browser.pause(1000)
        await this.trans.click();
        await this.dates.setValue(helper.test_string+5689);

        await this.preg.click();
        await this.nursing.click();

        //await this.penicilin.scrollIntoView();
        await this.penicilin.click();
        await this.other.click();
        await this.other1.setValue(helper.test_string);
        await this.cancer.click();
        await this.next.click();
        //await browser.pause(7000)


    }
}

module.exports = new hhsix();