class patientType {
    get child() { return $("/html/body/my-app/div[1]/ng-component/div/div[2]/div[1]/div[1]/div/div[2]/div/img"); }
    get next() { return $("/html/body/my-app/div[1]/ng-component/div/div[2]/div[3]/div[2]/div/mdl-button"); }

    async pType() {
        await this.child.click();
        await this.next.click();
    }
}
module.exports = new patientType();