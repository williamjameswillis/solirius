# Solirius Technical Interview

## Task 1

### Approach and Tooling

I decided to use Cypress test tool as I have recent experience with this test tool.

I also love BDD/Gherkin syntax for testing so I decided to structure the tests using this approach.

### How to guide

Install node version 18.18.2 or higher. Run yarn to install dependencies and then use the scripts defined in package.json to either run the tests headed `cy-open` or headless `cy-task1`.

### Improvements to make

If I was working at the gov.uk I would be working with the developers of this website and adding data-test selectors to make the tests I have written more resistant to changes.

Cover cross browser + cross platform testing (dependent on expected user profiles) as currently uses Electron as default.

Build ci/cd pipelines that executes these tests automatically in a docker job when anyone pushes up.

Use a Page Object Model with inheritance to define each page we need to deal with, this would improve readability and maintainability.

## Bonus - Task 2

### Approach and Tooling

I decided to do both manual and automatic accessibility testing of the the index.html page. The automated accessibility testing uses the same Cypress test tool as from task1 with the cypress-axe and axe-core libraries used to automatically detect and log out violations to the terminal.

Decided to just use the mocha syntax for this single test as its much simpler.

### Manually identified accessibility violations:

1. accessibility is spelt wrong - could confuse a visually impaired user using a screen reader
2. there is no defined tab index/order so the Done button cannot be tabbed to - would make it difficult/impossible to use for a visually impaired user
3. the form fields are missing both labels and aria label tags - therefore a screen reader could not easily identify them to a visually impaired user 
4. the image has no alt text tag so a screen reader will not be able to tell the user what the image is displaying
5. the image is in a div called contact-form-section which might mislead a user
6. the form doesnt have a h1, it goes straight to h2 + the h1 should be outside the form field
7. the fields are missing focus and active states so its not easy to see what is going on when using the form

### Bug report for accessibility violation 4

Bug title:
Image is not announced by a screen reader.

Priority: it depends :)

Description:
The image displayed on the webpage does not have an alt text tag describing what the images is i.e. a robot and crucially describing its relation to the rest of the webpage.

Reproduction steps:
1. Run the website on a local page using Microsoft Edge
2. Use the built in screen reader in Edge to read the page
3. The image is not mentioned whatsoever as it has no alt text

Expected behaviour:
The image should be announced by the screen reader using the alt tag. The text in this tag should describe the image and its relation to the rest of the webpage.

Actual behaviour:
The image is not mentioned whatsoever by the screen reader.

Evidence:
I would attach into the bug ticket a video of the Actual behaviour for the developer to help them reproduce the issue.


### How to guide - automation

Same as for Task1 however the headless command is `cy-bonus`. You will see that this identifies 3 violations when configured to the WCAG2.2 AA standard.

### Improvements to make

Could use a tool like google lighthouse to identify further accessibility issues. 
