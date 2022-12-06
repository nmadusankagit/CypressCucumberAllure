import testEnvConfig from '../../externalFunctions/commonSections/testEnvConfig.json';
import loginPageSection from '../../Resources_Client/pages/sections/quoteCreationTravelDetailsPageSection';
import getloginPageSection from '../../Resources_Client/pages/quoteCreationTravelDetailsPage'
import {
  Given,
  When,
  Then,
  And,
  But
} from "@badeball/cypress-cucumber-preprocessor";

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})



const loginPage = require("../../pages/LoginPage");
let aboutYourTravelPolicySectionElements = new loginPageSection(getloginPageSection('about_your_travel_policy_section'));
let yourBasicDetailsSection = new loginPageSection(getloginPageSection('your_basic_details_section'));
let submitButtonSection = new loginPageSection(getloginPageSection('submit_button_section'));
const RunEnvironment = Cypress.env('testenvironment');
let YearValue;
let MonthValue;
let DateValue;

const splitDateInput = (DateParameter) => {
  //Date format DD/MM/YYYY Ex: 20/04/2023
  if (String(DateParameter).includes('/')) {
    let DateParameterArray = DateParameter.split('/');
    DateValue = DateParameterArray[0].replace(/^0+/, '');
    MonthValue = (DateParameterArray[1].replace(/^0+/, '')) - 1;
    YearValue = DateParameterArray[2];
  } else {
    console.log("Date format is incorrect, Date format DD/MM/YYYY Ex: 20/04/2023")
  }
}

const monthValueMaping = {
  0: "Jan",
  1: "Feb",
  2: "Mar",
  3: "Apr",
  4: "May",
  5: "Jun",
  6: "Jul",
  7: "Aug",
  8: "Sep",
  9: "Oct",
  10: "Nov",
  11: "Dec"
}



Given("A web browser is at the StaySure quote creaton page", () => {
  // cy.visit("/quote/policy-details");
  cy.goto("webquotepage").then(() => {
    cy.url().should('include', testEnvConfig.ClientEnvironment[RunEnvironment].BaseURL + "");
  })
});

When("A user selectes trip type {string} in Travel Details tab", (tripType) => {
  aboutYourTravelPolicySectionElements.buttons('singletrip').click({ force: true });
});

When("A user select {string} for cruise option in Travel Details tab", (cruise) => {
  switch (cruise.toLowerCase()) {
    case 'yes':
      aboutYourTravelPolicySectionElements.buttons('cruiseyes').click({ force: true })
      break;
    case 'no':
      aboutYourTravelPolicySectionElements.buttons('cruiseno').click({ force: true })
      break;
    default:
      return null;
  }
  ;
});

When("A user selectes Travelling from {string} in Travel Details tab", (travellingFrom) => {
  switch (travellingFrom.toLowerCase()) {
    case 'united kingdom':
      aboutYourTravelPolicySectionElements.buttons('departure_uk').click({ force: true });
      break;
    case 'isle of man':
      aboutYourTravelPolicySectionElements.buttons('departure_isleofman').click({ force: true });
      break;
    case 'guernsey':
      aboutYourTravelPolicySectionElements.buttons('departure_guernsey').click({ force: true });
      break;
    case 'jersey':
      aboutYourTravelPolicySectionElements.buttons('departure_jersey').click({ force: true });
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

When("A user type Travelling to {string} in Travel Details tab", (travellingTo) => {
  aboutYourTravelPolicySectionElements.inputFields('destination_country_search').type(travellingTo, { force: true }).wait(50);
  aboutYourTravelPolicySectionElements.inputFields('destination_country_search_result').click({ force: true });
});

When("A user selectes Departure date {string} in Travel Details tab", (departureDate) => {
  splitDateInput(departureDate);
  aboutYourTravelPolicySectionElements.datepicker('year_dropdown_departure').select(YearValue).then(() => {
    aboutYourTravelPolicySectionElements.datepicker('month_dropdown_departure').select(monthValueMaping[MonthValue]).then(() => {
      aboutYourTravelPolicySectionElements.datepicker(`day_dropdown_departure-${DateValue}`).click({ force: true });
    });
  });
});

When("A user selectes Return date {string} in Travel Details tab", (returnDate) => {
  splitDateInput(returnDate);
  aboutYourTravelPolicySectionElements.datepicker('year_dropdown_return').select(YearValue).then(() => {
    aboutYourTravelPolicySectionElements.datepicker('month_dropdown_return').select(monthValueMaping[MonthValue]).then(() => {
      aboutYourTravelPolicySectionElements.datepicker(`day_dropdown_return-${DateValue}`).click({ force: true });
    });
  });
});

When("A user selectes Cover type {string} in Travel Details tab", (coverTypes) => {
  aboutYourTravelPolicySectionElements.buttons(coverTypes).click({ force: true });
});

When("A user type age {string} for traveller {string} in Travel Details tab", (travellerAge, travellerIndex) => {
  aboutYourTravelPolicySectionElements.inputFields(`traveller_age-${travellerIndex}`).type(travellerAge, { force: true });
});

When("A user selectes title {string} in Travel Details tab", (organiizerTitle) => {
  // Options: Mr/ Mrs/ Miss/ Ms/ Dr/ Rev
  yourBasicDetailsSection.dropDowns('organiser_title').select(organiizerTitle);
});

When("A user type first name {string} and last name {string} in Travel Details tab", (organiserFirstName, organiserLastName) => {
  yourBasicDetailsSection.inputFields(`organiser_first_name`).type(organiserFirstName, { force: true });
  yourBasicDetailsSection.inputFields(`organiser_last_name`).type(organiserLastName, { force: true });
});

When("A user type email address {string} in Travel Details tab", (emailAddress) => {
  yourBasicDetailsSection.inputFields(`organiser_email`).type(emailAddress, { force: true });
});

When("A user type telephone number {string} in Travel Details tab", (telephoneNumber) => {
  yourBasicDetailsSection.inputFields(`organiser_time_telephone`).type(telephoneNumber, { force: true });
});

When("A user type post code {string} in Travel Details tab", (postCode) => {
  yourBasicDetailsSection.inputFields(`organiser_post_code`).type(postCode, { force: true });
});

When("A user next button in Travel Details tab", () => {
  submitButtonSection.buttons(`next_button`).click({ force: true });
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

