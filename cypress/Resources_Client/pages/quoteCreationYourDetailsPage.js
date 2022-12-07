const pageSection = (sectionName) => {
    //return the section identifiere in pages ( a page can only have sections)
    switch (sectionName.toLowerCase()) {
        case 'medical_disclaimer_section':
            return '//section[@id="medical-disclaimer-section"]';
            break;
        case 'traveller_details_section':
            return '//section[@id="traveller-details-section"]';
            break;
        case 'medical_declaration_section':
            return '//section[@id="medical-declaration-section"]';
            break;
        default:
            return null;
    }
}

export default pageSection;