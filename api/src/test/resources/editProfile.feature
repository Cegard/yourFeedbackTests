Feature: Edit Profile
  As a user
  I want to edit my profile
  So that I can set my document type, document, name, last name, email, password, and role

  Scenario: Add new information in the profile page
    Given Estefania	has an active session
    And she fills the register information
    When she sends a request to the edit profile service
    Then the service should response with a token
    And status code "200"

  Scenario Outline: Edit email and password with invalid data
    Given Estefania	has an active session
    And she requests to edit her profile with "<email>", "<password>" and "<verificationPassword>"
    When she sends a request to the edit profile service
    Then the system should retrieve "<error>" message
    And status code "400"
    Examples:
      | email            | password | verificationPassword | error                                                 |
      | email            | Abcdefg0 | Abcdefg0             | The email is invalid                                  |
      | email@domain.co  | Abcdefg0 | Abcdefg0             | The email is invalid                                  |
      | email@domain.com | abcdefg0 | abcdefg0             | The password must contain at least one capital letter |
      | email@domain.com | Abcdefgh | Abcdefgh             | The password must contain a number                    |
      | email@domain.com | Abcdefg0 | Abcdefg1             | The password must coincide                            |


  Scenario Outline: Edit email with an existent record
    Given Estefania	has an active session
    And she request to modify with an existent "<field>"
    When she sends a request to the registration service
    Then the system should retrieve "<errorMessage>"
    And status code "400"

    Examples:
      | field    | errorMessage                  |
      | email    | The email should be unique    |
      | document | The document should be unique |

  Scenario: Not add any information in the register form
    Given Estefania	has an active session
    And she does not send any information
    When she sends a request to the registration service
    Then the system should retrieve status code "400"


