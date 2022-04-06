class cartpage {
    
    get card () {return $$("/html/body/my-app/div[2]/ng-component/div[1]/div[2]/div[2]/div[2]");}
    get cardexp () {return $("//input[@name='exp-date']");}
    get cvc () {return $("//input[@name='cvc']");}
    get cname () {return $("//input[@class='mdl-textfield__input ng-pristine ng-valid ng-touched']");}
    get pay () {return $("//span[@class='mdl-button__ripple-container']");}

    
    async cart () {
        //cart page
        await browser.pause(15000);
        await this.card.clcik();
        await this.card.setValue("4111 1111 1111 1111");
        await this.cardexp.setValue("1234");
        await this.cvc.setValue("123");
        await this.cname.setValue("Robot");
        await this.pay.click();
        
    }
}

module.exports = new cartpage();