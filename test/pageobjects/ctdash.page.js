class ctdash {
    /**
     * define selectors using getter methods
     */
    get hamburger () {return $("//img[@alt='menu-icon']");}
    get pract(){return $("//li[contains(.,'Practice Management')]");}

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async add_pract () {
        await this.hamburger.click();
        await this.pract.click();
    }
}

module.exports = new ctdash();