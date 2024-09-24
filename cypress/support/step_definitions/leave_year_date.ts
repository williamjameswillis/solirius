import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

Then(`I am on the leave year date page`, () => {
    cy.checkIdHasText('content', 'When does the leave year start?');
  })

When(`I enter the leave year start date {string} and Continue`, (ValueToEnter: string) => {
    cy.enterDate(ValueToEnter);
    cy.contains('Continue').click();
})

Then(`I am presented with the leave year start date validation error {string}`, (validationError: string) => {
    cy.checkIdHasText('error-summary', validationError);
  })