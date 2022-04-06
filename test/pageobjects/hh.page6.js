
////////////// PAGE 6  //////////////////


class hhsix {
    get physician() { return $("//form[@class='ng-dirty ng-touched ng-invalid']//div[@class='col-5 top-space']//mdl-radio[@class='is-upgraded mdl-radio ng-untouched ng-dirty ng-valid is-checked']/span[@class='mdl-radio__ripple-container mdl-ripple--center']"); }
    get reason() { return $("//input[@class='mdl-textfield__input ng-pristine ng-valid ng-star-inserted ng-touched']"); }
    get visit() { return $("//mdl-textfield[@class='left-text-box mdl-textfield is-upgraded mdl-textfield--floating-label ng-pristine ng-invalid ng-touched']//input[@class='mdl-textfield__input ng-pristine ng-valid mbsc-comp ng-star-inserted ng-touched']"); }
    get set() { return $("//div[@class='mbsc-fr-btn1 mbsc-fr-btn-e mbsc-fr-btn mbsc-active']"); }
    get dr() { return $("//mdl-textfield[@class='left-text-box mdl-textfield is-upgraded mdl-textfield--floating-label ng-untouched ng-pristine ng-invalid is-focused']//input[@class='mdl-textfield__input ng-untouched ng-pristine ng-valid ng-star-inserted']"); }
    get phone() { return $("//mdl-textfield[@class='left-text-box mdl-textfield is-upgraded mdl-textfield--floating-label ng-untouched ng-pristine ng-invalid is-focused']//input[@class='mdl-textfield__input ng-untouched ng-pristine ng-valid ng-star-inserted']"); }
    get medications() { return $("//div[@class='col-6 top-space']//mdl-radio[@class='is-upgraded mdl-radio ng-untouched ng-dirty ng-valid is-checked']"); }
    get dosage() { return $("//mdl-textfield[@class='left-text-box mdl-textfield is-upgraded mdl-textfield--floating-label ng-untouched ng-pristine ng-invalid is-focused']//input[@class='mdl-textfield__input ng-untouched ng-pristine ng-valid ng-star-inserted']"); }
    get illness() { return $("//form[@class='ng-dirty ng-touched ng-invalid']/div[4]//mdl-radio[@class='is-upgraded mdl-radio ng-untouched ng-dirty ng-valid is-checked']/span[@class='mdl-radio__ripple-container mdl-ripple--center']"); }
    get describe() { return $("//mdl-textfield[@class='left-text-box mdl-textfield is-upgraded mdl-textfield--floating-label ng-untouched ng-pristine ng-invalid is-focused']//input[@class='mdl-textfield__input ng-untouched ng-pristine ng-valid ng-star-inserted']"); }
    get trans() { return $("//form[@class='ng-dirty ng-touched ng-invalid']/div[5]//mdl-radio[@class='is-upgraded mdl-radio ng-untouched ng-dirty ng-valid is-checked']/span[@class='mdl-radio__ripple-container mdl-ripple--center']"); }
    get dates() { return $("//mdl-textfield[@class='left-text-box mdl-textfield is-upgraded mdl-textfield--floating-label ng-untouched ng-pristine ng-invalid is-focused']//input[@class='mdl-textfield__input ng-untouched ng-pristine ng-valid ng-star-inserted']"); }
    get penicilin() { return $("//form[@class='ng-invalid ng-dirty ng-touched']//mdl-checkbox[@class='mdl-checkbox is-upgraded ng-untouched ng-valid is-checked ng-dirty']/span[@class='mdl-checkbox__ripple-container mdl-ripple--center']"); }
    get cancer() { return $("//form[@class='ng-invalid ng-dirty ng-touched']//div[@class='marigin-top-and-bottom increase-marigin ng-star-inserted']/mdl-checkbox[@class='mdl-checkbox is-upgraded ng-untouched ng-valid is-checked ng-dirty']/span[@class='mdl-checkbox__ripple-container mdl-ripple--center']"); }
    get next() { return $("//button[@class='mat-focus-indicator mat-flat-button mat-button-base mat-primary cdk-focused cdk-mouse-focused']"); }

    async six() {
        await this.physician.click();
        await this.reason.setValue("hhhhhh");
        await this.visit.click();
        await this.dr.setValue("rrrr");
        await this.phone.setValue("0000009000");
        await this.set.click();
        await this.medications.click();
        await this.dosage.setValue("u89");
        await this.illness.click();
        await this.describe.setValue("u89");
        await this.trans.click();
        await this.dates.setValue("u5689");
        await this.penicilin.click();
        await this.cancer.click();
        await this.next.click();


    }
}

module.exports = new hhsix();