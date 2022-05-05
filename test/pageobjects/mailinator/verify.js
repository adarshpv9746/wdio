

class email {
    /**
     * define selectors using getter methods
     */
    get verifymail () {
        return $('/html[1]/body[1]/div[1]/main[1]/div[2]/div[3]/div[1]/div[4]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[3]');
    }

    get verify () {
        return $("/html[1]/body[1]/a[1]");
    }
    
    

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async vmail (email) {
        
        await browser.url('https://www.mailinator.com/v4/public/inboxes.jsp?to='+email);
        await this.verifymail.click();
        const bodyiframe = await browser.$("/html/body/div/main/div[1]/div/div[3]/div/div[1]/iframe");
        await browser.switchToFrame(bodyiframe);
        await browser.pause(1000);
        await this.verify.click();
        await browser.switchToParentFrame();

        await browser.pause(5000)
        const handle = await browser.getWindowHandles()
        await browser.switchToWindow(handle[1])
        await browser.pause(500);
        await expect(browser).toHaveUrlContaining('/ses-verification-success');
    }

    
}

module.exports = new email();
