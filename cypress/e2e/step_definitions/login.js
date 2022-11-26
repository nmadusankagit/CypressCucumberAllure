import testEnvConfig from '../../externalFunctions/commonSections/testEnvConfig.json';
import loginPageSection from '../../Resources_Client/pages/sections/quoteCreationTravelDetailsPageSection';
import getloginPageSection from '../../Resources_Client/pages/quoteCreationTravelDetailsPage'
import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";

const loginPage = require("../../pages/LoginPage");
let aboutYourTravelPolicySectionElements = new loginPageSection(getloginPageSection('about_your_travel_policy_section'));
const RunEnvironment = Cypress.env('testenvironment');


Given("A web browser is at the StaySure quote creaton page", () => {
  const SQL_MED_QUOTE = "select * from med_quote where quote_id = 177";
  // cy.visit("/");
  cy.goto("webquotepage").then(() => {
    cy.url().should('include', testEnvConfig.ClientEnvironment[RunEnvironment].BaseURL + "");
    aboutYourTravelPolicySectionElements.buttons('singletrip').click({ force: true }).wait(10);
    aboutYourTravelPolicySectionElements.buttons('cruiseno').click({ force: true }).wait(10);
    aboutYourTravelPolicySectionElements.buttons('departure_uk').click({ force: true }).wait(10);
    aboutYourTravelPolicySectionElements.inputFields('destination_country_search').type("Singapore", { force: true }).wait(50);
    aboutYourTravelPolicySectionElements.inputFields('destination_country_search_result').click({ force: true }).wait(1000);
    aboutYourTravelPolicySectionElements.datepicker('year_dropdown').select('2023').wait(1000);
    aboutYourTravelPolicySectionElements.datepicker('day_dropdown-4').click({ force: true }).wait(1000);
  })
  cy.wait(2000)
  cy.task("sqlQuery", SQL_MED_QUOTE).then((resolvedValue) => {
    resolvedValue["rows"].forEach((item) => {
      console.log("result==>" + item);
    });
  });
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
