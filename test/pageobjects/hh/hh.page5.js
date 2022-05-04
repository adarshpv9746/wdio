const helper = require('../../helpers/helper');
//////////  PAGE 5  ///////////

class hhfive {
    //HH form page 5 elements
    get dentist() { return $("[formcontrolname='dentist'] [placeholder]"); }

    get last_visit() { return $("/html[1]/body[1]/my-app[1]/div[1]/ng-component[1]/div[2]/mat-horizontal-stepper[1]/div[2]/div[5]/form[1]/dental-history[1]/section[1]/div[1]/form[1]/div[1]/div[2]/div[1]/img[1]"); }
    get last_visit1() { return $(".mbsc-fr-btn1"); }

    get next_visit() { return $("/html[1]/body[1]/my-app[1]/div[1]/ng-component[1]/div[2]/mat-horizontal-stepper[1]/div[2]/div[5]/form[1]/dental-history[1]/section[1]/div[1]/form[1]/div[1]/div[3]/div[1]/img[1]"); }
    get next_visit1() { return $(".mbsc-fr-btn1"); }

    get family_friend() { return $("/html[1]/body[1]/my-app[1]/div[1]/ng-component[1]/div[2]/mat-horizontal-stepper[1]/div[2]/div[5]/form[1]/dental-history[1]/section[1]/div[1]/form[1]/div[2]/div[1]/div[1]/div[3]/mdl-radio[1]/span[4]"); }
    get family_friend1() { return $("/html[1]/body[1]/my-app[1]/div[1]/ng-component[1]/div[2]/mat-horizontal-stepper[1]/div[2]/div[5]/form[1]/dental-history[1]/section[1]/div[1]/form[1]/div[3]/div[1]/mdl-textfield[1]/div[1]/input[1]"); }

    get ph_health() { return $("/html[1]/body[1]/my-app[1]/div[1]/ng-component[1]/div[2]/mat-horizontal-stepper[1]/div[2]/div[5]/form[1]/dental-history[1]/section[1]/div[1]/form[1]/div[4]/div[1]/div[1]/div[1]/mdl-radio[1]/span[4]"); }
    get parent_concern() { return $("[formcontrolname='parents_concerns_about_orthodontics'] [placeholder]"); }
    get child_concern() { return $("[formcontrolname='concerns_about_orthodontics'] [placeholder]"); }

    get visited_orthodontist() { return $("/html[1]/body[1]/my-app[1]/div[1]/ng-component[1]/div[2]/mat-horizontal-stepper[1]/div[2]/div[5]/form[1]/dental-history[1]/section[1]/div[1]/form[1]/div[6]/div[1]/div[1]/div[1]/mdl-radio[1]/span[4]"); }
    get visited_date() { return $("/html[1]/body[1]/my-app[1]/div[1]/ng-component[1]/div[2]/mat-horizontal-stepper[1]/div[2]/div[5]/form[1]/dental-history[1]/section[1]/div[1]/form[1]/div[6]/div[2]/div[1]/img[1]"); }
    get visited_date1() { return $(".mbsc-fr-btn1"); }
    get reason() { return $("/html[1]/body[1]/my-app[1]/div[1]/ng-component[1]/div[2]/mat-horizontal-stepper[1]/div[2]/div[5]/form[1]/dental-history[1]/section[1]/div[1]/form[1]/div[6]/div[3]/mdl-textfield[1]/div[1]/input[1]"); }

    get adenoids() { return $("[formcontrolname='tonsils_or_adenoids_removed'] > .mdl-checkbox__ripple-container"); }

    get filling1() { return $("/html[1]/body[1]/my-app[1]/div[1]/ng-component[1]/div[2]/mat-horizontal-stepper[1]/div[2]/div[5]/form[1]/dental-history[1]/section[1]/div[1]/form[1]/div[8]/div[1]/div[1]/div[1]/mdl-textfield[1]/div[1]/input[1]"); }
    get filling2() { return $("/html[1]/body[1]/my-app[1]/div[1]/ng-component[1]/div[2]/mat-horizontal-stepper[1]/div[2]/div[5]/form[1]/dental-history[1]/section[1]/div[1]/form[1]/div[8]/div[1]/div[1]/div[2]/mdl-textfield[1]/div[1]/input[1]"); }
    get filling3() { return $("/html[1]/body[1]/my-app[1]/div[1]/ng-component[1]/div[2]/mat-horizontal-stepper[1]/div[2]/div[5]/form[1]/dental-history[1]/section[1]/div[1]/form[1]/div[8]/div[1]/div[1]/div[3]/mdl-textfield[1]/div[1]/input[1]"); }

    get injury_teeth() { return $("/html[1]/body[1]/my-app[1]/div[1]/ng-component[1]/div[2]/mat-horizontal-stepper[1]/div[2]/div[5]/form[1]/dental-history[1]/section[1]/div[1]/form[1]/div[9]/div[1]/div[1]/div[1]/mdl-checkbox[1]/span[4]"); }
    get brushes_twice() { return $("/html[1]/body[1]/my-app[1]/div[1]/ng-component[1]/div[2]/mat-horizontal-stepper[1]/div[2]/div[5]/form[1]/dental-history[1]/section[1]/div[1]/form[1]/div[10]/div[1]/div[1]/div[1]/div[1]/mdl-checkbox[1]/span[4]"); }

    get speech_problem() { return $("/html[1]/body[1]/my-app[1]/div[1]/ng-component[1]/div[2]/mat-horizontal-stepper[1]/div[2]/div[5]/form[1]/dental-history[1]/section[1]/div[1]/form[1]/div[11]/div[1]/div[1]/div[1]/mdl-radio[1]/span[4]"); }
    get speech_problem_reason() { return $("/html[1]/body[1]/my-app[1]/div[1]/ng-component[1]/div[2]/mat-horizontal-stepper[1]/div[2]/div[5]/form[1]/dental-history[1]/section[1]/div[1]/form[1]/div[11]/div[2]/mdl-textfield[1]/div[1]/input[1]"); }

    get nail_biting() { return $("/html[1]/body[1]/my-app[1]/div[1]/ng-component[1]/div[2]/mat-horizontal-stepper[1]/div[2]/div[5]/form[1]/dental-history[1]/section[1]/div[1]/form[1]/div[12]/div[1]/div[2]/div[1]/div[1]/mdl-checkbox[1]/span[4]"); }
    get oral_cancer() { return $("/html[1]/body[1]/my-app[1]/div[1]/ng-component[1]/div[2]/mat-horizontal-stepper[1]/div[2]/div[5]/form[1]/dental-history[1]/section[1]/div[1]/form[1]/div[12]/div[1]/div[2]/div[3]/div[10]/mdl-checkbox[1]/span[4]"); }

    get next() { return $("/html[1]/body[1]/my-app[1]/div[1]/ng-component[1]/div[2]/mat-horizontal-stepper[1]/div[2]/div[5]/form[1]/dental-history[1]/section[1]/div[2]/button[2]/span[1]"); }

    async five() {
        await this.dentist.setValue(helper.test_string);

        await this.last_visit.click();
        await this.last_visit1.click();

        await this.next_visit.click();
        await this.next_visit1.click();

        await this.family_friend.click();
        await this.family_friend1.setValue(helper.test_string);

        await this.ph_health.click();
        await this.parent_concern.setValue(helper.test_string);
        await this.child_concern.setValue(helper.test_string);

        await this.visited_orthodontist.click();
        await this.visited_date.click();
        await this.visited_date1.click();
        await this.reason.setValue(helper.test_string);

        

        await this.adenoids.click();

        //await this.filling1.scrollIntoView();

        //await this.filling1.filling1("4");
        //await this.filling2.filling2("3");
        //await this.filling3.filling3("4");

        await this.injury_teeth.click();
        await this.brushes_twice.click();

        await this.speech_problem.click();
        await this.speech_problem_reason.setValue(helper.test_string);

        await this.nail_biting.click();
        await this.oral_cancer.click();

        await this.next.click();
    }
}
module.exports = new hhfive();