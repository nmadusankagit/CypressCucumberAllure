/// <reference types="cypress" />
import testEnvConfig from '../commonSections/testEnvConfig.json';

const gotoPage = (pagename) => {
    const RunEnvironment = Cypress.env('testenvironment');

    switch (pagename.toLowerCase()) {
        case 'cmsloginpage':
            cy.visit(testEnvConfig.CMSEnvironment[RunEnvironment].BaseURL, { timeout: 300000 });
            break;
        case 'homepage':
            cy.visit(testEnvConfig.ClientEnvironment[RunEnvironment].BaseURL, { timeout: 300000 });
            break;
        case 'webquotepage':
            cy.visit(testEnvConfig.ClientEnvironment[RunEnvironment].BaseURL + '/quote/policy-details', { timeout: 300000 });
            break;
        default:
            return null;

    }
}

export default gotoPage;