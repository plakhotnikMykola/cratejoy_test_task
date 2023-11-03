const bestSellersPage = require('../pageobjects/bestSellersPage.js')
const productPage = require('../pageobjects/productPage')
const cartModule = require('../pageobjects/cartModule')
const checkoutsPage = require('../pageobjects/checkoutsPage')
const allureReport = require('@wdio/allure-reporter')

describe('Verify that user has ability to add product to cart', () => {
    it('Open best sellers page and add product to cart', async () => {
        bestSellersPage.open()
        bestSellersPage.closePopup()
        bestSellersPage.openProductByNumber(0)
        const productId = await productPage.getProductId()
        productPage.chooseOneMonthPlan()
        const productPrice = await productPage.getPrice(productPage.oneMonthPlan)
        productPage.clickAddToCartButton()
        expect(await cartModule.getPriceByIDOfProduct(productId)).toEqual(productPrice)
        allureReport.addStep(`The product price in the cart = ${await cartModule.getPriceByIDOfProduct(productId)} is the same as the price in Product Page = ${productPrice}`)
        cartModule.clickSecureCheckoutButton()
        expect(await checkoutsPage.getPriceByIDOfProduct(productId)).toEqual(productPrice)
        allureReport.addStep(`The product price on the Checkout Page = ${await checkoutsPage.getPriceByIDOfProduct(productId)} is the same as price in Product Page = ${productPrice}`)
    });
});


