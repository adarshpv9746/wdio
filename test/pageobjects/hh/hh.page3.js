const helper = require('../../helpers/helper');
////////////// PAGE 3  //////////

class hhthree {
    //Emergency contact information
    get ecname() { return $("[formcontrolname='emergency_contact'] [placeholder]"); }

    get relation() { return $("[formcontrolname='emergency_relation'] [placeholder]"); }
    get relation1() { return $("/html[1]/body[1]/my-app[1]/div[1]/ng-component[1]/div[2]/mat-horizontal-stepper[1]/div[2]/div[3]/form[1]/emergency-contact[1]/section[1]/div[1]/form[1]/div[1]/div[2]/div[1]/mdl-select[1]/div[1]/mdl-popover[1]/div[1]/mdl-option[2]/div[1]/div[1]"); }

    get phone() { return $("[formcontrolname='emergency_phone'] [placeholder]"); }
    get stadrr() { return $("[formcontrolname='emergency_addr'] [placeholder]"); }
    get city() { return $("[formcontrolname='emergency_city'] [placeholder]"); }

    get state() { return $("[formcontrolname='emergency_state'] [placeholder]"); }
    get state1() { return $("/html[1]/body[1]/my-app[1]/div[1]/ng-component[1]/div[2]/mat-horizontal-stepper[1]/div[2]/div[3]/form[1]/emergency-contact[1]/section[1]/div[1]/form[1]/div[5]/div[1]/div[1]/mdl-select[1]/div[1]/mdl-popover[1]/div[1]/mdl-option[1]/div[1]"); }

    get zip() { return $("[formcontrolname='emergency_zip'] [placeholder]"); }

    get country() { return $("[formcontrolname='emergency_country'] [placeholder]"); }
    get country1() { return $("mdl-option:nth-of-type(1) .mdl-list__item-primary-content"); }

    get pok() { return $("[formcontrolname='person_to_release_appointment'] [placeholder]"); }

    get childrelation() { return $("[formcontrolname='person_relation'] [placeholder]"); }
    get childrelation1() { return $("/html[1]/body[1]/my-app[1]/div[1]/ng-component[1]/div[2]/mat-horizontal-stepper[1]/div[2]/div[3]/form[1]/emergency-contact[1]/section[1]/div[1]/form[1]/div[6]/div[2]/div[1]/mdl-select[1]/div[1]/mdl-popover[1]/div[1]/mdl-option[2]/div[1]/div[1]"); }

    get next() { return $("/html[1]/body[1]/my-app[1]/div[1]/ng-component[1]/div[2]/mat-horizontal-stepper[1]/div[2]/div[3]/form[1]/emergency-contact[1]/section[1]/div[2]/button[2]"); }

    async three() {
        await this.ecname.setValue(helper.test_string);

        await this.relation.click();
        await this.relation1.click();

        await this.phone.setValue("8796554332");
        await this.stadrr.setValue(helper.test_string);
        await this.city.setValue(helper.test_string);

        await this.state.click();
        await this.state1.click();

        await this.zip.setValue("54677");

        await this.country.click();
        await this.country1.click();

        await this.pok.setValue(helper.test_string);

        await this.childrelation.click();
        await this.childrelation1.click();

        await this.next.click();

    }
}
module.exports = new hhthree();