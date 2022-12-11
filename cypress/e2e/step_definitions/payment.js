import testEnvConfig from '../../externalFunctions/commonSections/testEnvConfig.json';
import PaymentSection from '../../Resources_Client/pages/sections/quoteCreationPaymentSection';
import getPaymentSection from '../../Resources_Client/pages/quoteCreationPayment'
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

let cardEntryPanel = new PaymentSection(getPaymentSection('card_entry_panel'));

const RunEnvironment = Cypress.env('testenvironment');

let YearValue;
let MonthValue;

const splitDateInput = (DateParameter) => {
  //Date format DD/MM/YYYY Ex: 20/04/2023
  if (String(DateParameter).includes('/')) {
    let DateParameterArray = DateParameter.split('/');
    MonthValue = (('0' + DateParameterArray[0]).slice(-2));
    YearValue = DateParameterArray[1];
    cy.log('MonthValue: ' + MonthValue);
    cy.log('YearValue: ' + YearValue);
  } else {
    console.log("Date format is incorrect, Date format MM/YY Ex: 04/23")
  }
}


When("A user is in payment page", () => {
  cy.url().should('include', "/pages/paypage").then(() => {
    console.log("User is in payment page")
  })
});

When("A user enter payment details in payment page", (table) => {
  table.hashes().forEach((row) => {
    cy.log(row.Card_Holder_Name);
    cy.log(row.Card_Number);
    cy.log(row.Expiry_Date);
    cy.log(row.Card_Security_Code);
    cardEntryPanel.inputFields(`card_holder_name`).type(row.Card_Holder_Name, { delay: 50, force: true }).wait(1000);
    cardEntryPanel.inputFields(`card_number`).type(row.Card_Number, { delay: 50, force: true }).wait(1000);
    splitDateInput(row.Expiry_Date);
    cardEntryPanel.dropDowns('expiry_month').select(MonthValue).then(() => {
      cardEntryPanel.dropDowns('expiry_year').select(YearValue)
    });
    cardEntryPanel.inputFields(`card_security_code`).type(row.Card_Security_Code, { delay: 50, force: true }).wait(1000);
  });
});

When("A user click pay now button in payment page", () => {
  cy.wait(500);
  cardEntryPanel.buttons(`btn_submit`).click({ force: true })
  cy.wait(500);
});