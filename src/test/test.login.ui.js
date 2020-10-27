const dataEnv = require('../../config/data').test();
const loginPO = require('../pageObjects/loginPO');

//Test data
const expectedEmailPlaceholder = 'bruce@wayne.com';
const expectedPasswordPlaceholder = 'Introduce tu contraseña';
const expectedLoginSubmitText = 'Iniciar sesión en Typeform';
const expectedButtonBackground = 'rgba(38, 38, 39, 1)';

describe('Validate placeholders and submit button text', () => {
	it(`Load page ${dataEnv.typeformLogin}`, async () => {
		loginPO.getUrl(dataEnv.typeformLogin);
		expect(loginPO.isElementDisplayed('emailInput'), 'Email input field is not displayed').toBe(true);
	});

	it(`Login page - Validate that email placeholder is => ${expectedEmailPlaceholder}`, async () => {
		const currentEmailPlaceholder = await loginPO.getAttribute('emailInput', 'placeholder');
		expect(currentEmailPlaceholder, 'Email placeholder is not the expected one').toBe(expectedEmailPlaceholder);
	});

	it(`Login page - Validate that password placeholder is => ${expectedPasswordPlaceholder}`, async () => {
		const currentPasswordPlaceholder = await loginPO.getAttribute('passwordInput', 'placeholder');
		expect(currentPasswordPlaceholder, 'Password placeholder is not the expected one').toBe(expectedPasswordPlaceholder);
	});

	it(`Login page - Validate that submit button text is => ${expectedLoginSubmitText}`, async () => {
		const currentSubmitButtonText = await loginPO.getButtonText('submitButton');
		expect(currentSubmitButtonText, 'Submit button text is not the expected one').toBe(expectedLoginSubmitText);
  });

  it(`Login page - Validate that submit button background color is => ${expectedButtonBackground}`, async () => {
		const currentSubmitButtonBackground = await loginPO.getCssAttribute('submitButton','background-color');
    expect(expectedButtonBackground, 'Submit button background colour is not the expected one').toBe(currentSubmitButtonBackground);
  });
  
  
});
