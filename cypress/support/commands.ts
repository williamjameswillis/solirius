/* eslint-disable @typescript-eslint/no-namespace */
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//

import {
    checkIdHasText,
    clickDataModuleByText,
    clickByID,
    clickByValue,
    assertURLContains,
    enterValueByID,
    assertDataModuleHasText,
    enterDate
  } from './helpers';
  
  declare global {
    namespace Cypress {
      interface Chainable {
        checkIdHasText: typeof checkIdHasText;
  
        clickDataModuleByText: typeof clickDataModuleByText;

        clickByID: typeof clickByID;

        clickByValue: typeof clickByValue;

        assertURLContains: typeof assertURLContains;

        enterValueByID: typeof enterValueByID;

        assertDataModuleHasText: typeof assertDataModuleHasText;

        enterDate: typeof enterDate;
      }
    }
  }
  
  Cypress.Commands.add('checkIdHasText', checkIdHasText);
  
  Cypress.Commands.add('clickDataModuleByText', clickDataModuleByText);

  Cypress.Commands.add('clickByID', clickByID);

  Cypress.Commands.add('clickByValue', clickByValue);

  Cypress.Commands.add('assertURLContains', assertURLContains);

  Cypress.Commands.add('enterValueByID', enterValueByID);

  Cypress.Commands.add('assertDataModuleHasText', assertDataModuleHasText);

  Cypress.Commands.add('enterDate', enterDate);