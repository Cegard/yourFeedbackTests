Feature: Edit profile
  AS a user
  I want to edit my profile
  SO THAT I can set my document type, document, name, last name, email, password, and role

  Scenario: Add new information in the profile page
    Given Estefania	has an active session
    And she fills the register information
    When she sends a request to the edit profile service
    Then the service should response with the profile
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
      | email@domain.com | abcdefg0 | abcdefg0             | The password must contain at least one capital letter |
      | email@domain.com | Abcdefgh | Abcdefgh             | The password must contain a number                    |


  Scenario Outline: Edit email with an existent record
    Given Estefania	has an active session
    And she request to modify with an existent "<field>"
    When she sends a request to the edit profile service
    Then the system should retrieve "<errorMessage>"
    And status code "400"

    Examples:
      | field    | errorMessage       |
      | email    | User already exist |
      | document | User already exist |

  Scenario: Not add any information in the register form
    Given Estefania	has an active session
    And she does not send any information
    When she sends a request to the edit profile service
    Then the system should retrieve status code "400"