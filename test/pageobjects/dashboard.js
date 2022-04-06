class ctdash {
    /**
     * define selectors using getter methods
     */
    get hamburger () {return $("//img[@alt='menu-icon']");}
    get patient(){return $("//li[contains(.,'Patients')]");}

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async add_pat () {
        await this.hamburger.click();
        await this.patient.click();
    }
}

module.exports = new ctdash();
