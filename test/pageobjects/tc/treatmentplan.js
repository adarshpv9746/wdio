class plan {
    /**
     * define selectors using getter methods
     */
    get risk () {return $("/html/body/my-app/div[2]/ng-component/div[3]/div/div/div[1]/div[1]/div[2]/div[2]/mdl-select/div/span[2]");}
    get rating(){return $("/html/body/my-app/div[2]/ng-component/div[3]/div/div/div[1]/div[1]/div[2]/div[2]/mdl-select/div/mdl-popover/div/mdl-option[2]/div/div");}
    get practice(){return $("/html/body/my-app/div[2]/ng-component/div[3]/div/div/div[1]/div[1]/div[2]/div[3]/div/mdl-radio[3]/span[4]");}
    get cat(){return $("/html/body/my-app/div[2]/ng-component/div[3]/div/div/div[1]/div[1]/div[3]/div[1]/mdl-select/div/span[2]");}
    get gory(){return $("/html/body/my-app/div[2]/ng-component/div[3]/div/div/div[1]/div[1]/div[3]/div[1]/mdl-select/div/mdl-popover/div/mdl-option[3]/div/div");}
    get subcat(){return $("/html/body/my-app/div[2]/ng-component/div[3]/div/div/div[1]/div[1]/div[3]/div[2]/mdl-select/div/span[2]");}
    get subgory(){return $("/html/body/my-app/div[2]/ng-component/div[3]/div/div/div[1]/div[1]/div[3]/div[2]/mdl-select/div/mdl-popover/div/mdl-option[1]/div");}
    get prac(){return $("/html/body/my-app/div[2]/ng-component/div[3]/div/div/div[1]/div[1]/div[6]/div[2]/div/mdl-select/div/span[2]");}
    get location(){return $("/html/body/my-app/div[2]/ng-component/div[3]/div/div/div[1]/div[1]/div[6]/div[2]/div/mdl-select/div/mdl-popover/div/mdl-option[16]/div/div");}
    get doctr(){return $("/html/body/my-app/div[2]/ng-component/div[3]/div/div/div[1]/div[1]/div[7]/div[2]/div/mdl-select/div/span[2]");}
    get type(){return $("/html/body/my-app/div[2]/ng-component/div[3]/div/div/div[1]/div[1]/div[7]/div[2]/div/mdl-select/div/mdl-popover/div/mdl-option[4]/div/div");}
    get viewal(){return $("/html/body/my-app/div[2]/ng-component/div[3]/div/div/div[1]/div[1]/div[8]/div[2]/div[2]/a");}
    get cases(){return $("/html/body/mdl-dialog-host-component/div[2]/div/div[2]/div[5]/div[1]/mdl-checkbox/span[4]");}
    get doctr(){return $("/html/body/my-app/div[2]/ng-component/div[3]/div/div/div[1]/div[1]/div[7]/div[2]/div/mdl-select/div/span[2]");}
    get time(){return $("/html/body/my-app/div[2]/ng-component/div[3]/div/div/div[1]/div[2]/div[2]/mdl-tabs/div[2]/mdl-tab-panel/mdl-tab-panel-content/div[1]/div[1]/div/mdl-textfield/div/input");}
    get outside(){return $("//div[@class='tx-option-hr']");}
    get present(){return $("//mdl-button[@class='mdl-button present']/span[@class='mdl-button__ripple-container']");}













    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async add_plan () {
        await this.risk.click();
        await this.rating.click();
        await this.practice.click();
        await this.cat.click();
        await this.gory.click();
        await this.subcat.click();
        await this.subgory.click();
        await this.prac.click();
        await this.location.click();
        await this.doctr.click();
        await this.type.click();
        await this.viewal.click();
        await this.cases.click();
        await this.doctr.click();
        await this.time.setValue("10");
        await this.outside.click();
        await this.present.click();
        








    }
}

module.exports = new plan();
