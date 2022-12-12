// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import '@shelex/cypress-allure-plugin';
require('cypress-xpath')

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  
  let isSoftAssertion = false;
  let errors = [];
  
  chai.softExpect = function(...args) {
    isSoftAssertion = true;
    return chai.expect(...args);
  };
  chai.softAssert = function(...args) {
    isSoftAssertion = true;
    return chai.assert(...args);
  };
  
  const origAssert = chai.Assertion.prototype.assert;
  chai.Assertion.prototype.assert = function(...args) {
    if (isSoftAssertion) {
      try {
        origAssert.call(this, ...args);
      } catch (error) {
        cy.screenshot(error.message);
        errors.push(error);
      }
      isSoftAssertion = false;
    } else {
      origAssert.call(this, ...args);
    }
  };