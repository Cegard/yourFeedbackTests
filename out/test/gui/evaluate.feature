Feature: See events
  As a logged user
  I want to grade an event or a person
  So that I qualify, comment and update people statistics

  Scenario: Evaluate an event with valid data
    Given there is at least one event
    And   Estefania is in the events page
    When  she requests to evaluate the event
    Then the system should retrieve a list of users that can evaluate

  Scenario: Evaluate an event with valid data
    Given Estefania is in the events page
    And   Estefania select an event
    When  she requests to evaluate a person
    Then the system should retrieve a list of questions


  Scenario: Evaluate an event with an unanswered question
    Given Estefania is in the events page
    And  Estefania select an event
    When Estefania requests t11o evaluate the event with an unanswered question
    Then the system should retrieve "Complete all the questions"
