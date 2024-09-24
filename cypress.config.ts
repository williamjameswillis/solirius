import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";
import * as util from 'util';

export default defineConfig({
  e2e: {
    specPattern: ["**/*.feature", "**/*.cy.ts"],
    baseUrl: 'https://www.gov.uk/calculate-your-holiday-entitlement',
    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions
    ): Promise<Cypress.PluginConfigOptions> {
      // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      on('task', {
        log(message) {
          console.log(message);
    
          return null;
        },
        table(message) {
          console.table(util.inspect(message, { maxArrayLength: null }));
    
          return null;
        },
      });
      // Make sure to return the config object as it might have been modified by the plugin.
      return config;
    },
  },
});