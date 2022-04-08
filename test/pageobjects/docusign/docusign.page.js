


class activate {
    get acpop () {return $("//mdl-button[@class='primary mdl-button ng-star-inserted']");}
    get accheck () {return $("//label[@class='cb_label']");}
    get accont () {return $("//button[@id='action-bar-btn-continue']");}
    get sign1 () {return $("/html[1]/body[1]/div[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[2]/div[4]/div[1]/section[1]/div[1]/div[1]/div[4]/div[12]/button[1]/div[1]/div[1]/div[1]");}
    get signbut () {return $("//button[.='Adopt and Initial']");}
    get sign2 () {return $("/html[1]/body[1]/div[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[2]/div[4]/div[1]/section[1]/div[2]/div[1]/div[4]/div[22]/button[1]/div[1]/div[1]");}
    get sign3 () {return $("/html[1]/body[1]/div[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[2]/div[4]/div[1]/section[1]/div[3]/div[1]/div[4]/div[5]/button[1]/div[1]/div[1]/i[1]");}
    get sign4 () {return $("/html[1]/body[1]/div[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[2]/div[4]/div[1]/section[1]/div[4]/div[1]/div[4]/div[1]/button[1]/div[1]/div[1]/i[1]");}
    get sign5 () {return $("/html[1]/body[1]/div[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[2]/div[4]/div[1]/section[1]/div[5]/div[1]/div[4]/div[1]/button[1]/div[1]/div[1]");}
    get sign6 () {return $("/html[1]/body[1]/div[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[2]/div[4]/div[1]/section[1]/div[6]/div[1]/div[4]/div[1]/button[1]/div[1]/div[1]");}
    get sign7 () {return $("/html[1]/body[1]/div[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[2]/div[4]/div[1]/section[1]/div[7]/div[1]/div[4]/div[3]/button[1]/div[1]/div[1]/div[1]");}
    get sign8 () {return $("/html[1]/body[1]/div[1]/div[2]/div[1]/section[1]/div[1]/div[1]/div[2]/div[4]/div[1]/section[1]/div[7]/div[1]/div[4]/div[8]/button[1]/div[1]/div[1]/i[1]");}

    get printname () {return $("/html/body/div[1]/div[2]/div/section[1]/div/div/div[2]/div[4]/div/section/div[7]/div[1]/div[4]/div[1]/input");}
    get ptitle () {return $("/html/body/div[1]/div[2]/div/section[1]/div/div/div[2]/div[4]/div/section/div[7]/div[1]/div[4]/div[2]/input");}
    get finish () {return $("//button[@id='end-of-document-btn-finish']");}
    

    async act() {

    
        await this.acpop.click();
        await browser.pause(15000)
        await this.accheck.click();
        await this.accont.click();
        await browser.pause(2000)
        //await this.sign1.waitForDisplayed({ timeout: 10000 });
        await this.sign1.click();
        await this.signbut.click();
        await browser.pause(2000)
        await this.sign2.click();
        await browser.pause(1000)
        await this.sign3.click();
        await browser.pause(1000)
        await this.sign4.click();
        await browser.pause(1000)
        await this.sign5.click();
        await browser.pause(1000)
        await this.sign6.click();
        await browser.pause(1000)

        await this.printname.setValue("AutoTesting");
        await this.ptitle.setValue("testing");

        await this.sign7.click();
        await browser.pause(1000)     
        await this.sign8.click();
        await this.finish.click();
    }
}
module.exports = new activate
