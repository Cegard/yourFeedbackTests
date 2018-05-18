package steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.When;
import net.thucydides.core.annotations.Steps;
import services.EditService;
import services.EvaluateEventService;
import services.EvaluatePersonService;
import services.RegisterService;

public class EvaluateSteps {


    @Steps
    RegisterService registerService = new RegisterService();
    @Steps
    EvaluateEventService evaluateEventService = new EvaluateEventService();
    EvaluatePersonService evaluatePersonService= new EvaluatePersonService();
    Object body;


    @When("^she requests to evaluate a event$")
    public void sheRequestsToEvaluateAEvent()  {
        evaluateEventService.sendRequest(body);
    }

    @When("^she requests to evaluate person profile$")
    public void sheRequestsToEvaluatePersonProfile()  {
      evaluatePersonService.sendRequest(body);
    }
}