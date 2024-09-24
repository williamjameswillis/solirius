import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

Then(`I am on the number of days worked per week page`, () => {
    cy.checkIdHasText('content', 'Number of days worked per week?');
  })

When(`I enter {string} number of days worked per week and Continue`, (ValueToEnter: string) => {
    cy.enterValueByID('response', ValueToEnter);
    cy.contains('Continue').click();
})

Then(`I am presented with a validation error`, () => {
    cy.checkIdHasText('error-summary', 'There are only 7 days in a week. Please check and enter a correct value.');
  })