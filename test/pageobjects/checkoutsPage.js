const Page = require('./page');

class CheckoutsPage extends Page {

    async getPriceByIDOfProduct(id) {
        const even = browser.$(`tr[data-variant-id='${id}'] span.skeleton-while-loading`).getText()
        return even
    }
}

module.exports = new CheckoutsPage()
