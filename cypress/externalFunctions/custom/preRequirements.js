/// <reference types="cypress" />

import testEnvConfig from '../commonSections/testEnvConfig.json';

const preRequirement = (requirementname, parameters) => {
    const RunEnvironment = Cypress.env('testenvironment');
    cy.log('Executing Pre Requirement: ' + requirementname + ' with Parameters: ' + parameters)
    switch (requirementname.toLowerCase()) {
        case 'tournamentpageload':
            console.log('Visit to tournament page in: ' + RunEnvironment)
            cy.visit(testEnvConfig.ClientEnvironment[RunEnvironment].BaseURL +parameters , { timeout: 100000 });
            break;
        default:
            return null;

    }
}

export default preRequirement;