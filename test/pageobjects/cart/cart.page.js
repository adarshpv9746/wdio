
class cartpage {
    
    get card () {return $("/html/body/div/form/span[2]/div/div[2]/span/input");}
    get cardexp () {return $("[name='exp-date']");}
    get cvc () {return $("//input[@name='cvc']");}
    get cname () {return $("/html[1]/body[1]/my-app[1]/div[2]/ng-component[1]/div[1]/div[2]/div[4]/mdl-textfield[1]/div[1]/input[1]");}
    //get pay () {return $("/html[1]/body[1]/my-app[1]/div[2]/ng-component[1]/div[1]/div[2]/div[5]/mdl-button[1]/span[1]");}
    
    
    async pay() {
        //cart page
        await browser.pause(5000)
        const frame1 = await browser.$("/html/body/my-app/div[2]/ng-component/div[1]/div[2]/div[2]/div[2]/div[1]/div/iframe");
        const frame2 = await browser.$("/html/body/my-app/div[2]/ng-component/div[1]/div[2]/div[2]/div[3]/div[1]/div[1]/div/iframe");
        const frame3 = await browser.$("/html/body/my-app/div[2]/ng-component/div[1]/div[2]/div[2]/div[3]/div[2]/div[1]/div/iframe");
        const pay = await browser.$("/html/body/my-app/div[2]/ng-component/div[1]/div[2]/div[5]/mdl-button");

        //await browser.pause(2000);
        await browser.switchToFrame(frame1);
        await browser.pause(1000);
        await this.card.setValue("4111 1111 1111 1111");
        await browser.switchToParentFrame();

        await browser.switchToFrame(frame2);
        await browser.pause(1000);
        await this.cardexp.setValue("1234");
        await browser.switchToParentFrame();
        
        await browser.switchToFrame(frame3);
        await browser.pause(1000);
        await this.cvc.setValue("123");
        await browser.switchToParentFrame();
        
        await this.cname.setValue("Robot");
        await browser.pause(100);
        await pay.click();

        await expect(browser).toHaveUrlContaining("/cart-success")
        
    }
}

module.exports = new cartpage();