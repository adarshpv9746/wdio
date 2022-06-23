class concern {
    get crowding() { return $("/html/body/my-app/div[1]/ng-component/div/div[2]/div[1]/div/div/div[2]/img[2]"); }
    get next() { return $("/html/body/my-app/div[1]/ng-component/div/div[2]/div[3]/div[2]/div/mdl-button"); }


    async selectConcern() {
        await this.crowding.click();
        await this.next.click();
    }
}
module.exports = new concern();