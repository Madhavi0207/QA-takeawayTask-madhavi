# QA Automation Task

## Overview

This project contains automated end-to-end tests built using Playwright, Cucumber, and TypeScript.

## Technologies Used

* Playwright
* Cucumber
* TypeScript
* Node.js

## Prerequisites

Make sure the following are installed:

* Node.js (v18 or later)
* npm

## Installation

Clone the repository:

```bash
git clone <repository-url>
cd <QA-takeawayTask-madhavi>
```

Install dependencies:

```bash
npm init -y
npm install -D @playwright/test
npx playwright

npm install - typescript ts-node
npx tsc --init

npm install -D @cucumber/cucumber
npm install --save-dev @cucumber/pretty-formatter
```

## Running Tests

Run all tests:

```bash
npm run test:e2e
```

## Project Structure

```
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
* Document upload
* OTP verification

## Assumptions

- The application under test is available and accessible during test execution.
- Test data is defined in feature files and used as input for test scenarios.
- No external mailbox service is used for email verification in this automation.

## Known Limitations

* Email verification requires a little mannual intervention.
* Email and phone numbers must be updated manually when re-running tests, as the system does not allow reuse of the same credentials.
  
## Demo Video
https://github.com/user-attachments/assets/8bc43cb2-125d-4ced-bedc-94bdd5b4f2f9


## Author

Madhavi Paudel
