

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage1 extends Page {
    /**
     * define selectors using getter methods
     */
    get btn () {
        return $("//mdl-button[@class='primary patient-add-btn ng-tns-c5-0 mdl-button ng-star-inserted']");
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async add () {
        await this.btn.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
}

module.exports = new LoginPage1();
