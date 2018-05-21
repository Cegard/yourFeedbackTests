$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/editProfile.feature");
formatter.feature({
  "name": "Edit profile",
  "description": "  AS a user\n  I want to edit my profile\n  SO THAT I can set my document type, document, name, last name, email, password, and role",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Add new information in the profile page",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Estefania\thas an active session",
  "keyword": "Given "
});
formatter.match({
  "location": "GeneralSteps.estefaniaHasAnActiveSession()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "she fills the register information",
  "keyword": "And "
});
formatter.match({
  "location": "EditProfileSteps.sheFillsTheRegisterInformation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "she sends a request to the edit profile service",
  "keyword": "When "
});
formatter.match({
  "location": "EditProfileSteps.sheSendsARequestToTheEditProfileService()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the service should response with the profile",
  "keyword": "Then "
});
formatter.match({
  "location": "EditProfileSteps.theServiceShouldResponseWithTheProfile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code \"200\"",
  "keyword": "And "
});
formatter.match({
  "location": "GeneralSteps.statusCode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Edit email and password with invalid data",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Estefania\thas an active session",
  "keyword": "Given "
});
formatter.step({
  "name": "she requests to edit her profile with \"\u003cemail\u003e\", \"\u003cpassword\u003e\" and \"\u003cverificationPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "she sends a request to the edit profile service",
  "keyword": "When "
});
formatter.step({
  "name": "the system should retrieve \"\u003cerror\u003e\" message",
  "keyword": "Then "
});
formatter.step({
  "name": "status code \"400\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "verificationPassword",
        "error"
      ]
    },
    {
      "cells": [
        "email",
        "Abcdefg0",
        "Abcdefg0",
        "The email is invalid"
      ]
    },
    {
      "cells": [
        "email@domain.com",
        "abcdefg0",
        "abcdefg0",
        "The password must contain at least one capital letter"
      ]
    },
    {
      "cells": [
        "email@domain.com",
        "Abcdefgh",
        "Abcdefgh",
        "The password must contain a number"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Edit email and password with invalid data",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Estefania\thas an active session",
  "keyword": "Given "
});
formatter.match({
  "location": "GeneralSteps.estefaniaHasAnActiveSession()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "she requests to edit her profile with \"email\", \"Abcdefg0\" and \"Abcdefg0\"",
  "keyword": "And "
});
formatter.match({
  "location": "EditProfileSteps.sheRequestsToEditHerProfileWithAnd(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "she sends a request to the edit profile service",
  "keyword": "When "
});
formatter.match({
  "location": "EditProfileSteps.sheSendsARequestToTheEditProfileService()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the system should retrieve \"The email is invalid\" message",
  "keyword": "Then "
});
formatter.match({
  "location": "EditProfileSteps.theSystemShouldRetrieveMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code \"400\"",
  "keyword": "And "
});
formatter.match({
  "location": "GeneralSteps.statusCode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Edit email and password with invalid data",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Estefania\thas an active session",
  "keyword": "Given "
});
formatter.match({
  "location": "GeneralSteps.estefaniaHasAnActiveSession()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "she requests to edit her profile with \"email@domain.com\", \"abcdefg0\" and \"abcdefg0\"",
  "keyword": "And "
});
formatter.match({
  "location": "EditProfileSteps.sheRequestsToEditHerProfileWithAnd(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "she sends a request to the edit profile service",
  "keyword": "When "
});
formatter.match({
  "location": "EditProfileSteps.sheSendsARequestToTheEditProfileService()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the system should retrieve \"The password must contain at least one capital letter\" message",
  "keyword": "Then "
});
formatter.match({
  "location": "EditProfileSteps.theSystemShouldRetrieveMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code \"400\"",
  "keyword": "And "
});
formatter.match({
  "location": "GeneralSteps.statusCode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Edit email and password with invalid data",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Estefania\thas an active session",
  "keyword": "Given "
});
formatter.match({
  "location": "GeneralSteps.estefaniaHasAnActiveSession()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "she requests to edit her profile with \"email@domain.com\", \"Abcdefgh\" and \"Abcdefgh\"",
  "keyword": "And "
});
formatter.match({
  "location": "EditProfileSteps.sheRequestsToEditHerProfileWithAnd(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "she sends a request to the edit profile service",
  "keyword": "When "
});
formatter.match({
  "location": "EditProfileSteps.sheSendsARequestToTheEditProfileService()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the system should retrieve \"The password must contain a number\" message",
  "keyword": "Then "
});
formatter.match({
  "location": "EditProfileSteps.theSystemShouldRetrieveMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code \"400\"",
  "keyword": "And "
});
formatter.match({
  "location": "GeneralSteps.statusCode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Edit email with an existent record",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Estefania\thas an active session",
  "keyword": "Given "
});
formatter.step({
  "name": "she request to modify with an existent \"\u003cfield\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "she sends a request to the edit profile service",
  "keyword": "When "
});
formatter.step({
  "name": "the system should retrieve \"\u003cerrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "status code \"400\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "field",
        "errorMessage"
      ]
    },
    {
      "cells": [
        "email",
        "User already exist"
      ]
    },
    {
      "cells": [
        "document",
        "User already exist"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Edit email with an existent record",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Estefania\thas an active session",
  "keyword": "Given "
});
formatter.match({
  "location": "GeneralSteps.estefaniaHasAnActiveSession()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "she request to modify with an existent \"email\"",
  "keyword": "And "
});
formatter.match({
  "location": "EditProfileSteps.sheRequestToModifyWithAnExistent(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "she sends a request to the edit profile service",
  "keyword": "When "
});
formatter.match({
  "location": "EditProfileSteps.sheSendsARequestToTheEditProfileService()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the system should retrieve \"User already exist\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterStep.theSystemShouldRetrieve(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code \"400\"",
  "keyword": "And "
});
formatter.match({
  "location": "GeneralSteps.statusCode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Edit email with an existent record",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Estefania\thas an active session",
  "keyword": "Given "
});
formatter.match({
  "location": "GeneralSteps.estefaniaHasAnActiveSession()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "she request to modify with an existent \"document\"",
  "keyword": "And "
});
formatter.match({
  "location": "EditProfileSteps.sheRequestToModifyWithAnExistent(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "she sends a request to the edit profile service",
  "keyword": "When "
});
formatter.match({
  "location": "EditProfileSteps.sheSendsARequestToTheEditProfileService()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the system should retrieve \"User already exist\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterStep.theSystemShouldRetrieve(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code \"400\"",
  "keyword": "And "
});
formatter.match({
  "location": "GeneralSteps.statusCode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Not add any information in the register form",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Estefania\thas an active session",
  "keyword": "Given "
});
formatter.match({
  "location": "GeneralSteps.estefaniaHasAnActiveSession()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "she does not send any information",
  "keyword": "And "
});
formatter.match({
  "location": "EditProfileSteps.sheDoesNotSendAnyInformation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "she sends a request to the edit profile service",
  "keyword": "When "
});
formatter.match({
  "location": "EditProfileSteps.sheSendsARequestToTheEditProfileService()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the system should retrieve status code \"400\"",
  "keyword": "Then "
});
formatter.match({
  "location": "GeneralSteps.theSystemShouldRetrieveStatusCode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/login.feature");
formatter.feature({
  "name": "Login into the application",
  "description": "  AS a user\n  I WANT TO log in to the website\n  SO THAT I can see my profile and grade events and persons",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Log in with an existent account and valid data",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Estefania has an account",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.estefaniaHasAnAccount()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "she fills the login information",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.sheFillsTheLoginInformation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "she sends a request to the login service",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.sheSendsARequestToTheLoginService()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the service should response with a token",
  "keyword": "Then "
});
formatter.match({
  "location": "GeneralSteps.theServiceShouldResponseWithAToken()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code \"200\"",
  "keyword": "And "
});
formatter.match({
  "location": "GeneralSteps.statusCode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Log in with invalid information",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Estefania has invalid login information",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.estefaniaHasInvalidLoginInformation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "she sends a request to the login service",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.sheSendsARequestToTheLoginService()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the system should retrieve error \"The email and password do not match\"",
  "keyword": "Then "
});
formatter.match({
  "location": "GeneralSteps.theSystemShouldRetrieveError(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code \"400\"",
  "keyword": "And "
});
formatter.match({
  "location": "GeneralSteps.statusCode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Do not add information in the login form",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Estefania has an account",
  "keyword": "Given "
});
formatter.step({
  "name": "she doesn\u0027t fill \"\u003cfield\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "she sends a request to the login service",
  "keyword": "When "
});
formatter.step({
  "name": "the system should retrieve error \"Please fill all mandatory fields\"",
  "keyword": "Then "
});
formatter.step({
  "name": "status code \"400\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "field"
      ]
    },
    {
      "cells": [
        "email"
      ]
    },
    {
      "cells": [
        "password"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Do not add information in the login form",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Estefania has an account",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.estefaniaHasAnAccount()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "she doesn\u0027t fill \"email\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.sheDoesnTFill(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "she sends a request to the login service",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.sheSendsARequestToTheLoginService()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the system should retrieve error \"Please fill all mandatory fields\"",
  "keyword": "Then "
});
formatter.match({
  "location": "GeneralSteps.theSystemShouldRetrieveError(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code \"400\"",
  "keyword": "And "
});
formatter.match({
  "location": "GeneralSteps.statusCode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Do not add information in the login form",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Estefania has an account",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.estefaniaHasAnAccount()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "she doesn\u0027t fill \"password\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.sheDoesnTFill(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "she sends a request to the login service",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.sheSendsARequestToTheLoginService()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the system should retrieve error \"Please fill all mandatory fields\"",
  "keyword": "Then "
});
formatter.match({
  "location": "GeneralSteps.theSystemShouldRetrieveError(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code \"400\"",
  "keyword": "And "
});
formatter.match({
  "location": "GeneralSteps.statusCode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/registerUser.feature");
formatter.feature({
  "name": "Register",
  "description": "  As an anonymous user\n  I want TO get registered\n  So that I can have a profile and interact with the page",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Create account with valid data",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Estefania has the register information",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterStep.estefaniaHasValidData()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "she sends a request to the registration service",
  "keyword": "When "
});
formatter.match({
  "location": "RegisterStep.sheSendARequestToTheRegistrationService()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the service should response with a token",
  "keyword": "Then "
});
formatter.match({
  "location": "GeneralSteps.theServiceShouldResponseWithAToken()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code \"200\"",
  "keyword": "And "
});
formatter.match({
  "location": "GeneralSteps.statusCode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Create an account with invalid data",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Estefania has the following data \"\u003cemail\u003e\", \"\u003cpassword\u003e\" and \"\u003cverificationPassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "she sends a request to the registration service",
  "keyword": "When "
});
formatter.step({
  "name": "the system should retrieve \"\u003cerror\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "status code \"400\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "verificationPassword",
        "error"
      ]
    },
    {
      "cells": [
        "email",
        "Abcdefg0",
        "Abcdefg0",
        "The email is invalid"
      ]
    },
    {
      "cells": [
        ",email@domain.co",
        "Abcdefg0",
        "Abcdefg0",
        "The email is invalid"
      ]
    },
    {
      "cells": [
        "email@domain.com",
        "abcdefg0",
        "abcdefg0",
        "The password must contain at least one capital letter"
      ]
    },
    {
      "cells": [
        "email@domain.com",
        "Abcdefgh",
        "Abcdefgh",
        "The password must contain a number"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Create an account with invalid data",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Estefania has the following data \"email\", \"Abcdefg0\" and \"Abcdefg0\"",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterStep.estefaniaHasTheFollowingDataAnd(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "she sends a request to the registration service",
  "keyword": "When "
});
formatter.match({
  "location": "RegisterStep.sheSendARequestToTheRegistrationService()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the system should retrieve \"The email is invalid\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterStep.theSystemShouldRetrieve(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code \"400\"",
  "keyword": "And "
});
formatter.match({
  "location": "GeneralSteps.statusCode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Create an account with invalid data",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Estefania has the following data \",email@domain.co\", \"Abcdefg0\" and \"Abcdefg0\"",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterStep.estefaniaHasTheFollowingDataAnd(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "she sends a request to the registration service",
  "keyword": "When "
});
formatter.match({
  "location": "RegisterStep.sheSendARequestToTheRegistrationService()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the system should retrieve \"The email is invalid\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterStep.theSystemShouldRetrieve(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code \"400\"",
  "keyword": "And "
});
formatter.match({
  "location": "GeneralSteps.statusCode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Create an account with invalid data",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Estefania has the following data \"email@domain.com\", \"abcdefg0\" and \"abcdefg0\"",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterStep.estefaniaHasTheFollowingDataAnd(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "she sends a request to the registration service",
  "keyword": "When "
});
formatter.match({
  "location": "RegisterStep.sheSendARequestToTheRegistrationService()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the system should retrieve \"The password must contain at least one capital letter\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterStep.theSystemShouldRetrieve(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code \"400\"",
  "keyword": "And "
});
formatter.match({
  "location": "GeneralSteps.statusCode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Create an account with invalid data",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Estefania has the following data \"email@domain.com\", \"Abcdefgh\" and \"Abcdefgh\"",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterStep.estefaniaHasTheFollowingDataAnd(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "she sends a request to the registration service",
  "keyword": "When "
});
formatter.match({
  "location": "RegisterStep.sheSendARequestToTheRegistrationService()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the system should retrieve \"The password must contain a number\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterStep.theSystemShouldRetrieve(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code \"400\"",
  "keyword": "And "
});
formatter.match({
  "location": "GeneralSteps.statusCode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Create an account with existing field",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Estefania has the register information",
  "keyword": "Given "
});
formatter.step({
  "name": "existent \"\u003cfield\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "she sends a request to the registration service",
  "keyword": "When "
});
formatter.step({
  "name": "the system should retrieve \"\u003cerror\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "status code \"400\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "field",
        "error"
      ]
    },
    {
      "cells": [
        "email",
        "User already exist"
      ]
    },
    {
      "cells": [
        "document",
        "User already exist"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Create an account with existing field",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Estefania has the register information",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterStep.estefaniaHasValidData()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "existent \"email\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterStep.existent(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "she sends a request to the registration service",
  "keyword": "When "
});
formatter.match({
  "location": "RegisterStep.sheSendARequestToTheRegistrationService()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the system should retrieve \"User already exist\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterStep.theSystemShouldRetrieve(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code \"400\"",
  "keyword": "And "
});
formatter.match({
  "location": "GeneralSteps.statusCode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Create an account with existing field",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Estefania has the register information",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterStep.estefaniaHasValidData()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "existent \"document\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterStep.existent(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "she sends a request to the registration service",
  "keyword": "When "
});
formatter.match({
  "location": "RegisterStep.sheSendARequestToTheRegistrationService()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the system should retrieve \"User already exist\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterStep.theSystemShouldRetrieve(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code \"400\"",
  "keyword": "And "
});
formatter.match({
  "location": "GeneralSteps.statusCode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Do not add any information in the register form",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Estefania does not send any information",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterStep.estefaniaDoesNotSendAnyInformation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "she sends a request to the registration service",
  "keyword": "When "
});
formatter.match({
  "location": "RegisterStep.sheSendARequestToTheRegistrationService()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the system should retrieve status code \"400\"",
  "keyword": "Then "
});
formatter.match({
  "location": "GeneralSteps.theSystemShouldRetrieveStatusCode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/seeEvents.feature");
formatter.feature({
  "name": "See events",
  "description": "  AS a logged user\n  I WANT TO see all the events\n  SO THAT I can give feedback to events and persons",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "See all events",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Estefania\thas an active session",
  "keyword": "Given "
});
formatter.match({
  "location": "GeneralSteps.estefaniaHasAnActiveSession()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "she sends a request to the events profile",
  "keyword": "When "
});
formatter.match({
  "location": "SeeEventsSteps.sheSendsARequestToTheEventsProfile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the system should retrieve a list of events containing name, description, creationDate, place, id, eventQuestionnaires",
  "keyword": "Then "
});
formatter.match({
  "location": "SeeEventsSteps.theSystemShouldRetrieveAListOfEventsContainingNameDescriptionCreationDatePlaceIdEventQuestionnaires()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code \"200\"",
  "keyword": "And "
});
formatter.match({
  "location": "GeneralSteps.statusCode(String)"
});
formatter.result({
  "status": "passed"
});
});