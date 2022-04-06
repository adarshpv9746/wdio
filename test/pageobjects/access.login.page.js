////////// LOGIN PAGE //////////

const Page = require('./page');
class LoginPage extends Page {
    get inputdob () {return $(".mbsc-comp");}
    get setbutn () {return $(".mbsc-fr-btn1");}
    get inputlastdigit () {return $("[ng-reflect-id='phone0'] [placeholder]");}
    get checkbox () {return $(".mdl-checkbox__ripple-container");}
    get btnSubmit () {return $(".primary");}

    async login () {
        await this.checkbox.click();
        await this.inputdob.click();
        await this.setbutn.click();
        await browser.pause(1000)
        await this.inputlastdigit.setValue("1111");
        await browser.waitUntil(() => this.btnSubmit.isClickable())
        await this.btnSubmit.click();
        await browser.pause(8000)
    }
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();











































































































