import { Result } from "axe-core";

const WCAG_LEVEL = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"];

const terminalLog = (violations: Result[]) => {
  cy.task(
    "log",
    `${violations.length} accessibility violation${
      violations.length === 1 ? "" : "s"
    } ${violations.length === 1 ? "was" : "were"} detected`,
  );
  const violationData = violations.map(({ id, impact, description, tags }) => ({
    id,
    impact,
    description,
    tags,
  }));
  cy.task("table", violationData);
};

export const a11y = (): Cypress.Chainable => {
  cy.injectAxe();
  cy.checkA11y(
    undefined,
    {
      runOnly: {
        type: "tag",
        values: WCAG_LEVEL,
      },
    },
    terminalLog,
  );
  return cy;
};
