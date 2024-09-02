Feature: Supermarket A 

  Scenario: The user searches for a product but can't see the product prices without enabling location
    Given I am on the Supermarket A website
    When I search for "oeufs bio"
    Then I can see the products results
    But I can't see the products prices

  Scenario: The user enables location to see the product prices
    Given I am on the Supermarket A website
    When I search for "oeufs bio"
    And I enable my location
    Then I can see the products results
    And I can see the products prices
