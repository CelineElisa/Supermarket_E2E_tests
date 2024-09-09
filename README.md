# Supermarket web app E2E tests

# Introduction 
E2E tests using Cypress and Cucumber for Supermarkets web app

# Getting Started

## Install

Clone the GitHub repository
```sh
git clone git@github.com:CelineElisa/Supermarket_E2E_tests.git
```

Move to the directory
```sh
cd Supermarket_E2E_tests
```

Install the packages
```sh
npm install
```
Create a "cypress.env.json" file in the folder root and add it the env variables as in the "cypress.env.template" file.

## Run

### Using Cypress user interface

```sh
npm run cypress:open
```
then choose E2E testing

### Using Cypress headless

```sh
npm run cypress:run
```