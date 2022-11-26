export default class userLoginSection {

    constructor(section) {
        this.pageSection = section;
    }

    //getting the cy section from constructor
    getSection() {
        return cy.xpath(this.pageSection);
    }

    inputFields(inputField) {
        switch (inputField.toLowerCase()) {
            case 'destination_country_search':
                return this.getSection().xpath('//*[@id="countrySearchInput"]');
                break;
            case 'destination_country_search_result':
                return this.getSection().xpath('(//*[@id="countrySearchResult"]//a)[1]');
                break;
            default:
                return null;
        }
    }

    buttons(buttonName) {
        switch (buttonName.toLowerCase()) {
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
            case 'departure_Jersey':
                return this.getSection().xpath('//span[@id="departure-UK5"]');
                break;
            // Trip already booked
            case 'trip_already_booked_yes':
                return this.getSection().xpath('//span[@id="trip-already-booked-yes-btn"]');
                break;
            case 'trip_already_booked_No':
                return this.getSection().xpath('//span[@id="trip-already-booked-No-btn"]');
                break;

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
        let selector;
        let parameter;
        if (String(optionType).includes('-')) {
            selector = optionType.split('-')[0];
            parameter = optionType.split('-')[1];
        } else {
            selector = optionType;
        }
        switch (selector.toLowerCase()) {
            case 'month_dropdown':
                return this.getSection().xpath('//div[@id="datepicker-departure"]//select[contains(@class, "ui-datepicker-month")]');
                break;
            case 'year_dropdown':
                return this.getSection().xpath('//div[@id="datepicker-departure"]//select[contains(@class, "ui-datepicker-year")]');
                break;
            case 'day_dropdown':
                return this.getSection().xpath(`//div[@id="datepicker-departure"]//td[contains(@data-handler, "selectDay")]//a[normalize-space(text()) = ${parameter}]`);
                break;
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
            default:
                return null;
        }
    }



}

