class patientfile{
get presenthh() { return $("/html[1]/body[1]/my-app[1]/div[2]/ng-component[1]/div[3]/div[1]/div[1]/div[4]/div[2]/div[2]/div[2]/div[1]/div[4]/a[2]/img[1]"); }

async hhpresent(){

    await browser.pause(5000)
    await this.presenthh.scrollIntoView();
    await this.presenthh.click();
}
}
module.exports = new patientfile();