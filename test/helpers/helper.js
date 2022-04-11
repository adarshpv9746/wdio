class helper {
    test_string = "WWWWWWWWWWWWWW"
    mail = "csicoet18@gmail.com"
    test_mail = "{wewrty}56*@As34-r.accountants"
    random_mail = "csicoet18+"+this.uid(123456,1000000)+"@gmail.com";
    uid(min, max) {
        return Math.floor(
            Math.random() * (max - min + 1) + min
        )
    }
}

module.exports = new helper();