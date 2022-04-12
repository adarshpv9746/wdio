const helper = require('../../helpers/helper');

class prac {
    /**
     * define selectors using getter methods
     */
    username = helper.test_uname
    email = helper.random_mail
    get prac () {return $("//span[@class='mdl-button__ripple-container']");}
    get p_name () {return $("//input[@name='name']");}
    get no_locns () {return $("//input[@name='no_of_locations']");}
    get p_fname () {return $("//input[@name='first_name']");}
    get p_lname() {return $("//input[@name='last_name']");}
    get p_dlang () {return $("//mdl-select[@name='language']//input[@class='mdl-textfield__input']");}
    get p_dlang1 () {return $("//div[@class='mdl-list__item-primary-content']");}
    get p_YOB () {return $("//input[@name='year_of_birth']");}
    get p_tempv () {return $("//mdl-select[@name='template_version']//input[@class='mdl-textfield__input']");}
    get p_tempv1 () {return $("//mdl-option[1]//div[@class='mdl-list__item-primary-content']");}
    get p_sadmnslct () {return $("//angular2-multiselect[@name='superadminlist']//div[@class='c-btn']");}
    get p_sadmn () {return $("//label[.='Selma Weeks']");}
    get p_promo () {return $("//angular2-multiselect[@name='promocodeList']//div[@class='c-btn']");}
    get p_promocode () {return $("//label[.='anannya7']");}
    get p_uname() {return $("//input[@name='username']");}
    get p_pass () {return $("//input[@name='password']");}
    get p_amail () {return $("//input[@name='email']");}
    get p_smnky () {return $("//input[@name='survey_url']");}
    get p_rgale () {return $("//input[@name='gp_gallery_enabled']");}
    get p_inoffp () {return $("//input[@name='hide_office_payment']");}
    get p_fcfname () {return $("//input[@name='fc_first_name']");}
    get p_fclname () {return $("//input[@name='fc_last_name']");}
    get p_sa1 () {return $("[ng-reflect-maxlength='32'][placeholder]");}
    //get p_sa2 () {return $("//mdl-textfield[@class='not-required mdl-textfield is-upgraded mdl-textfield--floating-label ng-untouched ng-pristine ng-valid is-focused']//input[@class='mdl-textfield__input ng-untouched ng-pristine ng-valid ng-star-inserted']");}
    get p_city () {return $("//input[@name='city']");}
    get p_cdrop () {return $("//mdl-select[@name='country_id']//input[@class='mdl-textfield__input']");}
    get p_country () {return $("//mdl-option[5]//div[@class='mdl-list__item-primary-content']");}
    get p_sdrop () {return $("//mdl-select[@name='state_id']//input[@class='mdl-textfield__input']");}
    get p_state () {return $("//mdl-option[2]/div[@class='mdl-list__item']");}
    get p_zip () {return $("//input[@name='zip']");}
    get p_tzdrop () {return $("//mdl-select[@name='time_zone']//input[@class='mdl-textfield__input']");}
    get p_tzone () {return $("//mdl-option[1]//div[@class='mdl-list__item-primary-content']");}
    get p_contact () {return $("//input[@name='fc_contact_number']");}
    get p_currndrop () {return $("//mdl-select[@name='currency']//input[@class='mdl-textfield__input']");}
    get p_currncy () {return $("//mdl-option[1]//div[@class='mdl-list__item-primary-content']");}
    get p_fcemail () {return $("//input[@name='billing_mail']");}
    get p_add () {return $("//mdl-button[@class='primary mdl-button']/span[@class='mdl-button__ripple-container']");}
    get p_profile () {return $("//p[@class='user-text']");}
    get p_logout () {return $("//a[contains(.,'Log Out')]");}
    
    async pract () {

        await this.prac.click();
        await this.no_locns.setValue("3");
        await this.p_name.setValue("Test 13 day mail");
        await this.p_fname.setValue("Test Practice");
        await this.p_lname.setValue("Test Practice");
        await this.p_dlang.click();
        await this.p_dlang1.click();
        await this.p_YOB.setValue("1998");
        //await this.p_YOB.scrollIntoView();
        await this.p_tempv.click();
        await this.p_tempv1.click();
        await this.p_sadmnslct.click();
        await this.p_sadmn.click();
        await this.p_promo.click();
        await this.p_promocode.click();
        await this.p_uname.setValue(this.username);
        await this.p_pass.setValue("Tester@123");
        await this.p_amail.setValue(this.email);
        await this.p_smnky.setValue("test.com");
        await this.p_rgale.click();
        //await this.p_inoffp.click();
        await this.p_fcfname.setValue("Test FC");
        await this.p_fclname.setValue("Test FC");
        await this.p_sa1.setValue("SA1");
        //await this.p_sa2.setValue("SA2");
        await this.p_city.setValue("city");
        await this.p_cdrop.click();
        await this.p_country.click();
        await this.p_sdrop.click();
        await this.p_state.click();
        await this.p_zip.setValue("99999");
        await this.p_tzdrop.click();
        await this.p_tzone.click();
        await this.p_contact.setValue("9999999999");
        await this.p_currndrop.click();
        await this.p_currncy.click();
        await this.p_fcemail.setValue(this.email);
        await this.p_add.click();
        await this.p_profile.click();
        await this.p_logout.click();
    }
}

module.exports = new prac();