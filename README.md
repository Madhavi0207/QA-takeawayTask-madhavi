# QA Automation Task

## Overview

This project contains automated end-to-end tests for the QA Intern Position task at Vrit Technologies.

The automation framework is built using Playwright, Cucumber, and TypeScript following the Page Object Model (POM) design pattern. The complete user registration flow, including email OTP verification through Mailosaur, is fully automated.

## Technologies Used

* Playwright
* Cucumber
* TypeScript
* Node.js
* Mailosaur

## Prerequisites

Make sure the following are installed:

* Node.js (v18 or later)

## Installation

Clone the repository:

```bash
git clone <repository-url>
cd QA-takeawayTask-madhavi
```

Install project dependencies collectively:

```bash
npm install
```

Or install dependencies one by one:

```bash
npm install @playwright/test
npm install typescript ts-node
npm install @cucumber/cucumber
npm install --save-dev @cucumber/pretty-formatter
npm install mailosaur
npm install dotenv
```

Install Playwright browsers:

```bash
npx playwright install
```
## Running Tests

Run all tests:

```bash
npm run test:e2e
```

## Note
The .env file is pushed only for convenience and shouldn't be done otherwise without a strong encryption.

## Project Structure

```text
project-root/
│
├── e2e/
│   ├── features/
│   ├── pageObject/
│   ├── stepDefinitions/
│   └── support/
│
├── cucumber.conf.js
├── package.json
└── README.md
```

## Test Coverage

The automation covers:

* User registration flow
* Form validation
* Email OTP verification using Mailosaur
* Document upload
* Business profile creation

## Framework Features

* Playwright with TypeScript
* Cucumber BDD implementation
* Page Object Model (POM)
* Data-driven testing using feature files
* Automated email OTP retrieval and verification
* Reusable utility methods and test components

## Assumptions

* Application environment is available and accessible during test execution.
* Valid Mailosaur credentials are configured before running the tests.

## Known Limitations

* Test emails are dependent on Mailosaur service availability.
* Some test data (such as email addresses or phone numbers) may need to be unique for each execution based on application constraints.


## Demo Video

https://github.com/user-attachments/assets/a65bd78f-a576-4c35-b0de-804fefea0f0e

## Author

Madhavi Paudel
