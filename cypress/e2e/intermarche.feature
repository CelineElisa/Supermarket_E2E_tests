Feature: PRICE CHECK

  Scenario: Check the price of a product
    Given I am on the Intermarché website
    When I search for "compote"
    Then I should see the price of the first product