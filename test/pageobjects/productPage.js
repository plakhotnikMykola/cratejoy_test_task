const Page = require('./page');
const allureReport = require("@wdio/allure-reporter");

class ProductPage extends Page {

    get oneMonthPlan() {return $('label[for="selling_plan-0"]')};
    get threeMonthsPlan() {return $('label[for="selling_plan-1"]')};
    get sixMonthsPlan() {return $('label[for="selling_plan-2"]')};
    get twentyMonthsPlan() {return $('label[for="selling_plan-3"]')};
    get addToCartButton() {return $('#add-to-cart')};
    get productIdElement() {return $('input[name="id"]')}

    async chooseOneMonthPlan() {
        await this.oneMonthPlan.click();
        allureReport.addStep('Click on One Month Plan')
    }

    async clickAddToCartButton() {
        await this.addToCartButton.click();
        allureReport.addStep('Click on Add To Cart Button')
    }

    async getProductId() {
        return await this.productIdElement.getAttribute('value');
    }

    async getPrice(monthPlanElement) {
        const even = await monthPlanElement.$('span').getText();
        return even;
    }

}

module.exports = new ProductPage();
