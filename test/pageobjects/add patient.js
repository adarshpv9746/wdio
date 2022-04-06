const helper = require('/home/qburst/Desktop/TP/test/pageobjects/helper.js');

class patient {
    /**
     * define selectors using getter methods
     */
    get new () {return $("//span[@class='mdl-button__ripple-container']");}
    get f_name () {return $('//*[@id="mdl-textfield-11"]');}
    get l_name () {return $('//*[@id=\"mdl-textfield-13\"]');}
    get dob () {return $('//*[@id=\"mdl-textfield-15\"]');}
    get h_id () {return $('//*[@id=\"mdl-textfield-17\"]');}
    get gen () {return $('/html/body/my-app/div[2]/ng-component/div[3]/div[1]/div[1]/div[2]/div[4]/div[1]/div[2]/mdl-radio[1]/span[4]');}
    get practloc () {return $("//div[@class='common-card detail-section']/div[@class='common-card-content']/div[1]//input[@class='mdl-textfield__input']");}
    get option () {return $('/html/body/my-app/div[2]/ng-component/div[3]/div[1]/div[2]/div[2]/div[1]/mdl-select/div/mdl-popover/div/mdl-option[3]/div/div');}
    get referal () {return $('/html/body/my-app/div[2]/ng-component/div[3]/div[1]/div[2]/div[2]/div[2]/span');}
    get resource () {return $('//*[@id=\"referral_source\"]/a[1]');}
    get initial () {return $('/html/body/my-app/div[2]/ng-component/div[3]/div[1]/div[2]/div[2]/div[3]/mdl-select/div/span[2]');}
    get pref () {return $('/html/body/my-app/div[2]/ng-component/div[3]/div[1]/div[2]/div[2]/div[3]/mdl-select/div/mdl-popover/div/mdl-option[2]/div/div');}
    get relationship () {return $('/html/body/my-app/div[2]/ng-component/div[3]/div[1]/div[3]/div[2]/div[1]/div[2]/mdl-radio[1]/span[4]');}
    get street () {return $('/html/body/my-app/div[2]/ng-component/div[3]/div[1]/div[3]/div[2]/div[6]/div[1]/mdl-textfield/div/input');}
    get city () {return $('/html/body/my-app/div[2]/ng-component/div[3]/div[1]/div[3]/div[2]/div[7]/div[1]/mdl-textfield/div/input');}
    //get country () {return $("//div[8]//input[@class='mdl-textfield__input']");}
    //get name () {return $("//div[@class='mdl-list__item is-active']/div[@class='mdl-list__item-primary-content']");}
    //get state () {return $("//div[9]//input[@class='mdl-textfield__input']");}
    //get alabma () {return $("//div[@class='mdl-list__item is-active']/div[@class='mdl-list__item-primary-content']");}
    get zipcode () {return $("/html/body/my-app/div[2]/ng-component/div[3]/div[1]/div[3]/div[2]/div[8]/div[2]/mdl-textfield/div/input");}
    get email () {return $("/html/body/my-app/div[2]/ng-component/div[3]/div[1]/div[3]/div[2]/mdl-textfield[1]/div/input");}
    get con_email () {return $("/html/body/my-app/div[2]/ng-component/div[3]/div[1]/div[3]/div[2]/mdl-textfield[2]/div/input");}
    get number () {return $("//input[@name='phone_number']");}
    get method () {return $("//mdl-select[@class='required-label long-text capitalize-text mdl-select mdl-select--floating-label ng-untouched ng-valid ng-dirty']//input[@class='mdl-textfield__input']");}
    get preferd () {return $("//mdl-option[1]//div[@class='mdl-list__item-primary-content']");}
    get treatmnt () {return $("//mdl-button[@class='draft send-tx-plan mdl-button ng-star-inserted']/span[@class='mdl-button__ripple-container']");}
    //get present () {return $("//img[@src='assets/present.dd8456b8e918a58731d6af15f69fa43d.svg']");}
    









    async create () {
        let user = "abc"+helper.healthid(123456,1000000);
        await this.new.click();
        await this.f_name.setValue("archana");
        await this.l_name.setValue("k");
        await this.dob.setValue("01/01/2000");
        await this.h_id.setValue(user);
        await this.gen.click();
        await this.practloc.click();
        await this.option.click();
        await this.referal.click();
        await this.resource.click();
        await this.initial.click();
        await this.pref.click();
        await this.relationship.click();
        await this.street.setValue("maveli");
        await this.city.setValue("thambanur");
        //await this.country.click();
        //await this.name.click();
        //await this.state.click();
        //await this.alabma.click();
        await this.zipcode.setValue("78976");
        await this.email.setValue("drorerelug@memsg.top");
        await this.con_email.setValue("drorerelug@memsg.top");
        await this.number.setValue("9090909990");
        await this.method.click();
        await this.preferd.click();
        await this.treatmnt.click();
        //await this.present.click();
}
}

module.exports = new patient();
