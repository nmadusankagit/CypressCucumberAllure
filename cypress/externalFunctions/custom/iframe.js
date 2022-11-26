/// <reference types="cypress" />

const getIframeDocument = (frame) => {
    return cy
    .get(frame)
    .its('0.contentDocument').should('exist')
  }

const getIframeBody = (frame) => {
    return getIframeDocument(frame)
    .its('body').should('not.be.undefined')
    .then(cy.wrap)
  }

const goToIframe = (frame) => { 
    switch(frame.toLowerCase()){
        case 'externalapp':
            return getIframeBody('#externalApp');
            break;        
        default:
            return null;
    } 
    };

export default goToIframe;