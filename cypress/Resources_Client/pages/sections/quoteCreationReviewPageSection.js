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
            case 'organiser_first_name':
                return this.getSection().xpath(`//input[@id="organiserFirstName"]`);
                break;
            case 'organiser_last_name':
                return this.getSection().xpath(`//input[@id="organiserLastName"]`);
                break;
            case 'organiser_telephone':
                return this.getSection().xpath(`//input[@id="telephoneNumber"]`);
                break;
            case 'organiser_email':
                return this.getSection().xpath(`//input[@id="emailAddress"]`);
                break;
            case 'organiser_post_code':
                return this.getSection().xpath(`//input[@id="postcode"]`);
                break;
            case 'organiser_address_line1':
                return this.getSection().xpath(`//input[@id="firstLineOfAddress"]`);
                break;
            case 'organiser_address_line2':
                return this.getSection().xpath(`//input[@id="secondLineOfAddress"]`);
                break;
            case 'organiser_address_town_city':
                return this.getSection().xpath(`//input[@id="city"]`);
                break;
            case 'voucher_code':
                return this.getSection().xpath(`//input[@id="voucherCode1"]`);
                break;
            case 'promo_code':
                return this.getSection().xpath(`//*[@id="promoCode"]`);
                break;
            default:
                return null;
        }
    }

    buttons(buttonName) {
        splitPathParameters(buttonName);
        switch (selector.toLowerCase()) {
            case 'organiser_post_search':
                return this.getSection().xpath(`//input[@id="findAddress"]`);
                break;
            case 'voucher_code_apply':
                return this.getSection().xpath(`//*[@id="applyVoucherCode"]`);
                break;
            case 'promo_code_apply':
                return this.getSection().xpath(`//*[@id="applyPromoCode"]`);
                break;
            case 'make_payment':
                return this.getSection().xpath(`//button[@id="makePayment" and @name="makePayment"]`);
                break;
            case 'back':
                return this.getSection().xpath(`//a[normalize-space(text()) = "Back"]`);
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
            case 'user_declaration':
                return this.getSection().xpath(`//label[@id="user-declaration"]`);
                break;
            case 'user_accept':
                return this.getSection().xpath(`//*[@id="user-accept"]`);
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
            case 'organiser_title':
                return this.getSection().xpath(`//select[@id="organiserTitle"]`);
                break;
            case 'organiser_dob_day':
                return this.getSection().xpath(`//select[@id="day"]`);
                break;
            case 'organiser_dob_month':
                return this.getSection().xpath(`//select[@id="month"]`);
                break;
            case 'organiser_dob_year':
                return this.getSection().xpath(`//select[@id="year"]`);
                break;
            case 'organiser_document_postal':
                return this.getSection().xpath(`//select[@id="postalCopyRequest"]`);
                break;
            case 'organiser_post_code_select':
                return this.getSection().xpath(`//select[@id="dropDownList" and @name="postalSearch"]`);
                break;
            case 'organiser_address_country':
                return this.getSection().xpath(`//select[@id="organizerCountry"]`);
                break;
            default:
                return null;
        }
    }
}

