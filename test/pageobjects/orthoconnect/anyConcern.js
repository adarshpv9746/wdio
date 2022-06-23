class AnyConcern {
    get anyCon() { return $("/html/body/my-app/div[1]/ng-component/div/div[2]/div[1]/div[1]/mdl-textfield/div/textarea"); }
    get next() { return $("/html/body/my-app/div[1]/ng-component/div/div[2]/div[3]/div[2]/div/mdl-button"); }

    async concern() {
        await this.anyCon.setValue("wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww");
        await this.next.click();
    }
}
module.exports = new AnyConcern();