const pageSection = (sectionName) => {
    //return the section identifiere in pages ( a page can only have sections)
    switch (sectionName.toLowerCase()) {
        case 'about_your_travel_policy_section':
            return '//h3[normalize-space(text()) = "About your travel policy"]/..';
            break;
        case 'your_basic_details_section':
            return '//h3[normalize-space(text()) = "Your basic details"]/..';
            break;
        case 'submit_button_section':
            return '//input[@id="btnSubmit"]/..';
            break;
        case 'about_your_travel_policy_departure_date_section':
            return '//h3[normalize-space(text()) = "About your travel policy"]/..//div[@id="datepicker-departure"]';
            break;
        case 'about_your_travel_policy_return_date_section':
            return '//h3[normalize-space(text()) = "About your travel policy"]/..//div[@id="datepicker-return"]';
            break;
        default:
            return null;
    }
}

export default pageSection;