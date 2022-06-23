class vType {
    get NewConsult() { return $("/html/body/my-app/div[1]/ng-component/div[2]/div[2]/div[1]/div/div[1]/mdl-radio/span[4]"); }
    get next() { return $("/html/body/my-app/div[1]/ng-component/div[2]/div[2]/div[2]/mdl-button"); }

    async type() {
        await this.NewConsult.click();
        await this.next.click();
    }
}
module.exports = new vType();