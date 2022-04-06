class file {
    /**
     * define selectors using getter methods
     */
    get present(){return $("//mdl-button[@class='mdl-button present']/span[@class='mdl-button__ripple-container']");}
    
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async add_treat () {
        await this.present.click();
       
    }
}

module.exports = new file();
