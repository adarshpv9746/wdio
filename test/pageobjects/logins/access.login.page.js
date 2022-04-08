////////// LOGIN PAGE //////////

class Accessportal {
    get inputdob () {return $(".mbsc-comp");}
    get setbutn () {return $(".mbsc-fr-btn1");}
    get inputlastdigit () {return $("[ng-reflect-id='phone0'] [placeholder]");}
    get checkbox () {return $(".mdl-checkbox__ripple-container");}
    get btnSubmit () {return $(".primary");}
    get mbsc() { return $("div:nth-of-type(41)"); }

    async login (num) {
        await this.inputlastdigit.setValue(num);
        await this.checkbox.click();
        await this.inputdob.click();
        await this.mbsc.click();
        await this.setbutn.click();

        await this.btnSubmit.click();
        await browser.pause(3000)
    }
}

module.exports = new Accessportal();











































































































