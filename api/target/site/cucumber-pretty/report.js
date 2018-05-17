$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/login.feature");
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
  "error_message": "io.restassured.path.json.exception.JsonPathException: Failed to parse the JSON document\r\n\tat io.restassured.path.json.JsonPath$ExceptionCatcher.invoke(JsonPath.java:930)\r\n\tat io.restassured.path.json.JsonPath$4.doParseWith(JsonPath.java:895)\r\n\tat io.restassured.path.json.JsonPath$JsonParser.parseWith(JsonPath.java:975)\r\n\tat io.restassured.path.json.JsonPath.get(JsonPath.java:201)\r\n\tat steps.GeneralSteps.theServiceShouldResponseWithAToken(GeneralSteps.java:15)\r\n\tat ✽.the service should response with a token(src/test/resources/login.feature:10)\r\nCaused by: java.lang.IllegalArgumentException: The JSON input text should neither be null nor empty.\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:83)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrapNoCoerce.callConstructor(ConstructorSite.java:105)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallConstructor(CallSiteArray.java:60)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:235)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:247)\r\n\tat io.restassured.internal.path.json.ConfigurableJsonSlurper.parseText(ConfigurableJsonSlurper.groovy:80)\r\n\tat io.restassured.path.json.JsonPath$4$1.method(JsonPath.java:893)\r\n\tat io.restassured.path.json.JsonPath$ExceptionCatcher.invoke(JsonPath.java:928)\r\n\tat io.restassured.path.json.JsonPath$4.doParseWith(JsonPath.java:895)\r\n\tat io.restassured.path.json.JsonPath$JsonParser.parseWith(JsonPath.java:975)\r\n\tat io.restassured.path.json.JsonPath.get(JsonPath.java:201)\r\n\tat steps.GeneralSteps.theServiceShouldResponseWithAToken(GeneralSteps.java:15)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:32)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:26)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:40)\r\n\tat cucumber.api.TestStep.executeStep(TestStep.java:102)\r\n\tat cucumber.api.TestStep.run(TestStep.java:83)\r\n\tat cucumber.api.TestCase.run(TestCase.java:58)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:117)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:126)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "status code \"200\"",
  "keyword": "And "
});
formatter.match({
  "location": "GeneralSteps.statusCode(String)"
});
formatter.result({
  "status": "skipped"
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
  "error_message": "io.restassured.path.json.exception.JsonPathException: Failed to parse the JSON document\r\n\tat io.restassured.path.json.JsonPath$ExceptionCatcher.invoke(JsonPath.java:930)\r\n\tat io.restassured.path.json.JsonPath$4.doParseWith(JsonPath.java:895)\r\n\tat io.restassured.path.json.JsonPath$JsonParser.parseWith(JsonPath.java:975)\r\n\tat io.restassured.path.json.JsonPath.get(JsonPath.java:201)\r\n\tat steps.GeneralSteps.theSystemShouldRetrieveError(GeneralSteps.java:33)\r\n\tat ✽.the system should retrieve error \"The email and password do not match\"(src/test/resources/login.feature:16)\r\nCaused by: java.lang.IllegalArgumentException: The JSON input text should neither be null nor empty.\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:83)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrapNoCoerce.callConstructor(ConstructorSite.java:105)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:247)\r\n\tat io.restassured.internal.path.json.ConfigurableJsonSlurper.parseText(ConfigurableJsonSlurper.groovy:80)\r\n\tat io.restassured.path.json.JsonPath$4$1.method(JsonPath.java:893)\r\n\tat io.restassured.path.json.JsonPath$ExceptionCatcher.invoke(JsonPath.java:928)\r\n\tat io.restassured.path.json.JsonPath$4.doParseWith(JsonPath.java:895)\r\n\tat io.restassured.path.json.JsonPath$JsonParser.parseWith(JsonPath.java:975)\r\n\tat io.restassured.path.json.JsonPath.get(JsonPath.java:201)\r\n\tat steps.GeneralSteps.theSystemShouldRetrieveError(GeneralSteps.java:33)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:32)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:26)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:40)\r\n\tat cucumber.api.TestStep.executeStep(TestStep.java:102)\r\n\tat cucumber.api.TestStep.run(TestStep.java:83)\r\n\tat cucumber.api.TestCase.run(TestCase.java:58)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:117)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:126)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "status code \"400\"",
  "keyword": "And "
});
formatter.match({
  "location": "GeneralSteps.statusCode(String)"
});
formatter.result({
  "status": "skipped"
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
  "error_message": "io.restassured.path.json.exception.JsonPathException: Failed to parse the JSON document\r\n\tat io.restassured.path.json.JsonPath$ExceptionCatcher.invoke(JsonPath.java:930)\r\n\tat io.restassured.path.json.JsonPath$4.doParseWith(JsonPath.java:895)\r\n\tat io.restassured.path.json.JsonPath$JsonParser.parseWith(JsonPath.java:975)\r\n\tat io.restassured.path.json.JsonPath.get(JsonPath.java:201)\r\n\tat steps.GeneralSteps.theSystemShouldRetrieveError(GeneralSteps.java:33)\r\n\tat ✽.the system should retrieve error \"Please fill all mandatory fields\"(src/test/resources/login.feature:23)\r\nCaused by: java.lang.IllegalArgumentException: The JSON input text should neither be null nor empty.\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:83)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrapNoCoerce.callConstructor(ConstructorSite.java:105)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:247)\r\n\tat io.restassured.internal.path.json.ConfigurableJsonSlurper.parseText(ConfigurableJsonSlurper.groovy:80)\r\n\tat io.restassured.path.json.JsonPath$4$1.method(JsonPath.java:893)\r\n\tat io.restassured.path.json.JsonPath$ExceptionCatcher.invoke(JsonPath.java:928)\r\n\tat io.restassured.path.json.JsonPath$4.doParseWith(JsonPath.java:895)\r\n\tat io.restassured.path.json.JsonPath$JsonParser.parseWith(JsonPath.java:975)\r\n\tat io.restassured.path.json.JsonPath.get(JsonPath.java:201)\r\n\tat steps.GeneralSteps.theSystemShouldRetrieveError(GeneralSteps.java:33)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:32)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:26)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:40)\r\n\tat cucumber.api.TestStep.executeStep(TestStep.java:102)\r\n\tat cucumber.api.TestStep.run(TestStep.java:83)\r\n\tat cucumber.api.TestCase.run(TestCase.java:58)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:117)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:126)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "status code \"400\"",
  "keyword": "And "
});
formatter.match({
  "location": "GeneralSteps.statusCode(String)"
});
formatter.result({
  "status": "skipped"
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
  "error_message": "io.restassured.path.json.exception.JsonPathException: Failed to parse the JSON document\r\n\tat io.restassured.path.json.JsonPath$ExceptionCatcher.invoke(JsonPath.java:930)\r\n\tat io.restassured.path.json.JsonPath$4.doParseWith(JsonPath.java:895)\r\n\tat io.restassured.path.json.JsonPath$JsonParser.parseWith(JsonPath.java:975)\r\n\tat io.restassured.path.json.JsonPath.get(JsonPath.java:201)\r\n\tat steps.GeneralSteps.theSystemShouldRetrieveError(GeneralSteps.java:33)\r\n\tat ✽.the system should retrieve error \"Please fill all mandatory fields\"(src/test/resources/login.feature:23)\r\nCaused by: java.lang.IllegalArgumentException: The JSON input text should neither be null nor empty.\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:83)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrapNoCoerce.callConstructor(ConstructorSite.java:105)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:247)\r\n\tat io.restassured.internal.path.json.ConfigurableJsonSlurper.parseText(ConfigurableJsonSlurper.groovy:80)\r\n\tat io.restassured.path.json.JsonPath$4$1.method(JsonPath.java:893)\r\n\tat io.restassured.path.json.JsonPath$ExceptionCatcher.invoke(JsonPath.java:928)\r\n\tat io.restassured.path.json.JsonPath$4.doParseWith(JsonPath.java:895)\r\n\tat io.restassured.path.json.JsonPath$JsonParser.parseWith(JsonPath.java:975)\r\n\tat io.restassured.path.json.JsonPath.get(JsonPath.java:201)\r\n\tat steps.GeneralSteps.theSystemShouldRetrieveError(GeneralSteps.java:33)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:32)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:26)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:40)\r\n\tat cucumber.api.TestStep.executeStep(TestStep.java:102)\r\n\tat cucumber.api.TestStep.run(TestStep.java:83)\r\n\tat cucumber.api.TestCase.run(TestCase.java:58)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:117)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:126)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "status code \"400\"",
  "keyword": "And "
});
formatter.match({
  "location": "GeneralSteps.statusCode(String)"
});
formatter.result({
  "status": "skipped"
});
});