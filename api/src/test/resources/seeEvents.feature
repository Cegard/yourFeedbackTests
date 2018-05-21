Feature: See events
  AS a logged user
  I WANT TO see all the events
  SO THAT I can give feedback to events and persons

  Scenario: See all events
    Given Estefania	has an active session
    When she sends a request to the events profile
    Then the system should retrieve a list of events containing name, description, creationDate, place, id, eventQuestionnaires
    And status code "200"