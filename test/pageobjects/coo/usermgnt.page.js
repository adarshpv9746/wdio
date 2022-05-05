const helper = require('../../helpers/helper');

class adduser {
    uname = helper.test_uname

    get hamburger () {return $("//img[@alt='menu-icon']");}
    get user_manage () {return $("//li[contains(.,'User Management')]");}
    get add_user () {return $("//span[@class='mdl-button__ripple-container']");}

    get userrole () {return $("//div[@class='center-contents']/div[@class='two ng-star-inserted']//input[@class='mdl-textfield__input']");}
    get userrole1 () {return $("//mdl-option[3]//div[@class='mdl-list__item-primary-content']");}

    get location () {return $("//div[@class='c-btn']");}
    get location1 () {return $("/html[1]/body[1]/div[1]/div[2]/div[1]/mat-dialog-container[1]/ng-component[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/angular2-multiselect[1]/div[1]/div[2]/div[3]/div[3]/ul[1]/li[1]/label[1]");}

    get dlang () {return $("/html[1]/body[1]/div[1]/div[2]/div[1]/mat-dialog-container[1]/ng-component[1]/div[1]/div[2]/div[2]/div[4]/div[1]/div[1]/mdl-select[1]/div[1]/input[1]");}
    get dlang1 () {return $("/html[1]/body[1]/div[1]/div[2]/div[1]/mat-dialog-container[1]/ng-component[1]/div[1]/div[2]/div[2]/div[4]/div[1]/div[1]/mdl-select[1]/div[1]/mdl-popover[1]/div[1]/mdl-option[1]/div[1]/div[1]");}

    get joindate () {return $("/html[1]/body[1]/div[1]/div[2]/div[1]/mat-dialog-container[1]/ng-component[1]/div[1]/div[2]/div[2]/div[4]/div[2]/mdl-textfield[1]/div[1]/input[1]");}
    get fname () {return $("//input[@name='first_name']");}
    get lname () {return $("//input[@name='last_name']");}
    get yob () {return $("[min='1900']");}
    get sgender () {return $("//mdl-radio[1]/span[@class='mdl-radio__ripple-container mdl-ripple--center']");}
    get username () {return $("//input[@name='username']");}
    get tpass () {return $("//input[@name='temporary_password']");}
    get accdetails () {return $("//input[@name='email']");}
    get add () {return $(".primary > .mdl-button__ripple-container");}
    get toast () {return $("/html[1]/body[1]/mdl-snackbar-component[1]/div[1]/button[1]");}
    get color () {return $("/html[1]/body[1]/div[1]/div[2]/div[1]/mat-dialog-container[1]/ng-component[1]/div[1]/div[2]/div[2]/div[5]/div[1]/div[3]/color-picker[1]/div[1]");}
    get color1 () {return $("/html[1]/body[1]/div[1]/div[2]/div[1]/mat-dialog-container[1]/ng-component[1]/div[1]/div[2]/div[2]/div[5]/div[1]/div[3]/color-picker[1]/div[1]/ul[1]/li[1]/i[1]");}

    
    

    async newuser() {
        await browser.pause(200);
        await this.hamburger.click();
        await this.user_manage.click();
        await browser.pause(500)
        await this.add_user.click();
        await browser.pause(2000)

        await this.userrole.click();
        await this.userrole1.click();

        await this.location.click();
        await this.location1.click();


        await this.dlang.click();
        await this.dlang1.click();

        await this.fname.setValue("testtc");
        await this.lname.setValue("test");
        await this.joindate.setValue("07182021");


        
        await this.yob.setValue("1999")
        await this.color.click();
        await this.color1.click();
        await this.sgender.click();
        await this.username.setValue(this.uname);
        await this.tpass.setValue("Tester@123");
        await this.accdetails.setValue(this.uname+"@mailinator.com");
        await this.add.click();


    }
}

module.exports = new adduser();
