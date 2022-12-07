import testEnvConfig from '../../externalFunctions/commonSections/testEnvConfig.json';
import MedicalScreeningPageSection from '../../Resources_Client/pages/sections/quoteCreationMedicalScreeningPageSection';
import getMedicalScreeningPageSection from '../../Resources_Client/pages/quoteCreationMedicalScreeningPage'
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

let medicalScreeningSection = new MedicalScreeningPageSection(getMedicalScreeningPageSection('medical_screening'));

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

When("A user is in medical screening page", () => {
  cy.url().should('include', "/medical-aggregator/").then(() => {
    console.log("User is in medical screening page")
  })
});

When("A user search medical condition {string} in medical screening page", (travellerMedCondition) => {
  medicalScreeningSection.inputFields(`med_condition_search`).type(travellerMedCondition, { force: true });
});
