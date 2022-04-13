class file {
    /**
     * define selectors using getter methods
     */
    get LTR(){return $("/html[1]/body[1]/my-app[1]/div[1]/ng-component[1]/section[1]/main[1]/section[1]/section[1]/div[1]/div[2]/span[1]/mdl-checkbox[1]/span[3]/span[1]")};
    get stratnow() {return $("/html[1]/body[1]/my-app[1]/div[1]/ng-component[1]/section[1]/main[1]/section[1]/div[1]/div[1]/mdl-button[2]")};
    get approve() {return $("/html[1]/body[1]/mdl-dialog-host-component[1]/div[2]/div[1]/div[1]/mdl-button[2]")};
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async startnow () {
        await this.LTR.click();
        await this.stratnow.click();
        await this.approve.click();
       
    }
}

module.exports = new file();
