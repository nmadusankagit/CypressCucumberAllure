import testEnvConfig from '../../externalFunctions/commonSections/testEnvConfig.json';
import ReviewPageSection from '../../Resources_Client/pages/sections/quoteCreationReviewPageSection';
import getReviewPageSection from '../../Resources_Client/pages/quoteCreationReviewPage'
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

let organiserDetails = new ReviewPageSection(getReviewPageSection('organiser_details'));

const RunEnvironment = Cypress.env('testenvironment');

let YearValue;
let MonthValue;
let DateValue;

const splitDateInput = (DateParameter) => {
  //Date format DD/MM/YYYY Ex: 20/04/2023
  if (String(DateParameter).includes('/')) {
    let DateParameterArray = DateParameter.split('/');
    DateValue = DateParameterArray[0].replace(/^0+/, '');
    MonthValue = (('0' + DateParameterArray[1]).slice(-2));
    YearValue = DateParameterArray[2];
    cy.log('DateValue: ' + DateValue);
    cy.log('MonthValue: ' + MonthValue);
    cy.log('YearValue: ' + YearValue);
  } else {
    console.log("Date format is incorrect, Date format DD/MM/YYYY Ex: 20/04/2023")
  }
}


When("A user is in quote review page", () => {
  cy.url().should('include', testEnvConfig.ClientEnvironment[RunEnvironment].BaseURL + "/quote/payment-details").then(() => {
    console.log("User is in quote review page")
  })
});

When("A user enter organiser details in quote review page", (table) => {
  table.hashes().forEach((row) => {
    cy.log(row.Title);
    cy.log(row.First_Name);
    cy.log(row.Surname);
    cy.log(row.Date_of_Birth);
    cy.log(row.Tel_Number);
    cy.log(row.Email);
    cy.log(row.Post_My_Documents);
    cy.log(row.Post_Code);
    cy.log(row.Address_List_Selection);
    cy.log(row.Address_Line_1);
    cy.log(row.Address_Line_2);
    cy.log(row.Town_City);
    cy.log(row.Country);
    organiserDetails.dropDowns(`organiser_title`).select(row.Title).then (() => {
      organiserDetails.inputFields(`organiser_first_name`).clear().type(row.First_Name, { force: true });
      organiserDetails.inputFields(`organiser_last_name`).clear().type(row.Surname, { force: true });
    }).then (() =>{
      splitDateInput(row.Date_of_Birth);
      organiserDetails.dropDowns('organiser_dob_year').select(YearValue).then(() => {
        organiserDetails.dropDowns('organiser_dob_month').select(MonthValue).then(() => {
          organiserDetails.dropDowns('organiser_dob_day').select(DateValue)
        });
      });
    }).then (()=> {
      organiserDetails.inputFields(`organiser_telephone`).clear().type(row.Tel_Number, { force: true });
      organiserDetails.inputFields(`organiser_email`).clear().type(row.Email, { force: true });
      organiserDetails.inputFields(`organiser_post_code`).clear().type(row.Post_Code, { force: true }).then(() => {
        if (row.Address_List_Selection) {
          organiserDetails.buttons(`organiser_post_search`).click({ force: true });
          organiserDetails.dropDowns(`organiser_post_code_select`).select(row.Address_List_Selection);
        }
      }).then(() => {
        if (row.Post_My_Documents.toLowerCase() == 'yes') {
          organiserDetails.dropDowns(`organiser_document_postal`).select(1).wait(2000);
        }
      }).then(() => {
        organiserDetails.checkBoxes(`user_declaration`).click({ force: true }).wait(200).then(() => {
          organiserDetails.checkBoxes(`user_accept`).click({ force: true }).wait(200).then (() => {
            organiserDetails.buttons(`make_payment`).click({ force: true });
          })
        })
      })
    })
    
    
    
  });
});