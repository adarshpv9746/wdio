class ctdash {
    /**
     * define selectors using getter methods
     */
    get hamburger () {return $("//img[@alt='menu-icon']");}
    get patient(){return $("//li[contains(.,'Patients')]");}
    get add_btn(){return $("/html/body/my-app/div[2]/ng-component/ng-component/div/div[3]/div[2]/mdl-card/div[2]/div[2]/mdl-button");}
    get search_approve() {return $("/html[1]/body[1]/my-app[1]/div[2]/ng-component[1]/ng-component[1]/div[1]/div[3]/div[5]/mdl-card[1]/div[2]/div[2]/div[1]/mdl-textfield[1]/div[1]/input[1]");}
    get accept_btn(){return $("/html[1]/body[1]/my-app[1]/div[2]/ng-component[1]/ng-component[1]/div[1]/div[3]/div[5]/mdl-card[1]/table[1]/tbody[1]/tr[1]/td[8]/mdl-button[1]");}
    get accept_pname_clm(){return $("/html[1]/body[1]/my-app[1]/div[2]/ng-component[1]/ng-component[1]/div[1]/div[3]/div[2]/div[2]/mdl-card[1]/split-combo-graph[1]/report-title[1]/div[1]/h2[1]");}
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async add_pat () {
        await this.hamburger.click();
        await this.patient.click();
    };

    async addp_button(){
        //await browser.sleep(400);
        await this.add_btn.click();
    };

    async approve(hid){
        await browser.pause(100);
        await this.accept_pname_clm.scrollIntoView();
        await browser.pause(200);
        await this.search_approve.setValue(hid);
        await browser.pause(500);
        await this.accept_btn.click();
        
    };
}

module.exports = new ctdash();
