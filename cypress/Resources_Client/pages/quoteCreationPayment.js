const pageSection = (sectionName) => {
    //return the section identifiere in pages ( a page can only have sections)
    switch (sectionName.toLowerCase()) {
        case 'card_entry_panel':
            return '//*[@id="cardEntryPanel"]';
            break;
        default:
            return null;
    }
}

export default pageSection;