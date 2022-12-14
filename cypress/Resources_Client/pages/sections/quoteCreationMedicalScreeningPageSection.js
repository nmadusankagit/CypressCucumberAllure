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
            case 'med_condition_search':
                return this.getSection().xpath(`//input[@id="conditionsearch"]`);
                break;
            default:
                return null;
        }
    }

    buttons(buttonName) {
        splitPathParameters(buttonName);
        switch (selector.toLowerCase()) {
            case 'submit_med_answers':
                return this.getSection().xpath(`//tbody[@id="searchConditionResultsTableBody"]//*[@title="Continue"]`);
                break;
            case 'finish_med_answers':
                return this.getSection().xpath(`//button[@id="btnSubmit"]`);
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
            case 'found_condition':
                return this.getSection().xpath(`//button[@name="foundConditionid" and @title="${parameter}"]`);
                break;
            default:
                return null;
        }
    }

    medicalAnswers(medicalAnswer) {
        splitPathParameters(medicalAnswer);
        let question = parameter.split('|')[0];
        let answer = parameter.split('|')[1];
        console.log("Medical question: " + question)
        console.log("Medical answer: " + answer)
        switch (selector.toLowerCase()) {
            case 'found_answer':
                return this.getSection().xpath(`//tbody[@id="searchConditionResultsTableBody"]//span[@class="question" and normalize-space(text()) = "${question}"]/ancestor::td//span[normalize-space(text()) = "${answer}"]`);
                break;
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

