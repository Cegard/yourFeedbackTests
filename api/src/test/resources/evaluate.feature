Feature: See events
  As a logged user
  I want to grade an event or a person
  So that I qualify, comment and update people statistics

  Scenario: Evaluate an event with valid data
    Given Estefania	has an active session
    When  she requests to evaluate a event
    Then the service should response with a token
    And  status code "200"


  Scenario: Evaluate a person from an event
    Given Estefania	has an active session
    When  she requests to evaluate person profile
    Then the service should response with a token
    And  status code "200"

  Scenario: Evaluate person answering all question
    Given Estefania	has an active session
    And she requests to evaluate person profile
    Given Estefania fills the questionnaire
    Then the service should response with a token
    And status code "200"


  Scenario: Evaluate person with an unanswered question
    Given Estefania	has an active session
    And she requests to evaluate person profile
    Given Estefania does not fills the questionnaire
    Then the system should retrieve an error message
    And status code "200"
