Feature: See events
  As a logged user
  I Want to see all the events
  so that I can give feedback to events and persons

  Scenario: See all events
Given Estefania	has an active session
When she sends a request to the events profile
Then the service should response with a token
And status code "200"
