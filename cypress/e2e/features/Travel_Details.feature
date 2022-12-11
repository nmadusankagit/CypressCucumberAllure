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
        And A user type first name "John" and last name "Doe" in Travel Details tab
        And A user type email address "staysurejohn@test.test" in Travel Details tab
        And A user type telephone number "0123456789" in Travel Details tab
        And A user type post code "NN47XD" in Travel Details tab
        When A user next button in Travel Details tab
        When A user is in Your Details tab
        When A user select I understand checkbox for Medical Disclaimer in Your Details tab
        # Options: Mr/ Mrs/ Miss/ Ms/ Dr/ Rev
        When A user selectes traveller "1" title "Mr", first name "John" and last name "Doe" in Your Details tab
        When A user add medical conditions for traveller "1" in Your Details tab
        When A user is in medical screening page
        When A user search medical condition "Burns" in medical screening page
            | Medical_Question                                              | Answer |
            | Are any further dressings required for your burns?            | Yes    |
            | Is any surgery required in the future to treat the burns?     | Yes    |
            | Have the burns caused other problems such as skin infections? | No     |
        When A user click next on Your Details tab
        When A user is in quote results page
        # Option: single trip basic, single trip comprehensive, annual multi trip basic, annual multi trip comprehensive
        When A user select cover type "single trip comprehensive" in quote results tab
        When A user select ACO "excess waiver" in quote results tab
        When A user click next on quote results tab
        When A user is in quote review page
        When A user enter organiser details in quote review page
            | Title    | First_Name | Surname   | Date_of_Birth | Tel_Number  | Email                    | Post_My_Documents | Post_Code | Address_List_Selection                                  | Address_Line_1   | Address_Line_2 | Town_City   | Country        |
            | Mr       | John       | Doe       | 15/01/1990    | 0123456789  | staysuremember@gmail.com | Yes               | NN47YB    | Staysure Services Britannia House Rushmills Northampton | Britannia House  | Rushmills      | Northampton | United Kingdom |
        When A user is in payment page
        When A user enter payment details in payment page
            | Card_Holder_Name | Card_Number      | Expiry_Date | Card_Security_Code |
            | Testing          | 4111111111111111 | 04/25       | 411                |
        When A user click pay now button in payment page
        Then empty assertion









    # Scenario: Success Oracle DB Data Fetch
    #     When User select all data in med_quote table for quote_id = "177"