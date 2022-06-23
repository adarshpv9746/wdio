class snapper {
    get smile() { return $("/html/body/my-app/div[1]/ng-component/div[2]/div[2]/div[1]/div[1]/div[1]/div[2]"); }
    get smileTake() { return $("/html/body/my-app/div[1]/ng-component/div[2]/div[3]/button/img"); }
    get smileUp() { return $("/html/body/my-app/div[1]/ng-component/div[2]/div[3]/button[2]"); }

    get front() { return $("/html/body/my-app/div[1]/ng-component/div[2]/div[2]/div[1]/div[1]/div[2]/div[2]"); }
    get frontTake() { return $("/html/body/my-app/div[1]/ng-component/div[2]/div[3]/button/img"); }
    get frontUp() { return $("/html/body/my-app/div[1]/ng-component/div[2]/div[3]/button[2]/img"); }

    get apart() { return $("/html/body/my-app/div[1]/ng-component/div[2]/div[2]/div[1]/div[2]/div[1]/div[2]"); }
    get apartTake() { return $("/html/body/my-app/div[1]/ng-component/div[2]/div[3]/button/img"); }
    get apartUp() { return $("/html/body/my-app/div[1]/ng-component/div[2]/div[3]/button[2]/img"); }

    get right() { return $("/html/body/my-app/div[1]/ng-component/div[2]/div[3]/div[1]/div[2]/div[2]/div[2]"); }
    get rightTake() { return $("/html/body/my-app/div[1]/ng-component/div[2]/div[3]/button/img"); }
    get rightUp() { return $("/html/body/my-app/div[1]/ng-component/div[2]/div[3]/button[2]/img"); }

    get left() { return $("/html/body/my-app/div[1]/ng-component/div[2]/div[3]/div[1]/div[3]/div[1]/div[2]"); }
    get leftTake() { return $("/html/body/my-app/div[1]/ng-component/div[2]/div[3]/button/img"); }
    get leftUp() { return $("/html/body/my-app/div[1]/ng-component/div[2]/div[3]/button[2]/img"); }

    get upper() { return $("/html/body/my-app/div[1]/ng-component/div[2]/div[3]/div[1]/div[3]/div[2]/div[2]"); }
    get upperTake() { return $("/html/body/my-app/div[1]/ng-component/div[2]/div[3]/button/img"); }
    get upperUp() { return $("/html/body/my-app/div[1]/ng-component/div[2]/div[3]/button[2]/img"); }

    get lower() { return $("/html/body/my-app/div[1]/ng-component/div[2]/div[3]/div[1]/div[4]/div/div[2]"); }
    get lowerTake() { return $("/html/body/my-app/div[1]/ng-component/div[2]/div[3]/button/img"); }
    get lowerUp() { return $("/html/body/my-app/div[1]/ng-component/div[2]/div[3]/button[2]/img"); }

    get next() { return $("/html/body/my-app/div[1]/ng-component/div[2]/div[3]/div[1]/div[5]/div[2]/div/mdl-button"); }
    get mobile() { return $("/html/body/my-app/div[1]/ng-component/div[2]/div[2]/div[2]/div/div[1]/div[4]/div[2]/div[1]/div[2]"); }
    get submit() { return $("/html/body/my-app/div[1]/ng-component/div[2]/div[3]/div[2]/div/div[2]/div/div[2]/div/mdl-button"); }
    
    async take() {
        await browser.pause(2000)
        await this.smile.click();
        await browser.pause(500)
        await this.smileTake.click();
        await browser.pause(1000)
        await this.smileUp.click();
        
        await browser.pause(2000)
        await this.front.click();
        await browser.pause(500)
        await this.frontTake.click();
        await browser.pause(1000)
        await this.frontUp.click();

        await browser.pause(3000)
        await this.apart.click();
        await browser.pause(500)
        await this.apartTake.click();
        await browser.pause(1000)
        await this.apartUp.click();

        await browser.pause(2000)
        await this.apart.scrollIntoView();
        await this.right.click();
        await browser.pause(500)
        await this.rightTake.click();
        await browser.pause(1000)
        await this.rightUp.click();

        await browser.pause(2000)
        await this.apart.scrollIntoView();
        await this.left.click();
        await browser.pause(500)
        await this.leftTake.click();
        await browser.pause(1000)
        await this.leftUp.click();

        await browser.pause(2000)
        await this.apart.scrollIntoView();
        await this.upper.click();
        await browser.pause(500)
        await this.upperTake.click();
        await browser.pause(1000)
        await this.upperUp.click();

        await browser.pause(2000)
        await this.apart.scrollIntoView();
        await this.lower.click();
        await browser.pause(500)
        await this.lowerTake.click();
        await browser.pause(1000)
        await this.lowerUp.click();

        await this.apart.scrollIntoView();
        await this.next.click();
        await browser.pause(2000)
        await this.mobile.scrollIntoView();
        await this.submit.click();
        await browser.pause(5000)
    }
}
module.exports = new snapper();
//status: "err", message: {preferred_treatment_options: ["This field is required."]}}
message: {preferred_treatment_options: ["This field is required."]}
status: "err"