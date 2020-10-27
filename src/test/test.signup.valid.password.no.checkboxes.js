const dataEnv = require('../../config/data').test();
const signupPO = require('../pageObjects/signupPO');
const checkboxesErrorText = 'Necesitas aceptar nuestros Términos de Servicio y la Política de Privacidad para crear una cuenta de Typeform. Ver las opciones para cambiar tus preferencias';

describe('Validate password, leave checkboxes disabled', () => {
	it(`Load page ${dataEnv.typeformSignup}`, () => {
		signupPO.getUrl(dataEnv.typeformSignup);
		expect(signupPO.isElementDisplayed('emailInput'), 'Email input field is not displayed').toBe(true);
	});

	it(`Signup page - Type valid user email => ${dataEnv.emails.randomEmail}`, () => {
		signupPO.sendTextTo('emailInput', dataEnv.emails.randomEmail);
	});

	it(`Sign up page - Type valid password => ${dataEnv.passwords.validPassword}`, () => {
		signupPO.sendTextTo('passwordInput', `${dataEnv.passwords.validPassword}\t`);
	});

	it('Sign up page - Error message shows up when clicking submit button', () => {
		signupPO.clickOn('submitButton');
		expect(signupPO.isElementDisplayed('termsError'), 'Password error is not displayed').toBe(true);
		expect(signupPO.getText('termsError'), 'Password error text is not the expected').toBe(checkboxesErrorText);
	});
});
