import { Then, When } from "@badeball/cypress-cucumber-preprocessor";

Then(`I am on the regular or irregular hours page`, () => {
  cy.checkIdHasText('content', 'Does the employee work irregular hours or for part of the year?');
})

When(`I chose the regular hours option and Continue`, () => {
    cy.clickByID('response-1');
    cy.contains('Continue').click();
})

When(`I chose the irregular hours option and Continue`, () => {
  cy.clickByID('response-0');
  cy.contains('Continue').click();
})