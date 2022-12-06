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
            ////////////////////////////////////About your travel policy////////////////////////////////////
            ////////////////////////////////////////////////////////////////////////////////////////////////
            case 'destination_country_search':
                return this.getSection().xpath('//*[@id="countrySearchInput"]');
                break;
            case 'destination_country_search_result':
                return this.getSection().xpath('(//*[@id="countrySearchResult"]//a)[1]');
                break;
            case 'traveller_age':
                //parameters: 1/ 2/ 3/ 4/
                return this.getSection().xpath(`//input[@id="traveler_age_${parameter}"]`);
                break;
            ////////////////////////////////////////////////////////////////////////////////////////////////
            ///////////////////////////////////////Your basic details///////////////////////////////////////
            ////////////////////////////////////////////////////////////////////////////////////////////////
            case 'organiser_first_name':
                return this.getSection().xpath(`//input[@id="firstname"]`);
                break;
            case 'organiser_last_name':
                return this.getSection().xpath(`//input[@id="lastname"]`);
                break;
            case 'organiser_email':
                return this.getSection().xpath(`//input[@id="email"]`);
                break;
            case 'organiser_time_telephone':
                return this.getSection().xpath(`//input[@id="dayTimeTelephone"]`);
                break;
            case 'organiser_post_code':
                return this.getSection().xpath(`//input[@id="postcode"]`);
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
            ////////////////////////////////////About your travel policy////////////////////////////////////
            ////////////////////////////////////////////////////////////////////////////////////////////////
            // Trip Types
            case 'singletrip':
                return this.getSection().xpath('//span[@id="type-st"]');
                break;
            case 'annualmultitrip':
                return this.getSection().xpath('//span[@id="type-amt"]');
                break;
            // Cruise Selection
            case 'cruiseyes':
                return this.getSection().xpath('//span[@id="cruise-yes"]');
                break;
            case 'cruiseno':
                return this.getSection().xpath('//span[@id="cruise-no"]');
                break;
            //Departure Countries
            case 'departure_uk':
                return this.getSection().xpath('//span[@id="departure-UK1"]');
                break;
            case 'departure_isleofman':
                return this.getSection().xpath('//span[@id="departure-UK3"]');
                break;
            case 'departure_guernsey':
                return this.getSection().xpath('//span[@id="departure-UK4"]');
                break;
            case 'departure_jersey':
                return this.getSection().xpath('//span[@id="departure-UK5"]');
                break;
            // Trip already booked
            case 'trip_already_booked_yes':
                return this.getSection().xpath('//span[@id="trip-already-booked-yes-btn"]');
                break;
            case 'trip_already_booked_no':
                return this.getSection().xpath('//span[@id="trip-already-booked-No-btn"]');
                break;
            // Cover types
            case 'cover_type_individual':
                return this.getSection().xpath('//span[@id="cover-individual-btn"]');
                break;
            case 'cover_type_couple':
                return this.getSection().xpath('//span[@id="cover-couple-btn"]');
                break;
            case 'cover_type_family':
                return this.getSection().xpath('//span[@id="cover-family-btn"]');
                break;
            case 'cover_type_other':
                return this.getSection().xpath('//span[@id="cover-other-btn"]');
                break;
            case 'cover_age':
                return this.getSection().xpath(`//span[@id="traveler_age_${parameter}"]`);
                break;
            ////////////////////////////////////////////////////////////////////////////////////////////////
            ////////////////////////////////////About your travel policy////////////////////////////////////
            ////////////////////////////////////////////////////////////////////////////////////////////////
            case 'next_button':
                return this.getSection().xpath(`//input[@id="btnSubmit"]`);
                break;
            ////////////////////////////////////////////////////////////////////////////////////////////////
            case 'signin':
                return this.getSection().xpath('//div[normalize-space(text()) = "Sign in"]');
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

    datepicker(optionType) {
        splitPathParameters(optionType);
        switch (selector.toLowerCase()) {
            ////////////////////////////////////////////////////////////////////////////////////////////////
            ////////////////////////////////////About your travel policy////////////////////////////////////
            ////////////////////////////////////////////////////////////////////////////////////////////////
            case 'month_dropdown_departure':
                return this.getSection().xpath('//div[@id="datepicker-departure"]//select[contains(@class, "ui-datepicker-month")]');
                break;
            case 'year_dropdown_departure':
                return this.getSection().xpath('//div[@id="datepicker-departure"]//select[contains(@class, "ui-datepicker-year")]');
                break;
            case 'day_dropdown_departure':
                return this.getSection().xpath(`//div[@id="datepicker-departure"]//td[contains(@data-handler, "selectDay")]//a[normalize-space(text()) = ${parameter}]`);
                break;
            case 'month_dropdown_return':
                return this.getSection().xpath('//div[@id="datepicker-return"]//select[contains(@class, "ui-datepicker-month")]');
                break;
            case 'year_dropdown_return':
                return this.getSection().xpath('//div[@id="datepicker-return"]//select[contains(@class, "ui-datepicker-year")]');
                break;
            case 'day_dropdown_return':
                return this.getSection().xpath(`//div[@id="datepicker-return"]//td[contains(@data-handler, "selectDay")]//a[normalize-space(text()) = ${parameter}]`);
                break;
            ////////////////////////////////////////////////////////////////////////////////////////////////
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
        switch (selectListName.toLowerCase()) {
            default:
                return null;
        }
    }

    dropDowns(dropDownName) {
        switch (dropDownName.toLowerCase()) {
            ////////////////////////////////////////////////////////////////////////////////////////////////
            ///////////////////////////////////////Your basic details///////////////////////////////////////
            ////////////////////////////////////////////////////////////////////////////////////////////////
            case 'organiser_title':
                return this.getSection().xpath(`//select[@id="organiserTitle"]`);
                break;
            case 'organiser_first_name':
                return this.getSection().xpath(`//input[@id="firstname"]`);
                break;
            case 'organiser_last_name':
                return this.getSection().xpath(`//input[@id="lastname"]`);
                break;
            case 'organiser_email':
                return this.getSection().xpath(`//input[@id="email"]`);
                break;
            case 'organiser_time_telephone':
                return this.getSection().xpath(`//input[@id="dayTimeTelephone"]`);
                break;
            case 'organiser_post_code':
                return this.getSection().xpath(`//input[@id="postcode"]`);
                break;
            ////////////////////////////////////////////////////////////////////////////////////////////////
            default:
                return null;
        }
    }
}

