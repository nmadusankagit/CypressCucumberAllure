import testEnvConfig from '../../externalFunctions/commonSections/testEnvConfig.json';
import userLoginSection from '../pages/sections/homePageSection';
import getSection from '../pages/homePage'

let Section = new userLoginSection(getSection('loginform'));
const RunEnvironment = Cypress.env('testenvironment');

const addUsername = (Username) => {
    if (Username !== "") {
        Section.inputFields('username').type(Username, { delay: 200, force: true });
    }
}

const addPassword = (Password) => {
    if (Password !== "") {
        Section.inputFields('password').type(Password, { delay: 200, force: true });
    }
}


const cmsAdminLogin = (Username, Password) => {
    cy.wait(1000);
    addUsername(Username);
    addPassword(Password);
    Section.buttons('login').click({ force: true }).wait(1000);
}


export default { cmsAdminLogin };