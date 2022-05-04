

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

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
        await expect(browser).toHaveUrlContaining('/home/dashboard');
    }

    
}

module.exports = new LoginPage();
