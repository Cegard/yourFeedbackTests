Feature: Register
  As an anonymous user
  I want TO get registered
  So that I can have a profile and interact with the page

  Scenario:  Add new and valid information in the register form
Given Estefania is an anonymous user
And she is in the register page
When Estefania fills the sing up form with the following information
| documentType     | C.C.                          |
| document         | 50505050                      |
| name             | Estefania                     |
| lastName         | Calderon                      |
| email            | estefania.calderon@endava.com |
| password         | Password1                     |
| validatePassword | Password1                     |
| role             | Testing                       |
And she requests to register
Then she should obtain a confirmation message


  Scenario Outline: Create an account with invalid data
    Given Estefania is an anonymous user
    And she is in the register page
    When she requests to create an account with "<email>", "<password>" and "<verificationPassword>"
    And she fills the empty fields with valid data
    And she requests to register
    Then the system should display "<error>" message

    Examples:
      | email            | password | verificationPassword   | error                                                 |
      | email            | Abcdefg0 |	Abcdefg0			 | The email is invalid                                  |
      | email@domain.co  | Abcdefg0 |	Abcdefg0			 | The email is invalid                                  |
      | email@domain.com | abcdefg0 |	abcdefg0			 | The password must contain at least one capital letter |
      | email@domain.com | Abcdefgh |	Abcdefgh			 | The password must contain a number                    |
      | email@domain.com | Abcdefg0 | Abcdefg1			     | The password must coincide                            |


  Scenario Outline: Create an account with existing field
    Given Estefania is an anonymous user
    And she is in the register page
    When she requests to create an account with existent "<field>"
    Then the system should display "<error>" message

    Examples:
      | field	   | error						   |
      | email	   | The email should be unique	   |
      | document   | The document should be unique |


  Scenario: Not add any information in the register form
    Given Estefania is an anonymous user
    And she is in the register page
    When she doesn't fill the register form
    And she requests to create an account
    Then she should obtain "Please fill all mandatory fields" message


  Scenario Outline: Validate error message when fields are not filled
    Given Estefania is an anonymous user
    And she is in the register page
    When she doesn't fill the "<field>" of the register form
    And she requests to register
    Then she should obtain an "Please fill all mandatory fields" message

    Examples:
      |field             |
      |Document type     |
      |Document          |
      |Name              |
      |Last name         |
      |Email             |
      |Password          |
      |Validate Password |
      |Role              |