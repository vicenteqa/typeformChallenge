const pageObject = require('./pageObject');

class loginPO extends pageObject {
	constructor() {
		super();
		this.emailInput = $('#email');
		this.passwordInput = $('#password');
		this.submitButton = $('#btnlogin');
	}

	getUrl = (url) => super.getUrl(url);

	isElementDisplayed = (ele) => super.isElementDisplayed(this[ele]);

	getAttribute = (ele, atr) => super.getAttribute(this[ele], atr);

	getButtonText = (ele) => super.getText(this[ele].$('h1'));

	getCssAttribute = (ele, atr) => this[ele].getCssValue(atr);
}
module.exports = new loginPO();
