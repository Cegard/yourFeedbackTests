Feature: Register
  As an anonymous user
  I want TO get registered
  So that I can have a profile and interact with the page

  Scenario: Create account with valid data
    Given Estefania has the register information
    When she sends a request to the registration service
    Then the service should response with a token
    And status code "200"

  Scenario Outline: Create an account with invalid data
    Given Estefania has the following data "<email>", "<password>" and "<verificationPassword>"
    When she sends a request to the registration service
    Then the system should retrieve "<error>"
    And status code "400"
    Examples:
      | email            | password | verificationPassword | error                                                 |
      | email            | Abcdefg0 | Abcdefg0             | The email is invalid                                  |
      | email@domain.co  | Abcdefg0 | Abcdefg0             | The email is invalid                                  |
      | email@domain.com | abcdefg0 | abcdefg0             | The password must contain at least one capital letter |
      | email@domain.com | Abcdefgh | Abcdefgh             | The password must contain a number                    |
      | email@domain.com | Abcdefg0 | Abcdefg1             | The password must coincide                            |

  Scenario Outline: Create an account with existing field
    Given Estefania has the register information
    And existent "<field>"
    When she sends a request to the registration service
    Then the system should retrieve "<error>"
    And status code "400"
    Examples:
      | field    | error                         |
      | email    | The email should be unique    |
      | document | The document should be unique |

  Scenario: Do not add any information in the register form
    Given Estefania does not send any information
    When she sends a request to the registration service
    Then the system should retrieve status code "400"
