

class LoginPage {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#username');
    }

    get inputPassword () {
        return $("[name='password']");
    }

    get btnSubmit () {
        return $('.mdl-button__ripple-container');
    }

    get popupclose (){ return $('/html[1]/body[1]/mdl-dialog-host-component[1]/div[2]/div[1]/img[1]');}

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
        //await browser.pause(500);
        //if(await this.popupclose.isDisplayed()){await this.popupclose.click(); await browser.pause(200);};
        //await this.popupclose.click();
        await browser.pause(500);
        await expect(browser).toHaveUrlContaining('/home/dashboard');
    }

    
}

module.exports = new LoginPage();
