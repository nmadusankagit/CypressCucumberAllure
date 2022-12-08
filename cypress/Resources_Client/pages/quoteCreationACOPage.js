const pageSection = (sectionName) => {
    //return the section identifiere in pages ( a page can only have sections)
    switch (sectionName.toLowerCase()) {
        case 'aco_section':
            return '//*[@id="quote-table"]';
            break;
        case 'optional_extras_popup':
            return '//div[@id="optionalExtrasPopup"]';
            break;
        default:
            return null;
    }
}

export default pageSection;