describe('Ria Money Transfer - Calculator E2E Test', () => {
  beforeEach(() => {  
    // navigate in the principal page of Ria Money Transfer
    cy.visit('https://www.riamoneytransfer.com/es-cl');
  });

it('Validates error message when entering non-numeric characters in Amount',() => {
    //==================================================================================================================== 
    //    Because the field has numeric validation, it is impossible to see the message "Please enter a valid amount", 
    //             so it's validated that the field is empty when non-numeric characters are entered.
    //====================================================================================================================
     
    // Locate the amount input field, and type non-numeric characters
    cy.get ('input[id="amount-from"]')
      .clear()
      .type('abc');

    // Assert that the input field is empty after entering non-numeric characters
    cy.get('input[id="amount-from"]')
      .should('have.value', '')
    
});

//==================================================================

it('validates country selection in "Send to" dropdown', () => {

  // Open the "Send to" dropdown by clicking the button next to the input field
  cy.get('input[id="amount-to"]')
    .prev()
    .find('button')
    .click({ force: true });

  // search for Haiti in the search input field
  cy.get('input[type="search"]')
    .should('be.visible')
    .type('Haití');

  // search for HTG in the dialog and click on it
  cy.get('[role="dialog"]')
    .contains('HTG')
    .should('be.visible')
    .click();

  // select Only HTG from the visible options in the dropdown
  cy.get('button[role="option"]:visible')
    .contains('HTG')
    .should('be.visible')
    .click();

});

//==================================================================

it('Validates calculation for sending 25000 CLP to Haiti (HTG)', () => {
    
  // Enter the amount to send (25000 CLP)
  cy.get('input[id="amount-from"]')
    .clear()
    .type('25000');

  // Change the "Send to" country to Haiti (HTG) by following the steps of the previeous test case:
  cy.get('input[id="amount-to"]')
    .prev()
    .find('button')
    .click({ force: true });

  // Search Haiti
  cy.get('input[type="search"]')
    .should('be.visible')
    .clear()
    .type('Haiti');

  // Search HTG
  cy.get('[role="dialog"]')
    .contains('HTG')
    .should('be.visible')
    .click();

  // Select only HTG
  cy.get('button[role="option"]:visible')
    .contains('HTG')
    .should('be.visible')
    .click();

  // Verify that the "Reciben" (amount-to) field exists, is visible, and has a calculated numeric value greater than 0
  cy.get('input[id="amount-to"]')
    .should('be.visible')
    .and('not.have.value', '')
    .and('not.have.value', '0');
  });
  
});
