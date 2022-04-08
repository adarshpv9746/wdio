class ctdash {
    /**
     * define selectors using getter methods
     */
    get hamburger () {return $("//img[@alt='menu-icon']");}
    get patient(){return $("//li[contains(.,'Patients')]");}
    get add_btn(){return $("/html/body/my-app/div[2]/ng-component/ng-component/div/div[3]/div[2]/mdl-card/div[2]/div[2]/mdl-button");}


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async add_pat () {
        await this.hamburger.click();
        await this.patient.click();
    }
    async addp_button(){
        //await browser.sleep(400);
        await this.add_btn.click();
    };
}

module.exports = new ctdash();
