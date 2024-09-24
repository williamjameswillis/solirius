import { Then, When } from "@badeball/cypress-cucumber-preprocessor";

Then(`I am on the holiday entitlement type page`, () => {
  cy.checkIdHasText("content", "Is the holiday entitlement based on:");
});

When(
  `I chose the {string} option for the holiday entitlement type and Continue`,
  (holidayEntitlementType: string) => {
    cy.clickByValue(holidayEntitlementType);
    cy.contains("Continue").click();
  },
);

Then(
  `The page should navigate to the expected holiday entitlement type URL containing {string}`,
  (holidayEntitlementType: string) => {
    cy.assertURLContains(holidayEntitlementType);
  },
);
