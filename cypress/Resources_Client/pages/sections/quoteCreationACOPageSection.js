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
            default:
                return null;
        }
    }

    buttons(buttonName) {
        splitPathParameters(buttonName);
        switch (selector.toLowerCase()) {
            case 'single_trip_basic':
                return this.getSection().xpath(`//*[@id="SINGLE_TRIP_BASIC_BTN"]`);
                break;
            case 'single_trip_comprehensive':
                return this.getSection().xpath(`//*[@id="SINGLE_TRIP_COMPREHENSIVE_BTN"]`);
                break;
            case 'annual_multi_trip_basic':
                return this.getSection().xpath(`//*[@id="ANNUAL_MULTI_TRIP_BASIC_BTN"]`);
                break;
            case 'annual_multi_trip_comprehensive':
                return this.getSection().xpath(`//*[@id="ANNUAL_MULTI_TRIP_COMPREHENSIVE_BTN"]`);
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
            case 'excess_waiver':
                return this.getSection().xpath(`//div[@id="OEWEB_EXCESS_WAIVER"]//label`);
                break;
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
            default:
                return null;
        }
    }
}

