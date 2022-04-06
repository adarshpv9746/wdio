class adduser {
    get hamburger () {return $("//img[@alt='menu-icon']");}
    get user_manage () {return $("//li[contains(.,'User Management')]");}
    get add_user () {return $("//span[@class='mdl-button__ripple-container']");}

    get userrole () {return $("//div[@class='center-contents']/div[@class='two ng-star-inserted']//input[@class='mdl-textfield__input']");}
    get userrole1 () {return $("//mdl-option[3]//div[@class='mdl-list__item-primary-content']");}

    get location () {return $("//div[@class='c-btn']");}
    get location1 () {return $("//label[.='WWWWWWW, Wwwww']");}

    get dlang () {return $("//div[@class='mdl-textfield is-upgraded']/input[@class='mdl-textfield__input']");}
    get dlang1 () {return $("//div[@class='mdl-list__item']");}

    get joindate () {return $(".mdl-textfield__input[placeholder='mm/dd/yyyy']");}
    get fname () {return $("//input[@name='first_name']");}
    get lname () {return $("//input[@name='last_name']");}
    get yob () {return $("[min='1900']");}
    get sgender () {return $("//mdl-radio[1]/span[@class='mdl-radio__ripple-container mdl-ripple--center']");}
    get username () {return $("//input[@name='username']");}
    get tpass () {return $("//input[@name='temporary_password']");}
    get accdetails () {return $("//input[@name='email']");}
    get add () {return $(".primary > .mdl-button__ripple-container");}

    async newuser() {
        await this.hamburger.click();
        await this.user_manage.click();
        await browser.pause(5000)
        await this.add_user.click();
        await browser.pause(5000)

        await this.userrole.click();
        await this.userrole1.click();

        await this.location.click();
        await this.location1.click();

        await this.dlang.click();
        await this.dlang1.click();

        await this.joindate.setValue("07182021");
        await this.fname.setValue("testtc");
        await this.lname.setValue("test");
        await this.yob.setValue("1999")
        await this.sgender.click();
        await this.username.setValue("tctest");
        await this.tpass.setValue("qb1234");
        await this.accdetails.setValue("a@w.com");
        await this.add.click();
        await browser.pause(5000)

    }
}

module.exports = new adduser();
