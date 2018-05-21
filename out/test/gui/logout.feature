Feature: Log out
  As a logged user
  I want to log out from the application
  So that I can close my session

  Scenario: Log out from the application
    Given Estefania has an active session
    When she logs out
    Then she should see the login page