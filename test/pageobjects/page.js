const { config } = require("../../wdio.conf");
const allureReport = require('@wdio/allure-reporter')

const Page = class Page {

    open (path) {
        allureReport.addStep("Open " + config.baseUrl)
        return browser.url(config.baseUrl + (path ? path : ''));
    }
}

module.exports = Page;
