/////  PAGE 1  //////////

class hhone {
    //HH form page 1 elements
    get pfname () {return $("[formcontrolname='first_name'] [placeholder]");}
    get plname () {return $("[formcontrolname='last_name'] [placeholder]");}
    get gender () {return $(".is-checked > .mdl-radio__ripple-container");}
    get streetadd () {return $("[formcontrolname='home_addr'] [placeholder]");}
    get city () {return $("[formcontrolname='city'] [placeholder]");}

    get state () {return $("[formcontrolname='state'] [placeholder]");}
    get state1 () {return $("[ng-reflect-value='Alabama'] .mdl-list__item-primary-content");}

    get zipcode () {return $("[formcontrolname='zipcode'] [placeholder]");}

    get country () {return $("[formcontrolname='country'] [placeholder]");}
    get country1 () {return $("mdl-option:nth-of-type(1) .mdl-list__item-primary-content");}

    get dob () {return $("/html/body/my-app/div/ng-component/div[2]/mat-horizontal-stepper/div[2]/div[1]/form/patient-information/section/div[1]/form/div[4]/div[2]/div/img");}
    get dobset () {return $(".mbsc-fr-btn1");}

    get school () {return $("/html/body/my-app/div/ng-component/div[2]/mat-horizontal-stepper/div[2]/div[1]/form/patient-information/section/div[1]/form/div[5]/div[2]/div/div/mdl-textfield/div/input");}
    get resides () {return $("[ng-reflect-name='resides_with_father'] > .mdl-checkbox__ripple-container");}
    
    get next () {return $("/html/body/my-app/div/ng-component/div[2]/mat-horizontal-stepper/div[2]/div[1]/form/patient-information/section/div[2]/button");}

    async one () {
        
        await this.pfname.setValue("testing");
        await this.plname.setValue("testing");
        await this.gender.click();
        await this.streetadd.setValue("testing");
        await this.city.setValue("testing");

        await this.state.click();
        await this.state1.click();

        await this.zipcode.setValue("12322");

        await this.country.click();
        await this.country1.click();

        await this.dob.click();
        await this.dobset.click();

        await this.school.setValue("GGJKLS");
        await this.resides.click();

        await this.next.click();

    }

}
module.exports = new hhone();