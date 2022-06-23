class pDetails {
    get firstName() { return $("/html/body/my-app/div[1]/ng-component/div/div[2]/div/div[1]/div[1]/div[1]/mdl-textfield[1]/div/input"); }
    get middleName() { return $("/html/body/my-app/div[1]/ng-component/div/div[2]/div/div[1]/div[1]/div[1]/mdl-textfield[2]/div/input"); }
    get lastName() { return $("/html/body/my-app/div[1]/ng-component/div/div[2]/div/div[1]/div[1]/div[2]/mdl-textfield[1]/div/input"); }
    get dob() { return $("/html/body/my-app/div[1]/ng-component/div/div[2]/div/div[1]/div[1]/div[2]/mdl-textfield[2]/div/input"); }
    get dobSet() { return $("/html/body/div/div/div[2]/div/div[2]/div[2]/div[2]/div"); }
    get gender() { return $("/html/body/my-app/div[1]/ng-component/div/div[2]/div/div[1]/div[1]/div[3]/div/div[2]/div[2]/mdl-radio/span[4]"); }
    get next() { return $("/html/body/my-app/div[1]/ng-component/div/div[2]/div/div[1]/div[3]/div[2]/div/mdl-button"); }

    async details() {
        await this.firstName.setValue("wwwwwwwwwwwwww");
        await this.middleName.setValue("wwwwwwwwwwwwww");
        await this.lastName.setValue("wwwwwwwwwwwwww");

        await this.dob.click();
        await this.dobSet.click();
        await browser.pause(1000)

        await this.gender.click();
        await this.next.scrollIntoView();
        await this.next.click();
    }
}
module.exports = new pDetails();