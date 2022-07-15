class plan {
    
    //locators
    get expat (){ return $("//div[@class=' relation-radio-section flexbox align-center(flex-end)']/mdl-radio[1]/span[@class='mdl-radio__ripple-container mdl-ripple--center']");}
    get exfam (){ return $("//div[@class=' relation-radio-section flexbox align-center(flex-end)']/mdl-radio[2]/span[@class='mdl-radio__ripple-container mdl-ripple--center']");}
    get np (){ return $("//mdl-radio[3]/span[@class='mdl-radio__ripple-container mdl-ripple--center']");}
    get txcat (){ return $("//div[@class='mdl-textfield is-upgraded']/span[@class='mdl-select__toggle material-icons']");}
    get txcat3 (){ return $("//mdl-option[3]/div[@class='mdl-list__item']");}
    get txsubcat (){ return $("//div[@class='mdl-textfield is-upgraded']/span[@class='mdl-select__toggle material-icons']");}
    get txsubcat1 (){ return $("//mdl-option[1]//div[@class='mdl-list__item-primary-content']");}
    get pinsrnc (){ return $("//div[@class='insurance-section row']//mdl-select[@class='mdl-select mdl-select--floating-label ng-untouched ng-valid ng-dirty']//span[@class='mdl-select__toggle material-icons']");}
    get pinsrnc2 (){ return $("//mdl-option[2]//div[@class='mdl-list__item-primary-content']");}
    get pmaxcov (){ return $("//input[@class='mdl-textfield__input ng-untouched ng-pristine ng-star-inserted ng-valid']");}
    //get pmaxpcnt (){ return $("//input[@class='mdl-textfield__input ng-pristine ng-valid ng-star-inserted ng-touched']");}
    get ppaidto_pract (){ return $("//div[@class='insurance-section row']//div[5]//div[@class=' flexbox flexbox-space-bet align-center(flex-end)']");}
    get ppaidto_insr (){return $("//div[@class='insurance-section row']//mdl-radio[@class='is-upgraded mdl-radio ng-untouched ng-pristine ng-valid']/span[@class='mdl-radio__ripple-container mdl-ripple--center']");}
    get sinsrnc (){ return $("//mdl-select[@class='mdl-select mdl-select--floating-label ng-untouched ng-dirty ng-valid']//span[@class='mdl-select__toggle material-icons']");}
    get sinsrnc2 (){ return $("//mdl-option[3]//div[@class='mdl-list__item-primary-content']");}
    get smaxcov (){ return $("/html/body/my-app/div[2]/ng-component/div[3]/div/div/div[1]/div[1]/div[4]/div[2]/div[3]/div/mdl-textfield/div/input");}
    get smaxpcnt (){ return $("//mdl-textfield[@class='mdl-textfield is-upgraded mdl-textfield--floating-label ng-pristine ng-valid is-dirty ng-touched is-focused']//input[@class='mdl-textfield__input ng-pristine ng-valid ng-touched']");}
    get spaidto_pract (){ return $("//div[@class='insurance-section row']/div[2]//div[@class=' flexbox flexbox-space-bet align-center(flex-end)']");}
    get spaidto_insr (){ return $("//mdl-textfield[@class='mdl-textfield is-upgraded mdl-textfield--floating-label ng-pristine ng-valid is-dirty ng-touched is-focused']//input[@class='mdl-textfield__input ng-pristine ng-valid ng-touched']");}
    get miscdicopt (){ return $("/html/body/my-app/div[2]/ng-component/div[3]/div/div/div[1]/div[1]/div[5]/div[1]/mdl-checkbox/span[4]");} 
    get miscdic (){ return $("/html/body/my-app/div[2]/ng-component/div[3]/div/div/div[1]/div[1]/div[5]/div[1]/div/mdl-textfield/div/input");}
    get viewall (){ return $("//a[contains(.,'View All')]");}
    get cstudy1 (){ return $("//div[@class='all-cases view-all-case-studies scroll-style']/div[1]//span[@class='mdl-checkbox__ripple-container mdl-ripple--center']");}
    get brace (){ return $("//div[@class='row options-checkbox-section']//mdl-checkbox[@class='mdl-checkbox is-upgraded ng-untouched ng-pristine ng-valid is-checked']/span[@class='mdl-checkbox__ripple-container mdl-ripple--center']");}
    get bracetxtime (){ return $("/html/body/my-app/div[2]/ng-component/div[3]/div/div/div[1]/div[2]/div[2]/mdl-tabs/div[2]/mdl-tab-panel/mdl-tab-panel-content/div[1]/div[1]/div/mdl-textfield/div/input");}
    get bracetxfee (){ return $("/html/body/my-app/div[2]/ng-component/div[3]/div/div/div[1]/div[2]/div[2]/mdl-tabs/div[2]/mdl-tab-panel/mdl-tab-panel-content/div[1]/div[2]/div/mdl-textfield/div/input");}
    get bracetxdown (){ return $("/html/body/my-app/div[2]/ng-component/div[3]/div/div/div[1]/div[2]/div[2]/mdl-tabs/div[2]/mdl-tab-panel/mdl-tab-panel-content/div[1]/div[3]/div/mdl-textfield/div/input");}
    get aligner (){ return $("//mdl-checkbox[@class='mdl-checkbox is-upgraded ng-untouched ng-valid is-checked ng-dirty']/span[@class='mdl-checkbox__ripple-container mdl-ripple--center']");}
    get alignertab (){ return $("//mdl-tabs[@class='tab-right tab-head-padding pricing-section mdl-tabs is-upgraded']//div[2]//span[@class='mdl-tabs__ripple-container mdl-layout__tab-ripple-container']");}
    get alignertxtime (){ return $("/html/body/my-app/div[2]/ng-component/div[3]/div/div/div[1]/div[2]/div[2]/mdl-tabs/div[2]/mdl-tab-panel/mdl-tab-panel-content/div[1]/div[1]/div/mdl-textfield/div/input");}
    get alignertxfee (){ return $("//mdl-textfield[@class='currency-unit-input mdl-textfield is-upgraded mdl-textfield--floating-label ng-valid is-dirty ng-dirty ng-touched is-focused']//input[@class='mdl-textfield__input ng-valid ng-dirty ng-touched']");}
    get alignertxdown (){ return $("//mdl-textfield[@class='currency-unit-input mdl-textfield is-upgraded mdl-textfield--floating-label ng-pristine ng-valid is-dirty ng-touched is-focused']//input[@class='mdl-textfield__input ng-pristine ng-valid ng-touched']");}
    get combo (){ return $("//div[@class='row options-checkbox-section']//div[4]//span[@class='mdl-checkbox__ripple-container mdl-ripple--center']");}
    get combotab (){ return $("//mdl-tabs[@class='tab-right tab-head-padding pricing-section mdl-tabs is-upgraded']//div[3]//span[@class='mdl-tabs__ripple-container mdl-layout__tab-ripple-container']");}
    get combotxtime (){ return $("/html/body/my-app/div[2]/ng-component/div[3]/div/div/div[1]/div[2]/div[2]/mdl-tabs/div[2]/mdl-tab-panel/mdl-tab-panel-content/div[1]/div[1]/div/mdl-textfield/div/input");}
    get combotxfee (){ return $("/html/body/my-app/div[2]/ng-component/div[3]/div/div/div[1]/div[2]/div[2]/mdl-tabs/div[2]/mdl-tab-panel/mdl-tab-panel-content/div[1]/div[2]/div/mdl-textfield/div/input");}
    get combotxdown (){ return $("/html/body/my-app/div[2]/ng-component/div[3]/div/div/div[1]/div[2]/div[2]/mdl-tabs/div[2]/mdl-tab-panel/mdl-tab-panel-content/div[1]/div[2]/div/mdl-textfield/div/input");}
    get extendmonth (){ return $("/html/body/my-app/div[2]/ng-component/div[3]/div/div/div[1]/div[2]/div[2]/mdl-tabs/div[2]/mdl-tab-panel/mdl-tab-panel-content/div[2]/div[1]/div/mdl-textfield/div/input");}
    get acceltxfee (){ return $("/html/body/my-app/div[2]/ng-component/div[3]/div/div/div[1]/div[2]/div[2]/mdl-tabs/div[2]/mdl-tab-panel/mdl-tab-panel-content/div[2]/div[2]/div/mdl-textfield/div/input");}
    get addnaplnc (){ return $("/html/body/my-app/div[2]/ng-component/div[3]/div/div/div[1]/div[2]/div[2]/mdl-tabs/div[2]/mdl-tab-panel/mdl-tab-panel-content/div[2]/div[3]/div/mdl-select/div/span[2]");}  
    get addnaplnc2 (){ return $("/html/body/my-app/div[2]/ng-component/div[3]/div/div/div[1]/div[2]/div[2]/mdl-tabs/div[2]/mdl-tab-panel/mdl-tab-panel-content/div[2]/div[3]/div/mdl-select/div/mdl-popover/div/mdl-option[2]/div/div");}
    get downpaydisc (){ return $("//mdl-checkbox[@class='checkbox-section mdl-checkbox is-upgraded ng-pristine ng-valid is-checked ng-touched']/span[@class='mdl-checkbox__ripple-container mdl-ripple--center']");}
    get present (){ return $("//mdl-button[@class='mdl-button present']/span[@class='mdl-button__ripple-container']");}
    get outsideclk (){ return $("//mdl-tabs[@class='tab-right tab-head-padding pricing-section mdl-tabs is-upgraded ng-star-inserted']/div[@class='mdl-tabs__tab-bar']");}
    get addnaplncfee (){ return $("/html/body/my-app/div[2]/ng-component/div[3]/div/div/div[1]/div[2]/div[2]/mdl-tabs/div[2]/mdl-tab-panel/mdl-tab-panel-content/div[2]/div[4]/div/mdl-textfield/div/input");}
    get acccontainer (){ return $("/html/body/my-app/div[2]/ng-component/div[3]/div/div/div[1]/div[2]/div[2]/mdl-tabs/div[2]/mdl-tab-panel/mdl-tab-panel-content/div[2]");}
    //values to be passed
    v_pmaxcov = 1
    v_pmaxpcnt = 100
    v_smaxcov = 1
    v_smaxpcnt = 50
    v_miscdic = 1
    v_bracetxtime = 10
    v_bracetxfee = 4
    v_bracetxdown = 1
    v_alignertxtime = 10
    v_alignertxfee = 100
    v_alignertxdown = 10
    v_combotxtime = 10
    v_combotxfee = 100
    v_combotxdown = 10
    v_extendmonth = 10
    v_acceltxfee = 1
    v_addnaplncfee = 1

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async add_plan () {

        await this.expat.click();
        await this.txcat.click();
        await this.txcat3.click();
        //await this.txcat
        if(this.txsubcat.isVisible()){await this.txsubcat.click();await this.txsubcat1.click();}
        
        // await this.pinsrnc.click();
        // await this.pinsrnc2.click();
        // await this.pmaxcov.setValue(this.v_pmaxcov);
        //await this.pmaxpcnt.setValue(this.v_pmaxpcnt);
        // await this.sinsrnc.click();
        // await this.sinsrnc2.click();
        // await this.smaxcov.setValue(this.v_smaxcov);
        // await smaxpcnt.setValue(this.v_smaxpcnt);
        await this.viewall.scrollIntoView();
        await browser.pause(100);
        await this.miscdicopt.click();
        await this.miscdic.setValue(this.v_miscdic);
        await this.brace.scrollIntoView();
        await browser.pause(100);
        await this.viewall.click();
        await this.cstudy1.click();
        await this.extendmonth.scrollIntoView();
        await browser.pause(100);
 
        await this.bracetxtime.setValue(this.v_bracetxtime);
        await this.outsideclk.click();
        await browser.pause(500)
        await this.acceltxfee.setValue(this.v_acceltxfee);
        await this.bracetxfee.clearValue();
        await this.bracetxfee.setValue(this.v_bracetxfee);
        await this.bracetxdown.clearValue();
        await this.bracetxdown.setValue(this.v_bracetxdown);
        // await this.aligner.click();
        //awit this.alignertab.click();
        //awit this.alignertxtime.setValue(this.v_alignertxtime); 
        //awit this.alignertxfee.setValue(this.v_alignertxfee);
        //awit this.alignertxdown.setValue(this.v_alignertxdown);
        //awit this.combo.click(); 
        //awit this.combotab.click();
        //awit this.combotxtime.setValue(this.v_combotxtime); 
        //awit this.combotxfee.setValue(this.v_combotxfee);
        //awit this.combotxdown.setValue(this.v_combotxdown);
        await this.extendmonth.setValue(this.v_extendmonth);
        await this.acccontainer.scrollIntoView();
        //await this.addnaplnc.click();
        //await this.addnaplnc2.click();
        //await this.addnaplncfee.setValue(this.v_addnaplncfee);
        await this.present.click();
        await browser.pause(5000)
        const handle = await browser.getWindowHandles()
        await browser.switchToWindow(handle[1])

    }
}

module.exports = new plan();
