/// <reference types="cypress" />
import testEnvConfig from '../commonSections/testEnvConfig.json';

const gotoPage = (pagename) => {
    const RunEnvironment = Cypress.env('testenvironment');

    switch (pagename.toLowerCase()) {
        case 'cmsloginpage':
            cy.visit(testEnvConfig.CMSEnvironment[RunEnvironment].BaseURL, { timeout: 100000 });
            break;
        case 'webquotepage':
            cy.visit(testEnvConfig.ClientEnvironment[RunEnvironment].BaseURL + '/quote/policy-details', { timeout: 100000 });
            break;
        default:
            return null;

    }
}

export default gotoPage;