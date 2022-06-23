class referral {
    get rmethod() { return $("/html/body/my-app/div[1]/ng-component/div/div[2]/div[1]/div[1]/mdl-select/div/input"); }
    get rmethod1() { return $("body > my-app > div.container > ng-component > div > div.ChildContent.content.content-height-page-6 > div.detail-section > div.select-box.required-label > mdl-select > div > mdl-popover > div > mdl-option:nth-child(1) > div"); }
    get next() { return $("/html/body/my-app/div[1]/ng-component/div/div[2]/div[3]/div[2]/div/mdl-button"); }

    async method() {
        await browser.pause(2000)
        await this.rmethod.click();
        await this.rmethod1.click();
        await this.next.click();
    }
}
module.exports = new referral();