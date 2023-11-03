const moment = require('moment');

let helpers = {};

helpers.takeScreenshot = function(message) {
    const timestamp = moment().format('YYYYMMDD-HHmmss.SSS');
    fs.ensureDirSync('reports/html-reports/screenshots/');
    const filepath = path.join('reports/html-reports/screenshots/', timestamp + '.png');
    this.browser.saveScreenshot(filepath);
    this.logMessage(message) ;
    process.emit('test:screenshot', filepath);
    return this;
}

helpers.randomValue = function(){
	return Math.random().toString(36).substr(1, 4);
}

module.exports = helpers;