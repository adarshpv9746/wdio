////////////// PAGE 8 ///////////////


class hheight {
    //HH form page 8 elements
    get check1() {return $("[name='isAgreedAuthorization'] > .mdl-checkbox__ripple-container"); }
    get check2() {return $("[name='isAgreedHipaa'] > .mdl-checkbox__ripple-container"); }
    get sign() {return $("canvas"); }
    get submit() {return $(".mat-primary[_ngcontent-fvq-c11]"); }

    async eight () {
        await this.check1.click();
        await this.check2.click();
        await this.sign.click();
        await this.submit.click();
    }
}
module.exports = new hheight();