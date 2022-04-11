/////  PAGE 1  //////////
const helper = require('../../helpers/helper');

class hhone {
    //HH form page 1 elements
    get pfname() { return $("[formcontrolname='first_name'] [placeholder]"); }
    get plname() { return $("[formcontrolname='last_name'] [placeholder]"); }
    get gender() { return $("/html/body/my-app/div/ng-component/div[2]/mat-horizontal-stepper/div[2]/div[1]/form/patient-information/section/div[1]/form/div[2]/div[1]/div/div/div[2]/mdl-radio/span[4]"); }
    get streetadd() { return $("[formcontrolname='home_addr'] [placeholder]"); }
    get city() { return $("[formcontrolname='city'] [placeholder]"); }

    get state() { return $("[formcontrolname='state'] [placeholder]"); }
    get state1() { return $("[ng-reflect-value='Alabama'] .mdl-list__item-primary-content"); }

    get zipcode() { return $("[formcontrolname='zipcode'] [placeholder]"); }

    get country() { return $("[formcontrolname='country'] [placeholder]"); }
    get country1() { return $("mdl-option:nth-of-type(1) .mdl-list__item-primary-content"); }

    get dob() { return $("/html[1]/body[1]/my-app[1]/div[1]/ng-component[1]/div[2]/mat-horizontal-stepper[1]/div[2]/div[1]/form[1]/patient-information[1]/section[1]/div[1]/form[1]/div[4]/div[3]/div[1]/img[1]"); }
    get dobset() { return $(".mbsc-fr-btn1"); }

    get ssnumber() { return $("/html[1]/body[1]/my-app[1]/div[1]/ng-component[1]/div[2]/mat-horizontal-stepper[1]/div[2]/div[1]/form[1]/patient-information[1]/section[1]/div[1]/form[1]/div[4]/div[2]/div[1]/mdl-textfield[1]/div[1]/input[1]"); }

    get school() { return $("#mdl-textfield-94"); }
    get resides() { return $("[ng-reflect-name='resides_with_father'] > .mdl-checkbox__ripple-container"); }

    get next() { return $("/html[1]/body[1]/my-app[1]/div[1]/ng-component[1]/div[2]/mat-horizontal-stepper[1]/div[2]/div[1]/form[1]/patient-information[1]/section[1]/div[2]/button[1]/span[1]"); }
   

    async one() {

        await this.pfname.setValue(helper.test_string);
        await this.plname.setValue(helper.test_string);
        await this.gender.click();
        await this.streetadd.setValue(helper.test_string);
        await this.city.setValue(helper.test_string);

        await this.state.click();
        await this.state1.click();

        await this.zipcode.setValue("12322");

        await this.country.click();
        await this.country1.click();

        //await this.dob.click();
        //await this.dobset.click();

        await this.school.setValue(helper.test_string+12311);
        await this.resides.click();

        await this.next.click();

    }

}
module.exports = new hhone();