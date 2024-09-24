# Solirius Technical Interview

## Task 1

### Approach and Tooling

I decided to use Cypress test tool as I have recent experience with this test tool.

I also love BDD/Gherkin syntax for testing so I decided to structure the tests using this approach.

### How to guide

Install node version 18.18.2 or higher. Run yarn to install dependencies and then use the scripts defined in package.json to either run the tests headed `cy-open` or headless `cy-run`.

### Improvements to make

If I was working at the gov.uk i would be working with the developers of this website and adding data-test selectors to make the tests i have written more resistant to changes.

Cover cross browser + cross platform testing as currently uses Electron as default.

Build ci/cd pipelines that executes these tests automatically in a docker job on push up.

Use a Page Object Model with inheritance to define each page we need to deal with, this would improve readability and maintainability.

## Bonus - Task 2