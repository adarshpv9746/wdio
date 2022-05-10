
const helper = require('../../helpers/helper');

class activate {
    get acpop () {return $("/html[1]/body[1]/div[1]/div[2]/div[1]/mat-dialog-container[1]/subscription-act-popup[1]/div[1]/div[4]/mdl-button[2]");}
    get accheck () {return $("//label[@class='cb_label']");}
    get accont () {return $("//button[@id='action-bar-btn-continue']");}
    get sign1 () {return $("/html[1]/body[1]/div[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[2]/div[4]/div[1]/section[1]/div[7]/div[1]/div[4]/div[3]/button[1]/div[1]/div[1]");}
    get signbut () {return $("/html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/div[1]/div[3]/button[1]");}

    get printname () {return $("/html[1]/body[1]/div[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[2]/div[4]/div[1]/section[1]/div[7]/div[1]/div[4]/div[1]/input[1]");}
    get ptitle () {return $("/html[1]/body[1]/div[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[2]/div[4]/div[1]/section[1]/div[7]/div[1]/div[4]/div[2]/input[1]");}
    get finish () {return $("//button[@id='end-of-document-btn-finish']");}
    
    //tx
    get txcheck(){return $("/html[1]/body[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/label[1]");}
    get txcontinue(){return $("/html[1]/body[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[4]/div[1]/button[1]");};
    get txstart(){return $("/html[1]/body[1]/div[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[2]/div[1]/button[1]/span[1]");}
    get txsign1(){return $("/html/body/div[1]/div[2]/div/section[1]/div/div/div[2]/div[4]/div/section[2]/div[1]/div[1]/div[4]/div/button/div/div/i");}
    get txadopt(){return $("/html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/div[1]/div[3]/button[2]");}
    get txsign2(){return $("/html/body/div[1]/div[2]/div/section[1]/div/div/div[2]/div[4]/div/section[2]/div[2]/div[1]/div[4]/div/button/div/div/div");}
    //get txfinish(){return $("//button[@id='end-of-document-btn-finish']");}

    //coo approve
    get coosign1(){return $("/html[1]/body[1]/div[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[2]/div[4]/div[1]/section[2]/div[1]/div[1]/div[4]/div[1]/button[1]/div[1]/div[1]/div[1]");}
    get coosign2(){return $("/html[1]/body[1]/div[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[2]/div[4]/div[1]/section[2]/div[2]/div[1]/div[4]/div[1]/button[1]/div[1]/div[1]/i[1]");}
    get canceldown() {return $("/html[1]/body[1]/mdl-dialog-host-component[1]/div[2]/div[1]/div[3]/mdl-button[1]");}
    
    async act() {
    
        await this.acpop.click();
        await browser.pause(15000)
        //await this.accheck.click();
        if(await this.accheck.isDisplayed()){await this.accheck.click(); await browser.pause(200);};
        await this.accont.click();
        await browser.pause(2000)
        //await this.sign1.waitForDisplayed({ timeout: 10000 });
        await this.printname.setValue("AutoTesting");
        await this.ptitle.setValue("testing");
        await this.sign1.click();
        await this.signbut.click();
        await browser.pause(1000) 
        await this.finish.click();
        await browser.pause(3000)
        await expect(browser).toHaveUrlContaining('/cart');

    }

    async tx(){
        await browser.pause(15000)
        //helper.godwait(this.txcheck);
        if(await this.txcheck.isDisplayed()){await this.txcheck.click(); await browser.pause(200);};
        await this.txcontinue.click();
        await browser.pause(2000);
        //await this.txstart.click();
        //await browser.pause(500);
        await this.txsign1.click();
        await browser.pause(1000);
        await this.txadopt.click();
        await browser.pause(2000);
        //await this.txsign1.click();
        //await browser.pause(500);
        await this.txsign2.click();
        await browser.pause(1000);
        await this.finish.click();
        await browser.pause(5000);
        await expect(browser).toHaveUrlContaining('/patient-cart/');
    }

    async cootx(){
        await browser.pause(10000)
        await this.txcontinue.click();
        await browser.pause(1000);
        //await this.txstart.click();
        //await browser.pause(500);
        await this.coosign1.click();
        await browser.pause(2000);

        await this.coosign2.click();
        await browser.pause(500);
        await this.finish.click();
        await browser.pause(3000);
        await this.canceldown.click();
        await browser.pause(5000);
        await expect(browser).toHaveUrlContaining('/dashboard');

    }
}
module.exports = new activate
