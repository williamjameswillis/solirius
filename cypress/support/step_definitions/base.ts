import { Given, When } from "@badeball/cypress-cucumber-preprocessor";

Given(`I am on the "Calculate your holiday entitlement" page`, () => {
  cy.visit("/").checkIdHasText('content', 'Calculate holiday entitlement').get('[data-accept-cookies="true"]').click();
})

When("I chose Start Now", () => {
    cy.clickDataModuleByText('govuk-button ga4-link-tracker', 'Start now')
  })

