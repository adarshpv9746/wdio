class parent {
    get rfName() { return $("/html/body/my-app/div[1]/ng-component/div/div[2]/div/div[1]/div[1]/mdl-textfield[1]/div/input"); }
    get rmName() { return $("/html/body/my-app/div[1]/ng-component/div/div[2]/div/div[1]/div[1]/mdl-textfield[2]/div/input"); }
    get rlName() { return $("/html/body/my-app/div[1]/ng-component/div/div[2]/div/div[1]/div[2]/mdl-textfield/div/input"); }
    get relationship() { return $("/html/body/my-app/div[1]/ng-component/div/div[2]/div/div[1]/div[2]/mdl-select/div/input"); }
    get relationMother() { return $("/html/body/my-app/div[1]/ng-component/div/div[2]/div/div[1]/div[2]/mdl-select/div/mdl-popover/div/mdl-option[1]/div/div"); }
    get dob() { return $("/html/body/my-app/div[1]/ng-component/div/div[2]/div/div[1]/div[3]/mdl-textfield[1]/div/input"); }
    get dobset() { return $("/html/body/div/div/div[2]/div/div[2]/div[2]/div[2]/div"); }
    get address1() { return $("/html/body/my-app/div[1]/ng-component/div/div[2]/div/div[1]/div[3]/mdl-textfield[2]/div/input"); }
    get address2() { return $("/html/body/my-app/div[1]/ng-component/div/div[2]/div/div[1]/div[4]/mdl-textfield[1]/div/input"); }
    get city() { return $("/html/body/my-app/div[1]/ng-component/div/div[2]/div/div[1]/div[4]/mdl-textfield[2]/div/input"); }
    get zipcode() { return $("/html/body/my-app/div[1]/ng-component/div/div[2]/div/div[1]/div[6]/mdl-textfield[1]/div/input"); }
    get phoneNumebr() { return $("/html/body/my-app/div[1]/ng-component/div/div[2]/div/div[1]/div[6]/mdl-textfield[2]/div/input"); }
    get email() { return $("/html/body/my-app/div[1]/ng-component/div/div[2]/div/div[1]/div[7]/mdl-textfield/div/input"); }
    get confirmEmail() { return $("/html/body/my-app/div[1]/ng-component/div/div[2]/div/div[1]/div[8]/mdl-textfield/div/input"); }
    get contact() { return $("/html/body/my-app/div[1]/ng-component/div/div[2]/div/div[1]/div[8]/mdl-select/div/input"); }
    get contact1() { return $("/html/body/my-app/div[1]/ng-component/div/div[2]/div/div[1]/div[8]/mdl-select/div/mdl-popover/div/mdl-option[1]/div"); }
    get next() { return $("/html/body/my-app/div[1]/ng-component/div/div[2]/div/div[1]/div[10]/div[2]/div/mdl-button"); }

    async paDetails() {
        await this.rfName.setValue("Vfirstname");
        await this.rmName.setValue("vmiddle");
        await this.rlName.setValue("vlast");

        await this.relationship.click();
        await this.relationMother.click();

        await this.dob.click();
        await this.dobset.click();

        await this.address1.setValue("vaddr1");
        await this.address2.setValue("vaddr2");
        await browser.pause(1000)
        await this.city.setValue("vcity");
        await this.zipcode.setValue("99999");
        await this.phoneNumebr.setValue("2399999999");

        await this.email.setValue("csicoet18@gmail.com");
        await this.confirmEmail.setValue("csicoet18@gmail.com");

        await this.contact.click();
        await this.contact1.click();

        await this.next.click();
    }
}
module.exports = new parent();