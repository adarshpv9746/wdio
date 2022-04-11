const helper = require('../../helpers/helper');

class patient {
    user = "AUTO" + helper.uid(123456, 1000000);

    //Personal Details
    get new() { return $("//span[@class='mdl-button__ripple-container']"); }
    get f_name() { return $("//div[@class='common-card personal-detail-section']/div[@class='common-card-content']/div[1]//mdl-textfield[@class='required-label mdl-textfield is-upgraded mdl-textfield--floating-label ng-untouched ng-pristine ng-valid']//input[@class='mdl-textfield__input ng-untouched ng-pristine ng-valid ng-star-inserted']"); }
    get l_name() { return $("//div[@class='common-card personal-detail-section']/div[@class='common-card-content']/div[2]//mdl-textfield[@class='required-label mdl-textfield is-upgraded mdl-textfield--floating-label ng-untouched ng-pristine ng-valid']//input[@class='mdl-textfield__input ng-untouched ng-pristine ng-valid ng-star-inserted']"); }
    get dob() { return $("//div[@class='common-date-field']//input[@class='mdl-textfield__input ng-untouched ng-pristine ng-valid ng-star-inserted']"); }
    get h_id() { return $("//div[@class='common-card personal-detail-section']//div[2]/mdl-textfield[@class='required-label mdl-textfield is-upgraded mdl-textfield--floating-label ng-untouched ng-pristine ng-valid']//input[@class='mdl-textfield__input ng-untouched ng-pristine ng-valid ng-star-inserted']"); }
    get gen() { return $('/html[1]/body[1]/my-app[1]/div[2]/ng-component[1]/div[3]/div[1]/div[1]/div[2]/div[4]/div[1]/div[2]/mdl-radio[2]/span[4]'); }

    //Details
    get practloc() { return $("//div[@class='common-card detail-section']/div[@class='common-card-content']/div[1]//input[@class='mdl-textfield__input']"); }
    get option() { return $('/html/body/my-app/div[2]/ng-component/div[3]/div[1]/div[2]/div[2]/div[1]/mdl-select/div/mdl-popover/div/mdl-option[3]/div/div'); }
    get referal() { return $('/html/body/my-app/div[2]/ng-component/div[3]/div[1]/div[2]/div[2]/div[2]/span'); }
    get resource() { return $('//*[@id=\"referral_source\"]/a[1]'); }
    get initial() { return $('/html/body/my-app/div[2]/ng-component/div[3]/div[1]/div[2]/div[2]/div[3]/mdl-select/div/span[2]'); }
    get pref() { return $('/html/body/my-app/div[2]/ng-component/div[3]/div[1]/div[2]/div[2]/div[3]/mdl-select/div/mdl-popover/div/mdl-option[2]/div/div'); }

    //Responsible Party Contact Info
    get relationship() { return $('/html[1]/body[1]/my-app[1]/div[2]/ng-component[1]/div[3]/div[1]/div[3]/div[2]/div[1]/div[2]'); }
    get rfname() { return $("[ng-reflect-label='First Name'][ng-reflect-klass='required-label'] [placeholder]"); }
    get rlname() { return $("[ng-reflect-label='Last Name'][ng-reflect-klass='required-label'] [placeholder]"); }
    get rdob() { return $("/html[1]/body[1]/my-app[1]/div[2]/ng-component[1]/div[3]/div[1]/div[3]/div[2]/div[4]/div[1]/div[1]/img[1]"); }
    get rdobset() { return $(".mbsc-fr-btn1"); }
    get rrelation() { return $("/html[1]/body[1]/my-app[1]/div[2]/ng-component[1]/div[3]/div[1]/div[3]/div[2]/div[4]/div[2]/mdl-select[1]/div[1]/span[2]"); }
    get rrelationset() { return $("/html[1]/body[1]/my-app[1]/div[2]/ng-component[1]/div[3]/div[1]/div[3]/div[2]/div[4]/div[2]/mdl-select[1]/div[1]/mdl-popover[1]/div[1]/mdl-option[2]/div[1]"); }

    //Mailing Address
    get street() { return $("/html[1]/body[1]/my-app[1]/div[2]/ng-component[1]/div[3]/div[1]/div[3]/div[2]/div[7]/div[1]/mdl-textfield[1]/div[1]/input[1]"); }
    get city() { return $("/html[1]/body[1]/my-app[1]/div[2]/ng-component[1]/div[3]/div[1]/div[3]/div[2]/div[8]/div[1]/mdl-textfield[1]/div[1]/input[1]"); }
    //get country () {return $("//div[8]//input[@class='mdl-textfield__input']");}
    //get name () {return $("//div[@class='mdl-list__item is-active']/div[@class='mdl-list__item-primary-content']");}
    //get state () {return $("//div[9]//input[@class='mdl-textfield__input']");}
    //get alabma () {return $("//div[@class='mdl-list__item is-active']/div[@class='mdl-list__item-primary-content']");}
    get zipcode() { return $("/html[1]/body[1]/my-app[1]/div[2]/ng-component[1]/div[3]/div[1]/div[3]/div[2]/div[9]/div[2]/mdl-textfield[1]/div[1]/input[1]"); }
    get email() { return $("/html/body/my-app/div[2]/ng-component/div[3]/div[1]/div[3]/div[2]/mdl-textfield[1]/div/input"); }
    get con_email() { return $("/html/body/my-app/div[2]/ng-component/div[3]/div[1]/div[3]/div[2]/mdl-textfield[2]/div/input"); }
    get number() { return $("//input[@name='phone_number']"); }
    get method() { return $("//mdl-select[@class='required-label long-text capitalize-text mdl-select mdl-select--floating-label ng-untouched ng-valid ng-dirty']//input[@class='mdl-textfield__input']"); }
    get preferd() { return $("//mdl-option[1]//div[@class='mdl-list__item-primary-content']"); }

    //save pfile
    get save(){return $("/html/body/my-app/div[2]/ng-component/div[3]/div[2]/mdl-button[4]/span");}

    //save and create tx

    get savecreate() {retrurn$("//mdl-button[@class='draft send-tx-plan mdl-button ng-star-inserted']/span[@class='mdl-button__ripple-container']");}

    //Save and send HH form
    get sendhh() { return $("/html[1]/body[1]/my-app[1]/div[2]/ng-component[1]/div[3]/div[2]/mdl-button[2]/span[1]"); }

    //click hh drop
    get drophh() {return $("/html[1]/body[1]/my-app[1]/div[2]/ng-component[1]/div[3]/div[1]/div[1]/div[3]/div[1]/div[1]/mdl-button[1]")};
    //Present HH form
    get presenthh() { return $("/html[1]/body[1]/my-app[1]/div[2]/ng-component[1]/div[3]/div[1]/div[1]/div[3]/div[1]/div[1]/mdl-button[1]/div[1]/a[2]"); }

    get edit() { return $("/html[1]/body[1]/my-app[1]/div[2]/ng-component[1]/div[3]/div[1]/div[1]/div[3]/mdl-button[2]")};
    get clstoast() {return $("/html[1]/body[1]/mdl-snackbar-component[1]/div[1]/button[1]")};
    async create() {
        await browser.pause(4000)
        //await this.new.click();
        await this.f_name.setValue("Basic");
        await this.l_name.setValue("Check");
        await this.dob.setValue("01/01/2000");
        await this.h_id.setValue(this.user);
        await this.gen.click();

        //await browser.pause(3000)
        await this.practloc.click();
        await this.option.click();
        await this.referal.click();
        await this.resource.click();
        await this.initial.click();
        await this.pref.click();

        await this.relationship.click();
        await this.rfname.setValue("PFbasic");
        await this.rlname.setValue("PLbasic");
        await this.rdob.click();
        await this.rdobset.click();
        await this.rrelation.click();
        await this.rrelationset.click();

        await this.street.setValue("Alaska benton");
        await this.city.setValue("Street Basic");
        await this.zipcode.setValue("99999");
        await this.email.setValue("csicoet18@gmail.com");
        await this.con_email.setValue("csicoet18@gmail.com");
        await this.number.setValue("9090909999");
        await this.method.click();
        await this.preferd.click();

        await this.save.scrollIntoView();
        await this.save.click();
        await this.clstoast.click();
    }
    async hhpresent(){

        //await browser.pause(5000)
        await this.drophh.scrollIntoView();
        await this.drophh.click();
        await this.presenthh.click();
    }
}

module.exports = new patient();
