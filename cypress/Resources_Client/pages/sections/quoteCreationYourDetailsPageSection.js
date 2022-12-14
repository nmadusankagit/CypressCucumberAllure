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
            ////////////////////////////////////////////////////////////////////////////////////////////////
            ////////////////////////////////////////Traveller Details///////////////////////////////////////
            ////////////////////////////////////////////////////////////////////////////////////////////////
            case 'traveller_first_name':
                parameter = parameter - 1;
                //Options: traveller_first_name-1, traveller_first_name-2, traveller_first_name-3...etc
                return this.getSection().xpath(`//input[@id="traveler_first_name_${parameter}"]`);
                break;
            case 'traveller_surname':
                parameter = parameter - 1;
                //Options: traveller_surname-1, traveller_surname-2, traveller_surname-3...etc
                return this.getSection().xpath(`//input[@id="traveler_last_name_${parameter}"]`);
                break;
            ////////////////////////////////////////////////////////////////////////////////////////////////
            default:
                return null;
        }
    }

    buttons(buttonName) {
        splitPathParameters(buttonName);
        switch (selector.toLowerCase()) {
            ////////////////////////////////////////////////////////////////////////////////////////////////
            ///////////////////////////////////////Medical Declaration//////////////////////////////////////
            ////////////////////////////////////////////////////////////////////////////////////////////////
            case 'medical_conditions_yes':
                parameter = parameter - 1;
                //Options: medical_conditions_yes-1, medical_conditions_yes-2, medical_conditions_yes-3...etc
                return this.getSection().xpath(`//input[@id="radio-yes${parameter}"]/..//span[@id="medical-yes"]`);
                break;
            case 'medical_conditions_no':
                parameter = parameter - 1;
                //Options: medical_conditions_no-1, medical_conditions_no-2, medical_conditions_no-3...etc
                return this.getSection().xpath(`//input[@id="radio-no${parameter}"]/..//span[@id="medical-no"]`);
                break;
            case 'next':
                return this.getSection().xpath(`//input[@value="Next" and @type="button"]`);
                break;
            case 'submit_medical_declaration':
                return this.getSection().xpath(`//div[@id="medical_dec"]//button[@id="medical_dec_submit_btn"]`);
                break;
            ////////////////////////////////////////////////////////////////////////////////////////////////
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
            ////////////////////////////////////////////////////////////////////////////////////////////////
            ///////////////////////////////////////Medical Disclaimer///////////////////////////////////////
            ////////////////////////////////////////////////////////////////////////////////////////////////
            case 'accept_medical_terms_and_conditions':
                return this.getSection().xpath('//*[@id="checkbox-accept"]');
                break;
            ////////////////////////////////////////////////////////////////////////////////////////////////
            default:
                return null;
        }

    }

    selectLists(selectListName) {
        switch (selectListName.toLowerCase()) {
            default:
                return null;
        }
    }

    dropDowns(dropDownName) {
        splitPathParameters(dropDownName);
        switch (selector.toLowerCase()) {
            ////////////////////////////////////////////////////////////////////////////////////////////////
            ///////////////////////////////////////Your basic details///////////////////////////////////////
            ////////////////////////////////////////////////////////////////////////////////////////////////
            case 'traveller_title':
                //oprions: traveller_title-1, traveller_title-2, traveller_title-3...etc
                parameter = parameter - 1;
                return this.getSection().xpath(`//select[@id="traveler_title_${parameter}"]`);
                break;
            ////////////////////////////////////////////////////////////////////////////////////////////////
            default:
                return null;
        }
    }
}

