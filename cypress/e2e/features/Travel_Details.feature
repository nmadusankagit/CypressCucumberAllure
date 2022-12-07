Feature: Login page

    Feature Login page will work depending on the user credentials.

    Background:
        Given A web browser is at the StaySure quote creaton page
    Scenario: Complete Travel Details
        When A user selectes trip type "singletrip" in Travel Details tab
        #   // Options: yes/ no
        And A user select "no" for cruise option in Travel Details tab
        And A user selectes all Travelling from locations in Travel Details tab
            | travellingFrom |
            | United Kingdom |
            | Isle of Man    |
            | Guernsey       |
            | Jersey         |
        #   // Options: United Kingdom/ Isle of Man/ Guernsey/ Jersey
        And A user selectes Travelling from "United Kingdom" in Travel Details tab
        # Any travelling to country
        And A user type Travelling to "Singapore" in Travel Details tab
        # Date format DD/MM/YYYY Ex: 20/04/2023
        And A user selectes Departure date "20/04/2023" in Travel Details tab
        And A user selectes Return date "25/04/2023" in Travel Details tab
        And A user selectes Cover type "cover_type_individual" in Travel Details tab
        And A user type age "25" for traveller "1" in Travel Details tab
        And A user selectes title "Mr" in Travel Details tab
        And A user type first name "Nipuna" and last name "Madusanka" in Travel Details tab
        And A user type email address "staysuremember@gmail.com" in Travel Details tab
        And A user type telephone number "0123456789" in Travel Details tab
        And A user type post code "NN47YB" in Travel Details tab
        When A user next button in Travel Details tab
        When A user is in Your Details tab
        When A user select I understand checkbox for Medical Disclaimer in Your Details tab
        # Options: Mr/ Mrs/ Miss/ Ms/ Dr/ Rev
        When A user selectes traveller "1" title "Mr", first name "Nipuna" and last name "Madusanka" in Your Details tab
        When A user add medical conditions for traveller "1" in Your Details tab
        When A user is in medical screening page
        When A user search medical condition "Testing" in medical screening page

        Then empty assertion









    # Scenario: Success Oracle DB Data Fetch
    #     When User select all data in med_quote table for quote_id = "177"