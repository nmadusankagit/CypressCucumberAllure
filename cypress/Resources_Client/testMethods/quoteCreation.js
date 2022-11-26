import testEnvConfig from '../../externalFunctions/commonSections/testEnvConfig.json';
import loginPageSection from '../pages/sections/quoteCreationTravelDetailsPageSection';
import getloginPageSection from '../pages/quoteCreationTravelDetailsPage'


let aboutYourTravelPolicySectionElements = new loginPageSection(getloginPageSection('about_your_travel_policy_section'));
let yourBasicDetailsSection = new loginPageSection(getloginPageSection('your_basic_details_section'));
let submitButtonSection = new loginPageSection(getloginPageSection('submit_button_section'));
let aboutYourTravelPolicyDepartureDateSectionElements = new loginPageSection(getloginPageSection('about_your_travel_policy_departure_date_section'));
let aboutYourTravelPolicyReturnDateSection = new loginPageSection(getloginPageSection('about_your_travel_policy_return_date_section'));

const RunEnvironment = Cypress.env('testenvironment');


const verifyLoginFunction = () => {
    cy.url().should('include', testEnvConfig.ClientEnvironment[RunEnvironment].BaseURL + "").then(() => {
        // aboutYourTravelPolicySectionElements.inputFields('emailaddress').type(businessloginmailAddress, {force: true});
        aboutYourTravelPolicySectionElements.buttons('singletrip').click({ force: true }).wait(10);
        aboutYourTravelPolicySectionElements.buttons('cruiseno').click({ force: true }).wait(10);
        aboutYourTravelPolicySectionElements.buttons('departure_uk').click({ force: true }).wait(10);
        aboutYourTravelPolicySectionElements.inputFields('destination_country_search').type("Singapore", {force: true}).wait(50);
        aboutYourTravelPolicySectionElements.inputFields('destination_country_search_result').click({ force: true }).wait(1000);
        aboutYourTravelPolicySectionElements.datepicker('year_dropdown').select('2023').wait(1000);
        aboutYourTravelPolicySectionElements.datepicker('day_dropdown-4').click({ force: true }).wait(1000);
    })
}


export default { verifyLoginFunction };