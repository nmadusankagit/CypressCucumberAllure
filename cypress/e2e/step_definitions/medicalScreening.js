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
let medicalScreeningAnswersSection = new MedicalScreeningPageSection(getMedicalScreeningPageSection('medical_screening_answers'));

const RunEnvironment = Cypress.env('testenvironment');

When("A user is in medical screening page", () => {
  cy.url().should('include', "/medical-aggregator/").then(() => {
    console.log("User is in medical screening page")
  })
});

When("A user search medical condition {string} in medical screening page", (travellerMedCondition, table) => {
  medicalScreeningSection.inputFields(`med_condition_search`).type(travellerMedCondition, { force: true });
  medicalScreeningSection.selectLists(`found_condition-${travellerMedCondition}`).click({ force: true });
  table.hashes().forEach((row) => {
    cy.log(row.Medical_Question);
    cy.log(row.Answer);
    medicalScreeningAnswersSection.medicalAnswers(`found_answer-${row.Medical_Question}|${row.Answer}`).click({ force: true });
  });
  medicalScreeningAnswersSection.buttons(`submit_med_answers`).click({ force: true });
  medicalScreeningSection.buttons(`finish_med_answers`).click({ force: true });
});