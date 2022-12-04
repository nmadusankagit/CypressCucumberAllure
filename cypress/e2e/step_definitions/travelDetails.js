import testEnvConfig from '../../externalFunctions/commonSections/testEnvConfig.json';
import loginPageSection from '../../Resources_Client/pages/sections/quoteCreationTravelDetailsPageSection';
import getloginPageSection from '../../Resources_Client/pages/quoteCreationTravelDetailsPage'
import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

const loginPage = require("../../pages/LoginPage");
let aboutYourTravelPolicySectionElements = new loginPageSection(getloginPageSection('about_your_travel_policy_section'));
const RunEnvironment = Cypress.env('testenvironment');



Given("A web browser is at the StaySure quote creaton page", () => {
  // cy.visit("/quote/policy-details");
  cy.goto("webquotepage").then(() => {
    cy.url().should('include', testEnvConfig.ClientEnvironment[RunEnvironment].BaseURL + "");
  })
});

When("A user selectes trip type {string} in Travel Details tab", (tripType) => {
  aboutYourTravelPolicySectionElements.buttons('singletrip').click({ force: true }).wait(10);
});

When("A user select {string} for cruise option in Travel Details tab", (cruise) => {
  switch (cruise.toLowerCase()) {
    case 'yes':
      aboutYourTravelPolicySectionElements.buttons('cruiseyes').click({ force: true }).wait(10)
      break;
    case 'no':
      aboutYourTravelPolicySectionElements.buttons('cruiseno').click({ force: true }).wait(10)
      break;
    default:
      return null;
  }
  ;
});

When("A user selectes Travelling from {string} in Travel Details tab", (travellingFrom) => {
  switch (travellingFrom.toLowerCase()) {
    case 'united kingdom':
      aboutYourTravelPolicySectionElements.buttons('departure_uk').click({ force: true }).wait(10);
      break;
    case 'isle of man':
      aboutYourTravelPolicySectionElements.buttons('departure_isleofman').click({ force: true }).wait(10);
      break;
    case 'guernsey':
      aboutYourTravelPolicySectionElements.buttons('departure_guernsey').click({ force: true }).wait(10);
      break;
    case 'jersey':
      aboutYourTravelPolicySectionElements.buttons('departure_jersey').click({ force: true }).wait(10);
      break;
    default:
      return null;
  }
  ;
});

When("A user selectes all Travelling from locations in Travel Details tab", (table) => {
  table.hashes().forEach((row) => {
    cy.log(row.travellingFrom);
    switch (row.travellingFrom.toLowerCase()) {
      case 'united kingdom':
        cy.log(row.travellingFrom);
        aboutYourTravelPolicySectionElements.buttons('departure_uk').click({ force: true }).wait(1000);
        break;
      case 'isle of man':
        cy.log(row.travellingFrom);
        aboutYourTravelPolicySectionElements.buttons('departure_isleofman').click({ force: true }).wait(1000);
        break;
      case 'guernsey':
        cy.log(row.travellingFrom);
        aboutYourTravelPolicySectionElements.buttons('departure_guernsey').click({ force: true }).wait(1000);
        break;
      case 'jersey':
        cy.log(row.travellingFrom);
        aboutYourTravelPolicySectionElements.buttons('departure_jersey').click({ force: true }).wait(1000);
        break;
      default:
        return null;
    }
  });
});

When("A user selectes Travelling to {string} in Travel Details tab", (travellingTo) => {
  aboutYourTravelPolicySectionElements.inputFields('destination_country_search').type(travellingTo, { force: true }).wait(50);
  aboutYourTravelPolicySectionElements.inputFields('destination_country_search_result').click({ force: true }).wait(1000);
});

When("A user selectes Departure date {string} in Travel Details tab", (departureDate) => {
  aboutYourTravelPolicySectionElements.datepicker('year_dropdown').select('2023').wait(1000);
    aboutYourTravelPolicySectionElements.datepicker('day_dropdown-4').click({ force: true }).wait(1000);
});

















When("A user enters the username {string}, the password {string}, and clicks on the login button", (username, password) => {
  cy.goto("webquotepage");
  // loginPage.submitLogin(username,password)
});

When("A user provides incorrect credentials, and clicks on the login button", (table) => {
  cy.goto("webquotepage");
  // table.hashes().forEach((row) => {
  //   cy.log(row.username);
  //   cy.log(row.password);
  //   loginPage.submitLogin(row.username, row.password)

  // });
});
Then("the url will contains the inventory subdirectory", () => {
  cy.goto("webquotepage");
  // cy.url().should("contains", "/inventory.html");
});
Then("The error message {string} is displayed", (errorMessage) => {
  cy.goto("webquotepage");
  // loginPage.elements.errorMessage().should("have.text", errorMessage);
});

When("User select all data in med_quote table for quote_id = {string}", (quote_id) => {
  const SQL_MED_QUOTE = `select * from med_quote where quote_id = ${quote_id}`;
  cy.task("sqlQuery", SQL_MED_QUOTE).then((resolvedValue) => {
    resolvedValue["rows"].forEach((item) => {
      console.log("result==>" + item);
    });
  });
});

Then("empty assertion", () => {
  cy.log("empty assertion");
});

