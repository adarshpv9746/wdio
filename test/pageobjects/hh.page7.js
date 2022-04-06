/////////////// PAGE 7  //////////////


class hhseven {
    //HH form page 7 elements
    get radio1() {return $("[ng-reflect-name='0'] [value='not_important'] > .mdl-radio__ripple-container"); }
    get radio2() {return $("[ng-reflect-name='1'] [value='neutral'] > .mdl-radio__ripple-container"); }
    get radio3() {return $("[ng-reflect-name='2'] [value='important'] > .mdl-radio__ripple-container"); }
    get radio4() {return $("[ng-reflect-name='3'] [value='important'] > .mdl-radio__ripple-container"); }
    get radio5() {return $("[ng-reflect-name='4'] [value='very_important'] > .mdl-radio__ripple-container"); }
    get radio6() {return $("[ng-reflect-name='5'] [value='important'] > .mdl-radio__ripple-container"); }
    get radio7() {return $("[ng-reflect-name='6'] [value='neutral'] > .mdl-radio__ripple-container"); }
    get radio8() {return $("[ng-reflect-name='7'] [value='not_important'] > .mdl-radio__outer-circle"); }

    get next() {return $(".mat-primary[_ngcontent-fvq-c10] > .mat-button-wrapper"); }

    async seven () {
        await this.radio1.click();
        await this.radio2.click();
        await this.radio3.click();
        await this.radio4.click();
        await this.radio5.click();
        await this.radio6.click();
        await this.radio7.click();
        await this.radio8.click();

        await this.next.click();
    }

}
module.exports = new hhseven();