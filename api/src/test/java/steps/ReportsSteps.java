package steps;

import cucumber.api.java.en.When;
import net.thucydides.core.annotations.Steps;
import services.SeeEventsService;
import services.SeeReportsService;

public class ReportsSteps {

    @Steps
    SeeReportsService seeReportsService= new SeeReportsService();
    Object body;

    @When("^she sends a requests to the reports profile$")
    public void sheSendsARequestsToTheReportsProfile()  {
        seeReportsService.sendRequest(body);
    }
}
