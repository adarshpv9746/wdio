const helper = require('../../helpers/helper');

class patient {
    v_f_name = "Basic" 
    v_m_name = "MBasic"
    v_l_name = "LBasic"
    v_n_name = "NBasic"
    v_dob = "12/12/2000"
    v_hid = "AUTO" + helper.uid(123456, 1000000);
    //v_hidd = Date.now()
    v_notes = "Basic note"
    v_pfname = "BasicP"
    v_pmname = "BasicPM"
    v_plname = "BasicPL"
    v_pdob = "12/12/2000"
    v_saddr1 = "Basic address 1"
    v_addr2 = "Basic address 2"
    v_city = "Basic city"
    v_country = "Basic Country"
    v_state = "Basic State"
    v_zip = "99999"
    v_email = "{wewrty}56*@As34-r"
    v_cemail = "csicoet18@gmail.com"
    v_phone = "9999999999"

    //Personal Details
    get new() { return $("//span[@class='mdl-button__ripple-container']"); }
    get f_name() { return $("//div[@class='common-card personal-detail-section']/div[@class='common-card-content']/div[1]//mdl-textfield[@class='required-label mdl-textfield is-upgraded mdl-textfield--floating-label ng-untouched ng-pristine ng-valid']//input[@class='mdl-textfield__input ng-untouched ng-pristine ng-valid ng-star-inserted']"); }
    get m_name () { return $("//div[@class='common-card personal-detail-section']//div[1]//mdl-textfield[@class='mdl-textfield is-upgraded mdl-textfield--floating-label ng-untouched ng-pristine ng-valid']//input[@class='mdl-textfield__input ng-untouched ng-pristine ng-valid ng-star-inserted']");}
    get l_name() { return $("//div[@class='common-card personal-detail-section']/div[@class='common-card-content']/div[2]//mdl-textfield[@class='required-label mdl-textfield is-upgraded mdl-textfield--floating-label ng-untouched ng-pristine ng-valid']//input[@class='mdl-textfield__input ng-untouched ng-pristine ng-valid ng-star-inserted']"); }
    get dob() { return $("//div[@class='common-date-field']//input[@class='mdl-textfield__input ng-untouched ng-pristine ng-valid ng-star-inserted']"); }
    get h_id() { return $("//div[@class='common-card personal-detail-section']//div[2]/mdl-textfield[@class='required-label mdl-textfield is-upgraded mdl-textfield--floating-label ng-untouched ng-pristine ng-valid']//input[@class='mdl-textfield__input ng-untouched ng-pristine ng-valid ng-star-inserted']"); }
    get gen() { return $('/html[1]/body[1]/my-app[1]/div[2]/ng-component[1]/div[3]/div[1]/div[1]/div[2]/div[4]/div[1]/div[2]/mdl-radio[2]/span[4]'); }

    //Details
    //get practloc() { return $("//div[@class='common-card detail-section']/div[@class='common-card-content']/div[1]//input[@class='mdl-textfield__input']"); }
    //get option() { return $('/html/body/my-app/div[2]/ng-component/div[3]/div[1]/div[2]/div[2]/div[1]/mdl-select/div/mdl-popover/div/mdl-option[3]/div/div'); }
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
    get riskcat () { return $("//div[@class='common-card personal-detail-section']//div[@class='two']//input[@class='mdl-textfield__input']");}
    get riskcat1 () { return $("//mdl-option[1]//div[@class='mdl-list__item-primary-content']");}
    get doc () { return $("//div[@class='common-card detail-section']//mdl-select[@class='mdl-select mdl-select--floating-label ng-untouched ng-valid ng-dirty']//input[@class='mdl-textfield__input']");}
    get doc1 () { return $("//mdl-option[1]//div[@class='mdl-list__item-primary-content']");}
    get plocn () { return $("/html[1]/body[1]/my-app[1]/div[2]/ng-component[1]/div[3]/div[1]/div[2]/div[2]/div[1]/mdl-select[1]/div[1]/input[1]");} 
    get plocn2 () { return $("/html[1]/body[1]/my-app[1]/div[2]/ng-component[1]/div[3]/div[1]/div[2]/div[2]/div[1]/mdl-select[1]/div[1]/mdl-popover[1]/div[1]/mdl-option[2]/div[1]/div[1]");}
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
    
    get txcreate(){return $("/html[1]/body[1]/my-app[1]/div[2]/ng-component[1]/div[3]/div[1]/div[1]/div[3]/mdl-button[1]");}
    
    async create() {
        await browser.pause(4000)
        //await this.new.click();
        await this.f_name.setValue(this.v_hid);
        await this.m_name.setValue(this.v_m_name);
        await this.l_name.setValue(this.v_l_name);
        await this.plocn.click();
        await this.plocn2.click();
        await this.dob.setValue(this.v_dob);
        await this.h_id.setValue(this.v_hid);
        await this.gen.click();
        await this.riskcat.click();
        await this.riskcat1.click();
        //await browser.pause(3000)
        await this.referal.click();
        await this.resource.click();
        await this.initial.click();
        await this.pref.click();
        await this.doc.click();
        await this.doc1.click();

        await this.relationship.click();
        await this.rfname.setValue(this.v_pfname);
        await this.rlname.setValue(this.v_pmname);
        await this.rdob.click();
        await this.rdobset.click();
        await this.rrelation.click();
        await this.rrelationset.click();

        await this.street.setValue(this.v_saddr1);
        await this.city.setValue(this.v_city);
        await this.zipcode.setValue(this.v_zip);
        await this.email.setValue(this.v_cemail);
        await this.con_email.setValue(this.v_cemail);
        await this.number.setValue(this.v_phone);
        await this.method.click();
        await this.preferd.click();

        await this.save.scrollIntoView();
        await this.save.click();
        //await this.clstoast.click();
        //await browser.saveScreenshot('../../../screenshots/pfile.png');
    }
    async hhpresent(){

        //await browser.pause(5000)
        await this.drophh.scrollIntoView();
        await this.drophh.click();
        await this.presenthh.click();
    }

    async createtx(){
        await this.drophh.scrollIntoView();
        await this.txcreate.click();
    }
}

module.exports = new patient();
