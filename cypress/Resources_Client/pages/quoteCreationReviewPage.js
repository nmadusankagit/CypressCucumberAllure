const pageSection = (sectionName) => {
    //return the section identifiere in pages ( a page can only have sections)
    switch (sectionName.toLowerCase()) {
        case 'organiser_details':
            return '//*[@id="paymentDetailsForm"]';
            break;
        default:
            return null;
    }
}

export default pageSection;