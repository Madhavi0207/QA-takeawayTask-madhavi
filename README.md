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
cd <project-name>
```

Install dependencies:

```bash
npm install
```

## Running Tests

Run all tests:

```bash
npm test
```

Or run cucumber tests directly:

```bash
npx cucumber-js
```

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
* Document upload
* OTP verification
* Business information submission

## Assumptions

* Test data is generated dynamically where possible.
* Application environment is accessible during execution.
* Email verification may require a test mailbox service.

## Known Limitations

* OTP automation depends on mailbox availability.
* Some test data may need updating if application data changes.
## Demo Video


## Author

Madhavi Paudel
