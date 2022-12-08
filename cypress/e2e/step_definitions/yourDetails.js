import testEnvConfig from '../../externalFunctions/commonSections/testEnvConfig.json';
import YourDetailsPageSection from '../../Resources_Client/pages/sections/quoteCreationYourDetailsPageSection';
import getYourDetailsPageSection from '../../Resources_Client/pages/quoteCreationYourDetailsPage'
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

let medicalDisclaimerSection = new YourDetailsPageSection(getYourDetailsPageSection('medical_disclaimer_section'));
let travellerDetailsSection = new YourDetailsPageSection(getYourDetailsPageSection('traveller_details_section'));
let medicalDeclarationSection = new YourDetailsPageSection(getYourDetailsPageSection('medical_declaration_section'));

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
    console.log("Date format is incorrect, Date format DD/MM/YYYY Ex: 20/04/2023");
  }
}

When("A user is in Your Details tab", () => {
  cy.url().should('include', testEnvConfig.ClientEnvironment[RunEnvironment].BaseURL + "/quote/personal-details").then(() => {
    console.log("User is in Your Details tab")
  })
});

When("A user select I understand checkbox for Medical Disclaimer in Your Details tab", () => {
  medicalDisclaimerSection.checkBoxes(`accept_medical_terms_and_conditions`).click({ force: true });
});

When("A user selectes traveller {string} title {string}, first name {string} and last name {string} in Your Details tab", (travellerIndex, travellerTitle, travellerFirstName, travellerLastName) => {
  // Options: Mr/ Mrs/ Miss/ Ms/ Dr/ Rev
  travellerDetailsSection.dropDowns(`traveller_title-${travellerIndex}`).select(travellerTitle);
  travellerDetailsSection.inputFields(`traveller_first_name-${travellerIndex}`).type(travellerFirstName, { force: true });
  travellerDetailsSection.inputFields(`traveller_surname-${travellerIndex}`).type(travellerLastName, { force: true });
});

When("A user add medical conditions for traveller {string} in Your Details tab", (travellerIndex) => {
  medicalDeclarationSection.buttons(`medical_conditions_yes-${travellerIndex}`).click({ force: true });
});

When("A user click next on Your Details tab", () => {
  medicalDeclarationSection.buttons(`next`).click({ force: true });
  medicalDeclarationSection.buttons(`submit_medical_declaration`).click({ force: true });

});
