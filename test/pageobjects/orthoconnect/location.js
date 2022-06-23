class locationselect {
    get location() { return $("/html/body/my-app/div[1]/ng-component/div/div[2]/div[1]/div[1]/mdl-select/div/input"); }
    get location1() { return $("/html/body/my-app/div[1]/ng-component/div/div[2]/div[1]/div[1]/mdl-select/div/mdl-popover/div/mdl-option[48]/div"); }
    get next() { return $("/html/body/my-app/div[1]/ng-component/div/div[2]/div[3]/div[2]/div/mdl-button"); }

    async select() {
        await this.location.click();
        await this.location1.click();
        await this.next.click();
    }
}
module.exports = new locationselect();