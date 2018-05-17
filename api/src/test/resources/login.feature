Feature: Login into the application
  AS a user
  I WANT TO log in to the website
  SO THAT I can see my profile and grade events and persons

  Scenario: Log in with an existent account and valid data
    Given Estefania has an account
    And she fills the login information
    When she sends a request to the login service
    Then the service should response with a token
    And status code "200"

  Scenario: Log in with invalid information
    Given Estefania has invalid login information
    When she sends a request to the login service
    Then the system should retrieve error "The email and password do not match"
    And status code "400"

  Scenario Outline: Do not add information in the login form
    Given Estefania has an account
    And she doesn't fill "<field>"
    When she sends a request to the login service
    Then the system should retrieve error "Please fill all mandatory fields"
    And status code "400"

    Examples:
      | field    |
      | email    |
      | password |