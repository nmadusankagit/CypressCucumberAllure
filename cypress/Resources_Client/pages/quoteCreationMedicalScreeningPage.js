const pageSection = (sectionName) => {
    //return the section identifiere in pages ( a page can only have sections)
    switch (sectionName.toLowerCase()) {
        case 'medical_screening':
            return '//form[@id="screeningUiStateForm"]';
            break;
        default:
            return null;
    }
}

export default pageSection;