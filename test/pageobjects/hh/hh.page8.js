const helper = require('../../helpers/helper');
////////////// PAGE 8 ///////////////


class hheight {
    //HH form page 8 elements
    get check1() { return $("/html[1]/body[1]/my-app[1]/div[1]/ng-component[1]/div[2]/mat-horizontal-stepper[1]/div[2]/div[8]/form[1]/authorisation[1]/section[1]/div[1]/form[1]/div[1]/div[1]/div[4]/div[1]/mdl-checkbox[1]/span[4]"); }
    get check2() { return $("/html[1]/body[1]/my-app[1]/div[1]/ng-component[1]/div[2]/mat-horizontal-stepper[1]/div[2]/div[8]/form[1]/authorisation[1]/section[1]/div[1]/form[1]/div[2]/div[1]/div[1]/mdl-checkbox[1]/span[4]"); }
    get sign() { return $("/html[1]/body[1]/my-app[1]/div[1]/ng-component[1]/div[2]/mat-horizontal-stepper[1]/div[2]/div[8]/form[1]/authorisation[1]/section[1]/div[1]/form[1]/div[2]/div[1]/div[4]/div[1]/signature-pad[1]/canvas[1]"); }
    get submit() { return $("/html[1]/body[1]/my-app[1]/div[1]/ng-component[1]/div[2]/mat-horizontal-stepper[1]/div[2]/div[8]/form[1]/authorisation[1]/section[1]/div[2]/button[2]/span[1]"); }

    async eight() {
        await browser.pause(500)
        await this.check1.click();
        await this.check2.click();
        await this.sign.click();
        await 
        await this.submit.click();
        await browser.pause(4000)
    }
}
module.exports = new hheight();