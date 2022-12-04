Feature: Login page

    Feature Login page will work depending on the user credentials.

    Background:
        Given A web browser is at the StaySure quote creaton page
    Scenario: Complete Travel Details
        When A user selectes trip type "singletrip" in Travel Details tab
        #   // Options: yes/ no
        When A user select "no" for cruise option in Travel Details tab
        When A user selectes all Travelling from locations in Travel Details tab
            | travellingFrom |
            | United Kingdom |
            | Isle of Man    |
            | Guernsey       |
            | Jersey         |
        #   // Options: United Kingdom/ Isle of Man/ Guernsey/ Jersey
        When A user selectes Travelling from "United Kingdom" in Travel Details tab
        # Any travelling to country
        When A user selectes Travelling to "Singapore" in Travel Details tab
        # Date format DD/MM/YYYY Ex: 20/04/2023
        When A user selectes Departure date "20/04/2023" in Travel Details tab
        Then empty assertion
    Scenario: Success Oracle DB Data Fetch
        When User select all data in med_quote table for quote_id = "177"