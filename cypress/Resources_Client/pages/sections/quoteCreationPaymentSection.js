let selector;
let parameter;

const splitPathParameters = (PathParameter) => {
    if (String(PathParameter).includes('-')) {
        selector = PathParameter.split('-')[0];
        parameter = PathParameter.split('-')[1];
        console.log("selector: " + selector)
        console.log("parameter: " + parameter)
    } else {
        selector = PathParameter;
    }
}

export default class userLoginSection {
    constructor(section) {
        this.pageSection = section;
    }

    //getting the cy section from constructor
    getSection() {
        return cy.xpath(this.pageSection);
    }

    inputFields(inputField) {
        splitPathParameters(inputField);
        switch (selector.toLowerCase()) {
            case 'card_holder_name':
                return this.getSection().xpath(`//*[@id="cardholderName"]`);
                break;
            case 'card_number':
                return this.getSection().xpath(`//*[@id="cardNumber"]`);
                break;
            case 'card_security_code':
                return this.getSection().xpath(`//*[@id="csc"]`);
                break;
            default:
                return null;
        }
    }

    buttons(buttonName) {
        splitPathParameters(buttonName);
        switch (selector.toLowerCase()) {
            case 'btn_cancel':
                return this.getSection().xpath(`//input[@id="btnCancel"]`);
                break;
            case 'btn_submit':
                return this.getSection().xpath(`//input[@id="btnSubmit"]`);
                break;
            default:
                return null;
        }

    }

    errormessages(errorType) {
        switch (errorType.toLowerCase()) {
            default:
                return null;
        }

    }

    links(linkName) {
        switch (linkName.toLowerCase()) {
            default:
                return null;
        }

    }

    checkBoxes(checkBoxName) {
        switch (checkBoxName.toLowerCase()) {
            default:
                return null;
        }

    }

    selectLists(selectListName) {
        splitPathParameters(selectListName);
        switch (selector.toLowerCase()) {
            default:
                return null;
        }
    }

    dropDowns(dropDownName) {
        splitPathParameters(dropDownName);
        switch (selector.toLowerCase()) {
            case 'expiry_month':
                return this.getSection().xpath(`//select[@id="expiryMonth"]`);
                break;
            case 'expiry_year':
                return this.getSection().xpath(`//select[@id="expiryYear"]`);
                break;
            default:
                return null;
        }
    }
}

