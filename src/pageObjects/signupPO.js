const pageObject = require('./pageObject')

class signupPO extends pageObject{
    constructor() {
      super();
      this.emailInput = $('#email');
      this.passwordInput = $('#password');
      this.submitButton=$('button[data-qa*="submit"]');
      this.passwordError = $('span[data-qa*="error-password"]');
      this.termsError = $('span[data-qa*="error-terms"]');
    }


    async sendTextTo(element,text){
        return this[element].sendKeys(text);
    }

    getUrl = (url) => super.getUrl(url);

    isElementDisplayed =(ele) => super.isElementDisplayed(this[ele]);

    sendTextTo = (ele, text) => super.sendTextTo(this[ele], text);

    clickOn = (ele) => super.clickOn(this[ele]);
    
    getText = (ele) => super.getText(this[ele]);
  }
  module.exports = new signupPO();