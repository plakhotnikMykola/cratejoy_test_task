const Page = require('./page');
const allureReport = require('@wdio/allure-reporter')

class BestSellersPage extends Page {

    get productsList() {return $$('.app--listing-card')};
    get popup() {return $('div.needsclick path')};

    async open () {
        return await super.open();
    }

    async closePopup() {
        await this.popup.waitForDisplayed().then(r => this.popup.click());
        allureReport.addStep('Close popup')
    }

    async openProductByNumber(number) {
        await this.popup.waitForDisplayed({reverse: true}).then(r => this.productsList[number].click());
        allureReport.addStep(`Open product number ${number + 1}`)
    }
}

module.exports = new BestSellersPage();
