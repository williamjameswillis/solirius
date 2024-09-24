Feature: Calculate Holiday Entitlement on the government website for regular workers

    Scenario Outline: Calculate holiday entitlement based on days-worked-per-week holiday entitlement for a full year for '<ValueToEnter>' days
        Given I am on the "Calculate your holiday entitlement" page
        When I chose Start Now
        Then I am on the regular or irregular hours page
        When I chose the regular hours option and Continue
        Then I am on the holiday entitlement type page
        When I chose the '<holidayEntitlementType>' option for the holiday entitlement type and Continue
        Then The page should navigate to the expected holiday entitlement type URL containing '<holidayEntitlementType>'
        And I am on the holiday length calculation page
        When I chose the '<holidayLengthCalculation>' option for the holiday length calculation and Continue
        Then The page should navigate to the expected holiday length calculation URL containing '<holidayLengthCalculation>'
        And I am on the number of days worked per week page
        When I enter '<ValueToEnter>' number of days worked per week and Continue
        Then I am on the final holiday entitlement outcome page
        And The displayed number of days holiday matches the expected number '<holidayEntitlementValueToAssert>' of days holiday
        Examples:
            | holidayEntitlementType | holidayLengthCalculation | ValueToEnter | holidayEntitlementValueToAssert |
            | days-worked-per-week  | full-year | 7  | 28  |
            | days-worked-per-week  | full-year | 6  | 28  |
            | days-worked-per-week  | full-year | 5  | 28  |
            | days-worked-per-week  | full-year | 4.5 | 25.2  |
            | days-worked-per-week  | full-year | 4 | 22.4  |
            | days-worked-per-week  | full-year | 3  | 16.8  |
            | days-worked-per-week  | full-year | 2 | 11.2  | 
            | days-worked-per-week  | full-year | 1 | 5.6 | 

    Scenario Outline: Negative Edge cases for number of days worked per week page - validation error displayed when invalid days are entered - value is '<ValueToEnter>'
        Given I am on the "Calculate your holiday entitlement" page
        When I chose Start Now
        Then I am on the regular or irregular hours page
        When I chose the regular hours option and Continue
        Then I am on the holiday entitlement type page
        When I chose the 'days-worked-per-week' option for the holiday entitlement type and Continue
        Then The page should navigate to the expected holiday entitlement type URL containing 'days-worked-per-week'
        And I am on the holiday length calculation page
        When I chose the 'full-year' option for the holiday length calculation and Continue
        Then The page should navigate to the expected holiday length calculation URL containing 'full-year'
        And I am on the number of days worked per week page
        When I enter '<ValueToEnter>' number of days worked per week and Continue
        Then I am presented with a validation error
                Examples:
             | ValueToEnter | 
            | 8  |
            | 0  |
            | 0.5  |
            | -5  |
            | E  |
            | a  |
            | %  |

    Scenario Outline: Calculate holiday entitlement based on days-worked-per-week holiday entitlement for someone starting part way through a leave year
        Given I am on the "Calculate your holiday entitlement" page
        When I chose Start Now
        Then I am on the regular or irregular hours page
        When I chose the regular hours option and Continue
        Then I am on the holiday entitlement type page
        When I chose the '<holidayEntitlementType>' option for the holiday entitlement type and Continue
        Then The page should navigate to the expected holiday entitlement type URL containing '<holidayEntitlementType>'
        And I am on the holiday length calculation page
        When I chose the '<holidayLengthCalculation>' option for the holiday length calculation and Continue
        Then The page should navigate to the expected holiday length calculation URL containing '<holidayLengthCalculation>'
        And I am on the employment start date page
        When I enter the employment start date '<startDate>' and Continue
        Then I am on the leave year date page
        When I enter the leave year start date '<leaveYearDate>' and Continue
        Then I am on the number of days worked per week page
        When I enter '<ValueToEnter>' number of days worked per week and Continue
        Then I am on the final holiday entitlement outcome page
        And The displayed number of days holiday matches the expected number '<holidayEntitlementValueToAssert>' of days holiday
        Examples:
            | holidayEntitlementType | holidayLengthCalculation | startDate | leaveYearDate | ValueToEnter | holidayEntitlementValueToAssert |
            | days-worked-per-week  | starting | 07 07 2024 | 01 01 2024  | 5 | 14 |
            | days-worked-per-week  | starting | 01 01 2024 | 06 06 2023  | 5.5 | 14 |
            | days-worked-per-week  | starting | 01 01 2020 | 06 06 2019  | 3 | 8.5 |
            | days-worked-per-week  | starting | 02 01 2024 | 01 01 2024  | 5 | 28 |
            | days-worked-per-week  | starting | 02 09 2024 | 01 01 2024  | 1 | 2 |

    Scenario Outline: Negative Edge cases for someone starting part way through a leave year page - validation error displayed when invalid date is entered - date is '<startDate>' 
        Given I am on the "Calculate your holiday entitlement" page
        When I chose Start Now
        Then I am on the regular or irregular hours page
        When I chose the regular hours option and Continue
        Then I am on the holiday entitlement type page
        When I chose the 'days-worked-per-week' option for the holiday entitlement type and Continue
        Then The page should navigate to the expected holiday entitlement type URL containing 'days-worked-per-week'
        And I am on the holiday length calculation page
        When I chose the 'starting' option for the holiday length calculation and Continue
        Then The page should navigate to the expected holiday length calculation URL containing 'starting'
        And I am on the employment start date page
        When I enter the employment start date '<startDate>' and Continue
        Then I am presented with a start date validation error
                Examples:
             | startDate |
             ||
             |-1 - 1 -1|

    Scenario Outline: Negative Edge cases for leave year date page - validation error displayed when invalid date is entered - date is '<leaveYearDate>' 
        Given I am on the "Calculate your holiday entitlement" page
        When I chose Start Now
        Then I am on the regular or irregular hours page
        When I chose the regular hours option and Continue
        Then I am on the holiday entitlement type page
        When I chose the '<holidayEntitlementType>' option for the holiday entitlement type and Continue
        Then The page should navigate to the expected holiday entitlement type URL containing '<holidayEntitlementType>'
        And I am on the holiday length calculation page
        When I chose the '<holidayLengthCalculation>' option for the holiday length calculation and Continue
        Then The page should navigate to the expected holiday length calculation URL containing '<holidayLengthCalculation>'
        And I am on the employment start date page
        When I enter the employment start date '<startDate>' and Continue
        Then I am on the leave year date page
        When I enter the leave year start date '<leaveYearDate>' and Continue
        Then I am presented with the leave year start date validation error '<expectedValidationError>'
        Examples:
            | holidayEntitlementType | holidayLengthCalculation | startDate | leaveYearDate | expectedValidationError |
            | days-worked-per-week  | starting | 01 01 2024 | 01 01 2024  | Your leave year start date must be earlier than your employment start date of |
            | days-worked-per-week  | starting | 01 01 2024 | 02 01 2024  | Your leave year start date must be earlier than your employment start date of |
            | days-worked-per-week  | starting | 01 01 2024 | 02 01 2290 | Your leave year start date must be earlier than your employment start date of |
            | days-worked-per-week  | starting | 01 01 2024 | 02 01 100 | Your employment start date of |
            | days-worked-per-week  | starting | 01 01 2024 || Please answer this question |