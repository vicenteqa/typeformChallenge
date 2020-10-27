const dataEnv = require('../../config/data').test();
const signupPO = require('../pageObjects/signupPO');

describe('Validate blank password', () => {
	it(`Load page ${dataEnv.typeformSignup}`, () => {
		signupPO.getUrl(dataEnv.typeformSignup);
		expect(signupPO.isElementDisplayed('emailInput'), 'Email input field is not displayed').toBe(true);
	});

	it(`Type valid user email => ${dataEnv.emails.randomEmail}`, () => {
		signupPO.sendTextTo('emailInput', dataEnv.emails.randomEmail);
	});

	it('Error message shows up when clicking submit button', () => {
		signupPO.clickOn('submitButton');
		expect(signupPO.isElementDisplayed('passwordError'), 'Login error is not displayed').toBe(true);
		expect(signupPO.getText('passwordError'), 'Login error text is not the expected').toBe('Por favor, crea una contraseña de entre 8 y 128 caracteres');
	});
});
