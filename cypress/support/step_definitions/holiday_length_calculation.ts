import { Then, When } from "@badeball/cypress-cucumber-preprocessor";

Then(`I am on the holiday length calculation page`, () => {
  cy.checkIdHasText("content", "Do you want to");
});

When(
  `I chose the {string} option for the holiday length calculation and Continue`,
  (holidayLengthCalculation: string) => {
    cy.clickByValue(holidayLengthCalculation);
    cy.contains("Continue").click();
  },
);

Then(
  `The page should navigate to the expected holiday length calculation URL containing {string}`,
  (holidayLengthCalculation: string) => {
    cy.assertURLContains(holidayLengthCalculation);
  },
);
