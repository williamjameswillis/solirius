export const checkIdHasText = (
  id: string,
  title: string,
): Cypress.Chainable => {
  return cy.get(`[id=${id}]`).should("exist").should("contain.text", title);
};

export const clickDataModuleByText = (
  dataModule: string,
  text: string,
): Cypress.Chainable => {
  return cy
    .get(`[data-module="${dataModule}"]`)
    .should("exist")
    .contains(text)
    .click({ force: true });
};

export const assertDataModuleHasText = (
  dataModule: string,
  text: string,
): Cypress.Chainable => {
  return cy.get(`[data-module="${dataModule}"]`).should("exist").contains(text);
};

export const clickByID = (id: string): Cypress.Chainable => {
  return cy.get(`[id="${id}"]`).should("exist").click();
};

export const enterValueByID = (
  id: string,
  value: string,
): Cypress.Chainable => {
  return cy.get(`[id="${id}"]`).should("exist").type(value);
};

export const clickByValue = (value: string): Cypress.Chainable => {
  return cy.get(`[value="${value}"]`).should("exist").click();
};

export const assertURLContains = (valueToAssert: string): Cypress.Chainable => {
  return cy.url().should("include", valueToAssert);
};

export const enterDate = (date: string): Cypress.Chainable => {
  if (!date) {
    return cy;
  }
  const dateArray = date.split(" ");
  cy.get(`[name="response[day]`).should("exist").type(dateArray[0]);
  cy.get(`[name="response[month]`).should("exist").type(dateArray[1]);
  cy.get(`[name="response[year]`).should("exist").type(dateArray[2]);

  return cy;
};
