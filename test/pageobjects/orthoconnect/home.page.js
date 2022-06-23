class HomePage {
    get check() { return $("/html/body/my-app/div[1]/ng-component/div[2]/div[2]/div[1]/div/mdl-checkbox/span[3]/span"); }
    get gStart() { return $("/html/body/my-app/div[1]/ng-component/div[2]/div[2]/div[2]/mdl-button"); }

    async start() {
        await this.check.click();
        await this.gStart.click();
    }
}
module.exports = new HomePage();

