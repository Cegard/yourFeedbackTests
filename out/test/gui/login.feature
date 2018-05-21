Feature: Login into the application
  As a user
  I want to log in to the website
  So that I can see my profile and grade events and persons

  Scenario: Log in with an existent account and valid data
    Given Estefania is registered in the page
    And she is in the login page
    When she requests to log in with email "estefania.calderon@endava.com" and password "Password1"
    Then she should access to profile page


  Scenario: Log in with invalid information
    Given Estefania is registered in the page
    And she is in the login page
    When she fills email and password with invalid records
    Then the system should display "The email and password do not match" message

  Scenario Outline: Do not add information in the login form
    Given Estefania is registered in the page
    And she is in the login page
    When she doesn't fill "<field>"
    Then the system should display "Please fill all mandatory fields" message

  Examples:
  | field	   |
  | email	   |
  | password   |