class helper {
    test_string = "WWWWWWWWWWWWWW"
    mail = "csicoet18@gmail.com"
    test_mail = "{wewrty}56*@As34-r.accountants"
    test_uname = "tester"+this.uid(100,200)
    random_mail = "csicoet18+"+this.uid(123456,1000000)+"@gmail.com"
    uid(min, max) {
        return Math.floor(
            Math.random() * (max - min + 1) + min
        )
    }

//     async godwait(locator){
//         while(!(locator.isDisplayed())){
//             await browser.pause(100);
//     }
// }
    async godwait(locator){
        var a=1;
        while(a){if(await locator.isDisplayed()){await locator.click(); await browser.pause(200); a=0;}};
}
}

module.exports = new helper();
