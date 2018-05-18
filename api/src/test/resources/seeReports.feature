Feature: See user reports
  As a logged user
  I want to see the reports
  So that I can check my statistics and other people comments.

  Scenario: See all my reports
    Given Estefania	has an active session
    When  she sends a requests to the reports profile
    Then the service should response with a token
    And status code "200"
