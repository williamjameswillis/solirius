import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then(`I am on the final holiday entitlement outcome page`, () => {
  cy.checkIdHasText("content", "Information based on your answers");
});

Then(
  `The displayed number of days holiday matches the expected number {string} of days holiday`,
  (holidayEntitlementValueToAssert: string) => {
    cy.assertDataModuleHasText("govspeak", holidayEntitlementValueToAssert);
  },
);
