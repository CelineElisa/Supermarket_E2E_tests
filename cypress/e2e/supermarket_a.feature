Feature: Supermarket A 

  Scenario: The user searches for a product but can't see the product prices without enabling location
    Given I am on the Supermarket A website
    When I search for "oeufs"
    Then I can see the products results
    But I can't see the products prices

  Scenario: The user enables location to see the product prices
    Given I am on the Supermarket A website
    When I search for "oeufs"
    And I enable my location
    Then I can see the products results
    And I can see the products prices

  Scenario: The user filters the products by price ascending
    Given I am on the Supermarket A website
    And I have enabled my location
    And I have made a research for "oeufs"
    When I filter the products by price ascending
    Then The products are sorted by price ascending