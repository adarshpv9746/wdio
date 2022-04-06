//////////  PAGE 5  ///////////

class hhfive {
    //HH form page 5 elements
    get dentist() {return $("[formcontrolname='dentist'] [placeholder]"); }

    get last_visit() {return $("[formcontrolname='dentist_last_visit'] [placeholder]"); }
    get last_visit1() {return $(".mbsc-fr-btn1"); }

    get next_visit() {return $("/html/body/my-app/div/ng-component/div[2]/mat-horizontal-stepper/div[2]/div[5]/form/dental-history/section/div[1]/form/div[1]/div[3]/div/mdl-textfield/div/input"); }
    get next_visit1() {return $(".mbsc-fr-btn1"); }

    get family_friend() {return $("[value='Family or Friend'] > .mdl-radio__ripple-container"); }
    get family_friend1() {return $("[ng-reflect-maxlength='28'][placeholder]"); }

    get ph_health() {return $("[value='Good'] > .mdl-radio__ripple-container"); }
    get parent_concern() {return $("[formcontrolname='parents_concerns_about_orthodontics'] [placeholder]"); }
    get child_concern() {return $("[formcontrolname='concerns_about_orthodontics'] [placeholder]"); }

    get visited_orthodontist() {return $("/html/body/my-app/div/ng-component/div[2]/mat-horizontal-stepper/div[2]/div[5]/form/dental-history/section/div[1]/form/div[5]/div[1]/div/div[1]/mdl-radio/span[1]"); }
    get visited_date() {return $("[formcontrolname='orthodontist_visited_when'] [placeholder]"); }
    get visited_date1() {return $(".mbsc-fr-btn1"); }
    get reason() {return $("[ng-reflect-maxlength='84'][placeholder]"); }

    get adenoids() {return $("[formcontrolname='tonsils_or_adenoids_removed'] > .mdl-checkbox__ripple-container"); }

    get filling1() {return $("[formcontrolname='no_of_filings'] [placeholder]"); }
    get filling2() {return $("[formcontrolname='no_of_root_canals'] [placeholder]"); }
    get filling3() {return $("[formcontrolname='no_of_crowns'] [placeholder]"); }

    get injury_teeth() {return $("[formcontrolname='injury_teeth'] > .mdl-checkbox__ripple-container"); }
    get brushes_twice() {return $("[ng-reflect-name='brushes_twice_per_day'] > .mdl-checkbox__ripple-container"); }

    get speech_problem() {return $(".is-checked[formcontrolname='speech_problem'] > .mdl-radio__ripple-container"); }
    get speech_problem_reason() {return $("[ng-reflect-maxlength='124'][placeholder]"); }

    get nail_biting() {return $("[ng-reflect-name='nail_biting'] > .mdl-checkbox__ripple-container"); }
    get oral_cancer() {return $("[ng-reflect-name='oral_cancer'] > .mdl-checkbox__ripple-container"); }

    get next() {return $(".mat-primary[_ngcontent-fvq-c8]"); }

    async five() {
        await this.dentist.setValue("testing");

        await this.last_visit.click();
        await this.last_visit1.click();

        await this.next_visit.click();
        await this.next_visit1.click();

        await this.family_friend.click();
        await this.family_friend1.setValue("testing");

        await this.ph_health.click();
        await this.parent_concern.setValue("testing");
        await this.child_concern.setValue("testing");

        //await this.adenoids.scrollIntoView();
        await $("//p[contains(.,'Has your child visited an orthodontist before?*')]").scrollIntoView();
        await this.visited_orthodontist.click();
        await this.visited_date.click();
        await this.visited_date1.click();
        await this.reason.setValue("testing");

        await this.adenoids.click();

        await this.filling1.filling1("4");
        await this.filling2.filling2("3");
        await this.filling3.filling3("4");

        await this.injury_teeth.click();
        await this.brushes_twice.click();

        await this.speech_problem.click();
        await this.speech_problem_reason.setValue("testing");

        await this.nail_biting.click();
        await this.oral_cancer.click();

        await this.next.click();
    }
}
module.exports = new hhfive();