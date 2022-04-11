const helper = require('..//../helpers/helper');
///////////// PAGE 2  //////////


class hhtwo {
    //HH form page 2 elements
    //RESPONSIBLE PARTY
    get rfname() { return $("[formcontrolname='rp_first_name'] [placeholder]"); }
    get rlname() { return $("[formcontrolname='rp_last_name'] [placeholder]"); }

    get relation() { return $("[formcontrolname='rp_relation'] [placeholder]"); }
    get relation1() { return $("//mdl-option[2]//div[@class='mdl-list__item-primary-content']"); }

    get ssnumber() { return $("[formcontrolname='rp_ssn'] [placeholder]"); }

    get dob() { return $("/html[1]/body[1]/my-app[1]/div[1]/ng-component[1]/div[2]/mat-horizontal-stepper[1]/div[2]/div[2]/form[1]/guardian-info[1]/section[1]/div[1]/form[1]/div[2]/div[3]/div[1]/img[1]"); }
    get dobset() { return $(".mbsc-fr-btn1"); }

    get staddr() { return $("[formcontrolname='rp_addr'] [placeholder]"); }
    get city() { return $("[formcontrolname='rp_city'] [placeholder]"); }

    get state() { return $("[formcontrolname='rp_state'] .mdl-select__toggle"); }
    get state1() { return $("[ng-reflect-value='Alabama'] > .mdl-list__item"); }

    get zip() { return $("[formcontrolname='rp_zip'] [placeholder]"); }

    get country() { return $("[formcontrolname='rp_country'] [placeholder]"); }
    get country1() { return $("mdl-option:nth-of-type(1) .mdl-list__item-primary-content"); }

    get phone() { return $("[formcontrolname='rp_phone'] [placeholder]"); }
    get email() { return $("[formcontrolname='rp_email'] [placeholder]"); }
    get employer() { return $("[formcontrolname='rp_employer'] [placeholder]"); }
    get occupation() { return $("[formcontrolname='rp_occupation'] [placeholder]"); }
    get next() { return $("/html[1]/body[1]/my-app[1]/div[1]/ng-component[1]/div[2]/mat-horizontal-stepper[1]/div[2]/div[2]/form[1]/guardian-info[1]/section[1]/div[2]/button[2]"); }

    async two() {
        await this.rfname.setValue(helper.test_string);
        await this.rlname.setValue(helper.test_string);

        await this.relation.click();
        await this.relation1.click();

        await this.ssnumber.setValue("112223334");

        await this.dob.click();
        await this.dobset.click();

        await this.staddr.setValue(helper.test_string);
        await this.city.setValue(helper.test_string);

        await this.state.click();
        await this.state1.click();

        await this.zip.setValue("45321");

        await this.country.click();
        await this.country1.click();

        await this.phone.setValue("8765443354");
        await this.email.setValue(helper.test_mail);
        await this.employer.setValue(helper.test_string);
        await this.occupation.setValue(helper.test_string);

        await this.next.click();
    }
}

module.exports = new hhtwo();


