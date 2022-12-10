import testEnvConfig from '../../externalFunctions/commonSections/testEnvConfig.json';
import ACOPageSection from '../../Resources_Client/pages/sections/quoteCreationACOPageSection';
import getACOPageSection from '../../Resources_Client/pages/quoteCreationACOPage'
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

let acoSection = new ACOPageSection(getACOPageSection('aco_section'));
let optionalExtrasPopup = new ACOPageSection(getACOPageSection('optional_extras_popup'));

const RunEnvironment = Cypress.env('testenvironment');

When("A user is in quote results page", () => {
  cy.url().should('include', testEnvConfig.ClientEnvironment[RunEnvironment].BaseURL + "/quote/results").then(() => {
    console.log("User is in quote results page")
  })
});

When("A user select cover type {string} in quote results tab", (coverType) => {
  switch (coverType.toLowerCase()) {
    case 'single trip basic':
      acoSection.buttons('single_trip_basic').click({ force: true });
      break;
    case 'single trip comprehensive':
      acoSection.buttons('single_trip_comprehensive').click({ force: true });
      break;
    case 'annual multi trip basic':
      acoSection.buttons('annual_multi_trip_basic').click({ force: true });
      break;
    case 'annual multi trip comprehensive':
      acoSection.buttons('annual_multi_trip_comprehensive').click({ force: true });
      break;
    default:
      return null;
  }
});

When("A user select ACO {string} in quote results tab", (aco) => {
  switch (aco.toLowerCase()) {
    case 'excess waiver':
      optionalExtrasPopup.checkBoxes('excess_waiver').click({ force: true });
      break;
    default:
      return null;
  }
});

When("A user click next on quote results tab", () => {
  optionalExtrasPopup.buttons('continue').click({ force: true });
});