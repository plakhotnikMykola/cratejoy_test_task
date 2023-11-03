const Page = require('./page');
const allureReport = require("@wdio/allure-reporter");

class CartModule extends Page {

    get secureCheckout() {return $('a.button--secondary')};

    async getPriceByIDOfProduct(id) {
        const even = await browser.$(`div[data-cart-item-variant="${id}"] div.items-center span.text-sm`).getText();
        return even;
    }

    async clickSecureCheckoutButton() {
        await this.secureCheckout.click();
        allureReport.addStep('Click on Secure Checkout button')
    }
}

module.exports = new CartModule();
