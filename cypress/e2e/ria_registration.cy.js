it('Navigates from Get Started button to secure landing page and checks fields', () => {

  // navigate in the principal page of Ria Money Transfer
  cy.visit('https://www.riamoneytransfer.com/');

  // "Get Started" button selector 
    //==================================================================================================================== 
    //  Because the "Get Started" button does not currently exist in the interface, or and element/ID in the code
    //                   the "Send Money" button is used to access the requested page.
    //====================================================================================================================

  cy.get('#quote-details')
    .parent()
    .find('a[href*="secure.riamoneytransfer.com"]')
    .invoke('removeAttr', 'target')
    .click();

  cy.origin('https://secure.riamoneytransfer.com', () => {

  // validate that we are in "secure" URL
  cy.location('origin')
    .should('eq', 'https://secure.riamoneytransfer.com');

  // Since there is a possibility of the the cookie acceptance message is showed.
    const cookieButton =
      'button[analytics-name="consent-manager-allow-all-cookies"]';

  // Wait for the Register link to be available
  cy.get('a[analytics-name="login-register"]')
    .should('exist');

  // Check for cookie banner immediately before clicking Register
  cy.get('body').then(($body) => {

    const $cookieButton = $body
      .find('button[analytics-name="consent-manager-allow-all-cookies"]')
      .filter(':visible');

    if ($cookieButton.length > 0) {
      cy.wrap($cookieButton)
        .click();

    }

  });

  // Validar enlace "Regístrate"
  cy.get('a[analytics-name="login-register"]')
    .should('be.visible')
    .and('contain.text', 'Regístrate');

  // Validar campo "Teléfono o correo electrónico"
  cy.get('input[analytics-name="login-email-input"]')
    .should('be.visible');

  // Validar campo "Contraseña"
  cy.get('input[type="password"]')
    .should('be.visible');

//================================================================================================================= 
//   Due to the ambiguity of the requirement, this last validation can be performed OPTIONALLY.
//=================================================================================================================

  /*/ OPTIONAL Go to the Register page country selection
  cy.get('a[analytics-name="login-register"]')
    .should('be.visible')
    .click();

  //Go to the Create Account page where you will see the options to add an email and password
  cy.get('button[analytics-name="register-country-submit"]')
    .should('be.visible')
    .should('be.enabled')
    .click();

  /*/

  });
  
});