const pageSection = (sectionName) => {
    //return the section identifiere in pages ( a page can only have sections)
    switch (sectionName.toLowerCase()) {
        case 'homeform':
            return '//*[@id="wpwrap"]';
            break;
        default:
            return null;
    }
}

export default pageSection;