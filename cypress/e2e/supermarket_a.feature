Feature: Supermarket A 

  Scenario: The user searches for a product but can't see the products prices without enabling the location
    Given I am on the "A" Supermarket website
    When I search for "oeufs"
    Then I can see the products results
    But I can't see the products prices

  Scenario: The user enables the location to see the products prices
    Given I am on the "A" Supermarket website
    When I search for "oeufs"
    And I enable my location
    Then I can see the products results
    And I can see the products prices

  Scenario: The user filters the products by ascending price
    Given I am on the "A" Supermarket website
    And I have enabled my location
    And I have made a research for "oeufs"
    When I filter the products by ascending price
    Then The products are sorted by ascending price