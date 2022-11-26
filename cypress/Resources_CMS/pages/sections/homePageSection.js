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
            case 'username':
                return this.getSection().xpath('//*[@id="user_login"]');
                break;
            case 'password':
                return this.getSection().xpath('//*[@id="user_pass"]');
                break;
            default:
                return null;
        }
    }

    buttons(buttonName) {
        switch (buttonName.toLowerCase()) {
            case 'login':
                return this.getSection().xpath('//*[@id="wp-submit"]');
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
            case 'tournaments':
                return this.getSection().xpath('//div[@class="wp-menu-name" and normalize-space(text()) = "Tournaments"]');
                break;
            case 'staysuretour':
                return this.getSection().xpath('//div[@class="wp-menu-name" and normalize-space(text()) = "Staysure Tour"]');
                break;  
            case 'orderofmerit':
                return this.getSection().xpath('//*[@id="toplevel_page_acf-options-our-partners"]/ul/li[4]/a');
                break;   
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

