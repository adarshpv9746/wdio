////////// LOGIN PAGE //////////

class Accessportal {
    get inputdob () {return $(".mbsc-comp");}
    get setbutn () {return $(".mbsc-fr-btn1");}
    get inputlastdigit () {return $("/html[1]/body[1]/mdl-dialog-host-component[1]/div[2]/main[1]/section[1]/div[1]/div[1]/div[1]/div[2]/div[1]/mdl-textfield[1]/div[1]/input[1]");}
    get checkbox () {return $(".mdl-checkbox__ripple-container");}
    get btnSubmit () {return $(".primary");}
    get mbsc() { return $("div:nth-of-type(41)"); }

    async login (num) {
        //await browser.pause(1000)
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











































































































