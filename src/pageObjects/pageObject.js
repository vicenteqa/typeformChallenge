const expectedConditions = protractor.ExpectedConditions;
class PageObject {
	constructor() {}

	getUrl(url) {
		browser.waitForAngularEnabled(false);
		browser.get(url);
	}

	isElementDisplayed(ele) {
		browser.wait(expectedConditions.visibilityOf(ele, 20000, 'Element is not present'));
		return ele.isDisplayed();
	}

	sendTextTo(ele, text) {
		browser.wait(expectedConditions.elementToBeClickable(ele, 20000, 'Element is not clickable'));
		return ele.click().clear().sendKeys(text);
	}

	clickOn(ele) {
		browser.wait(expectedConditions.elementToBeClickable(ele, 20000, 'Element is not clickable'));
		return ele.click();
	}

	getText(ele) {
		browser.wait(expectedConditions.presenceOf(ele, 20000, 'Element is not present'));
		return ele.getText();
	}

	getAttribute(ele, atr) {
		browser.wait(expectedConditions.presenceOf(ele, 20000, 'Element is not present'));
		return ele.getAttribute(atr);
	}
}

module.exports = PageObject;
