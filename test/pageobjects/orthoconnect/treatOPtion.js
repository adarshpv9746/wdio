class tOPtions {
    get cBraces() { return $("/html/body/my-app/div[1]/ng-component/div/div[2]/div[1]/div[1]/div/div[2]"); }
    get next() { return $("/html/body/my-app/div[1]/ng-component/div/div[2]/div[3]/div[2]/div/mdl-button"); }

    async option() {
        await this.cBraces.click();
        await this.next.click();
    }
}
module.exports = new tOPtions();