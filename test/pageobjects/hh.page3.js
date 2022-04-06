////////////// PAGE 3  //////////

class hhthree {
    //Emergency contact information
    get ecname () {return $("[formcontrolname='emergency_contact'] [placeholder]");}

    get relation () {return $("[formcontrolname='emergency_relation'] [placeholder]");}
    get relation1 () {return $("[ng-reflect-value='aunt/uncle'] .mdl-list__item-primary-content");}

    get phone () {return $("[formcontrolname='emergency_phone'] [placeholder]");}
    get stadrr () {return $("[formcontrolname='emergency_addr'] [placeholder]");}
    get city () {return $("[formcontrolname='emergency_city'] [placeholder]");}
    
    get state () {return $("[formcontrolname='emergency_state'] [placeholder]");}
    get state1 () {return $("[ng-reflect-value='Alabama'] .mdl-list__item-primary-content");}

    get zip () {return $("[formcontrolname='emergency_zip'] [placeholder]");}

    get country () {return $("[formcontrolname='emergency_country'] [placeholder]");}
    get country1 () {return $("mdl-option:nth-of-type(1) .mdl-list__item-primary-content");}

    get pok () {return $("[formcontrolname='person_to_release_appointment'] [placeholder]");}

    get childrelation () {return $("[formcontrolname='person_relation'] [placeholder]");}
    get childrelation1 () {return $("[ng-reflect-value='grandparent'] > .mdl-list__item");}

    get next () {return $(".mat-primary[_ngcontent-lmn-c6] > .mat-button-wrapper");}

    async three () {
        await this.ecname.setValue("testing");

        await this.relation.click();
        await this.relation1.click();

        await this.phone.setValue("8796554332");
        await this.stadrr.setValue("testing");
        await this.city.setValue("testing");

        await this.state.click();
        await this.state1.click();

        await this.zip.setValue("54677");

        await this.country.click();
        await this.country1.click();

        await this.pok.setValue("testing");

        await this.childrelation.click();
        await this.childrelation1.click();

        await this.next.click();

    }
}
module.exports = new hhthree();