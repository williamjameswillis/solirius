import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

Then(`I am on the employment start date page`, () => {
  cy.checkIdHasText("content", "What was the employment start date?");
});

When(
  `I enter the employment start date {string} and Continue`,
  (ValueToEnter: string) => {
    cy.enterDate(ValueToEnter);
    cy.contains("Continue").click();
  },
);

Then(`I am presented with a start date validation error`, () => {
  cy.checkIdHasText("error-summary", "Please answer this question");
});
