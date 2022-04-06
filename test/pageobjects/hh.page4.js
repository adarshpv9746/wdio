///////////  PAGE 4  ///////////////


class hhfour {
    //HH form page 4 elements
    get dentalinsr () {return $("[value='Yes'][formcontrolname='hasPrimaryInsurance'] > .mdl-radio__ripple-container");}

    get plan () {return $("[formcontrolname='insurance_plan'] [placeholder]");}
    get plan1 () {return $("#insurance_plan_dropdown > a:nth-of-type(2)");}

    get phone () {return $("[formcontrolname='insurance_phone'] [placeholder]");}
    get staddr1 () {return $("[formcontrolname='insurance_street1'] [placeholder]");}
    get staddr2 () {return $("[formcontrolname='insurance_street2'] [placeholder]");}
    get city () {return $("[formcontrolname='insurance_city'] [placeholder]");}

    get state () {return $("[formcontrolname='insurance_state'] [placeholder]");}
    get state1 () {return $("[ng-reflect-value='Alabama'] > .mdl-list__item");}

    get zip () {return $("[formcontrolname='insurance_zip'] [placeholder]");}

    get country () {return $("[formcontrolname='insurance_country'] [placeholder]");}
    get country1 () {return $("mdl-option:nth-of-type(1) .mdl-list__item-primary-content");}

    get group () {return $("[formcontrolname='insurance_group'] [placeholder]");}
    get member () {return $("[formcontrolname='insurance_member_id'] [placeholder]");}
    get issuer () {return $("[formcontrolname='insurance_issuer_id'] [placeholder]");}

    get type () {return $("[formcontrolname='insurance_coverage_type'] [placeholder]");}
    get type1 () {return $("[ng-reflect-value='PPO'] > .mdl-list__item");}

    get relation () {return $("[formcontrolname='insurance_ph_relation'] [placeholder]");}
    get relation1 () {return $("[ng-reflect-value='mother'] > .mdl-list__item");}

    get fname () {return $("[formcontrolname='insurance_ph_first_name'] [placeholder]");}
    get mname () {return $("[formcontrolname='insurance_ph_middle_initial'] [placeholder]");}
    get lname () {return $("[formcontrolname='insurance_ph_last_name'] [placeholder]");}
    get ssnmbr () {return $("[formcontrolname='insurance_ph_ssn'] [placeholder]");}

    get dob () {return $("[ng-reflect-model][max='2022-03-28T11:52:32.715Z']");}
    get dobset () {return $(".mbsc-fr-btn1");}

    get emplyer () {return $("[formcontrolname='insurance_ph_employer'] [placeholder]");}
    get enmbr () {return $("[formcontrolname='insurance_ph_work_phone'] [placeholder]");}
    get copay () {return $("[formcontrolname='insurance_ph_co_pay'] [placeholder]");}
    get deductible () {return $("[formcontrolname='insurance_ph_deductible'] [placeholder]");}

    get addinsure () {return $(".is-checked[formcontrolname='hasSecondaryInsurance'] > .mdl-radio__ripple-container");}
    get next () {return $(".mat-primary[_ngcontent-lmn-c7] > .mat-button-wrapper");}

    async four () {
        await this.dentalinsr.click();
        
        await this.plan.click();
        await this.plan1.click();

        await this.phone.setValue("6654321231");
        await this.staddr1.setValue("testing");
        await this.staddr2.setValue("testing");
        await this.city.setValue("testing");

        await this.state.click();
        await this.state1.click();

        await this.zip.setValue("77654");

        await this.group.setValue("6754");
        await this.member.setValue("9807");
        await this.issuer.setValue("7765");

        await this.type.click();
        await this.type1.click();

        await this.relation.click();
        await this.relation1.click();

        await this.fname.setValue("testing");
        await this.mname.click();
        await this.lname.setValue("testing");
        await this.ssnmbr.setValue("665778979");

        await this.dob.click();
        await this.dobset.click();

        await this.emplyer.setValue("testing");
        await this.enmbr.click();
        await this.copay.setValue("435");
        await this.deductible.setValue("554");

        await this.addinsure.click();
        await this.next.click();
    }
}
module.exports = new hhfour();