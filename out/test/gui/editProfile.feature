Feature: Edit Profile
  As a user
  I want to edit my profile
  So that I can set my document type, document, name, last name, email, password, and role

  Scenario: Add new information in the profile page
    Given Estefania	has an active session
    And she is in the profile page
    When Estefania fills the sing up form with the following information
      | documentType     | C.C.                     |
      | document         | 10101010                 |
      | name             | Sergio                   |
      | lastName         | Forero                   |
      | email            | sergio.forero@endava.com |
      | password         | Password3                |
      | validatePassword | Password3                |
      | role             | Automation Testing       |
  Then the system should display "The user has been updated successfully" message
  And the user information fields should be updated



  Scenario Outline: Edit email and password with invalid data
    Given Estefania has an active session
    And she is in the profile page
    When she requests to edit her profile with <email>, <password> and <verificationPassword>
    Then the system should display <error> message

    Examples:
      | email            | password | verificationPassword   | error                                                 |
      | email            | Abcdefg0 |	Abcdefg0			 | The email is invalid                                  |
      | email@domain.co  | Abcdefg0 |	Abcdefg0			 | The email is invalid                                  |
      | email@domain.com | abcdefg0 |	abcdefg0			 | The password must contain at least one capital letter |
      | email@domain.com | Abcdefgh |	Abcdefgh			 | The password must contain a number                    |
      | email@domain.com | Abcdefg0 | Abcdefg1		     	 | The password must coincide                            |


  Scenario Outline: Edit email with an existent record
    Given Estefania has an active session
    And she is in the profile page
    When she requests to edit her profile with existent "<field>"
    Then the system should display "<error>" message

  Examples:
  | field	   | error						   |
  | email	   | The email should be unique	   |
  | document   | The document should be unique |


  Scenario: Not add any information in the register form
    Given Estefania has an active session
    And she is in the profile page
    When she doesn't fill the profile form
    And she requests to edit her profile
    Then she should obtain "Please fill all mandatory fields" message


  Scenario Outline: Validate error message when fields are not filled
    Given Estefania has an active session
    And she is in the profile page
    When she doesn't fill the "<field>" of the profile form
    And she requests to edit her profile
    Then she should obtain an "Please fill all mandatory fields" message

    Examples:
      | field             |
      | Document type     |
      | Document          |
      | Name              |
      | Last name         |
      | Email             |
      | Password          |
      | Validate Password |
      | Role              |
