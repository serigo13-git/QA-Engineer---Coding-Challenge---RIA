# QA Engineer - Coding Challenge (RIA Money Transfer)

This repository contains the solution to the QA Automation technical challenge, which includes frontend E2E testing with **Cypress** and backend (API) testing with **Postman**.

## Project Structure

- `cypress/e2e/`: E2E test files developed in Cypress.
- `postman/collections\RIA Challenge API Tests`: Postman collection containing the API tests (GET and POST).
- `screenshots/`: Execution evidence showing successful test results (Cypress and Postman).

## Instructions to Run the Tests

### E2E Testing (Cypress)
1. Clone the repository.
2. Install the dependencies by running:
  
   ```bash
   npm install
   ```

3. Open the interactive Cypress interface:
   
   ```bash
   npx cypress open
   ```
   
   Or run the tests in headless mode (terminal):
   
   ```bash
   npx cypress run
   ```

### API Testing (Postman)
The API tests are located in the `postman/` folder and validate the requirements for the GET (jsonplaceholder) and POST (httpbin) endpoints. Check the `screenshots/` folder to review the execution results.
