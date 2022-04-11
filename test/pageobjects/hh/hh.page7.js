const helper = require('..//../helpers/helper');
/////////////// PAGE 7  //////////////


class hhseven {
    //HH form page 7 elements
    get radio1() { return $("/html[1]/body[1]/my-app[1]/div[1]/ng-component[1]/div[2]/mat-horizontal-stepper[1]/div[2]/div[7]/form[1]/orthodontic-treatment-preferences[1]/section[1]/div[1]/form[1]/div[2]/div[1]/div[1]/div[1]/div[1]/mdl-radio[1]/span[4]"); }
    get radio2() { return $("/html[1]/body[1]/my-app[1]/div[1]/ng-component[1]/div[2]/mat-horizontal-stepper[1]/div[2]/div[7]/form[1]/orthodontic-treatment-preferences[1]/section[1]/div[1]/form[1]/div[3]/div[1]/div[1]/div[1]/div[2]/mdl-radio[1]/span[4]"); }
    get radio3() { return $("/html[1]/body[1]/my-app[1]/div[1]/ng-component[1]/div[2]/mat-horizontal-stepper[1]/div[2]/div[7]/form[1]/orthodontic-treatment-preferences[1]/section[1]/div[1]/form[1]/div[4]/div[1]/div[1]/div[1]/div[2]/mdl-radio[1]/span[4]"); }
    get radio4() { return $("/html[1]/body[1]/my-app[1]/div[1]/ng-component[1]/div[2]/mat-horizontal-stepper[1]/div[2]/div[7]/form[1]/orthodontic-treatment-preferences[1]/section[1]/div[1]/form[1]/div[5]/div[1]/div[1]/div[1]/div[2]/mdl-radio[1]/span[4]"); }
    get radio5() { return $("/html[1]/body[1]/my-app[1]/div[1]/ng-component[1]/div[2]/mat-horizontal-stepper[1]/div[2]/div[7]/form[1]/orthodontic-treatment-preferences[1]/section[1]/div[1]/form[1]/div[6]/div[1]/div[1]/div[1]/div[1]/mdl-radio[1]/span[4]"); }
    get radio6() { return $("/html[1]/body[1]/my-app[1]/div[1]/ng-component[1]/div[2]/mat-horizontal-stepper[1]/div[2]/div[7]/form[1]/orthodontic-treatment-preferences[1]/section[1]/div[1]/form[1]/div[7]/div[1]/div[1]/div[1]/div[1]/mdl-radio[1]/span[4]"); }
    get radio7() { return $("/html[1]/body[1]/my-app[1]/div[1]/ng-component[1]/div[2]/mat-horizontal-stepper[1]/div[2]/div[7]/form[1]/orthodontic-treatment-preferences[1]/section[1]/div[1]/form[1]/div[8]/div[1]/div[1]/div[1]/div[1]/mdl-radio[1]/span[4]"); }
    get radio8() { return $("/html[1]/body[1]/my-app[1]/div[1]/ng-component[1]/div[2]/mat-horizontal-stepper[1]/div[2]/div[7]/form[1]/orthodontic-treatment-preferences[1]/section[1]/div[1]/form[1]/div[9]/div[1]/div[1]/div[1]/div[1]/mdl-radio[1]/span[4]"); }

    get next() { return $("/html[1]/body[1]/my-app[1]/div[1]/ng-component[1]/div[2]/mat-horizontal-stepper[1]/div[2]/div[7]/form[1]/orthodontic-treatment-preferences[1]/section[1]/div[2]/button[2]"); }

    async seven() {
        //await browser.pause(2000)
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