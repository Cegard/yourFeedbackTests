package steps;

import cucumber.api.java.en.When;
import net.thucydides.core.annotations.Steps;
import services.SeeEventsService;

public class SeeEventsSteps {

    @Steps
    SeeEventsService seeEventsService= new SeeEventsService();
    Object body;

    @When("^she sends a request to the events profile$")
    public void sheSendsARequestToTheEventsProfile()  {
        seeEventsService.sendRequest(body);
    }
}
