Feature: See user reports
  As a logged user
  I want to see the reports
  So that I can check my statistics and other people comments.

  Scenario: See all my reports
    Given Estefania is in the reports page
    And   there is at least one event
    When she requests to see all her events
    Then the system should retrieve a list of reports containing name, place, description and feedback

