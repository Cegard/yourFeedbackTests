package steps;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import net.thucydides.core.annotations.Steps;
import services.SeeEventsService;

import static net.serenitybdd.rest.SerenityRest.then;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.notNullValue;

public class SeeEventsSteps {
    @Steps
    SeeEventsService seeEventsService = new SeeEventsService();

    @When("^she sends a request to the events profile$")
    public void sheSendsARequestToTheEventsProfile() {
        seeEventsService.sendRequest();
    }

    @Then("^the system should retrieve a list of events containing name, description, creationDate, place, id, eventQuestionnaires$")
    public void theSystemShouldRetrieveAListOfEventsContainingNameDescriptionCreationDatePlaceIdEventQuestionnaires() {
        assertThat(then().extract().response().getBody().jsonPath().get("name"), is(notNullValue()));
        assertThat(then().extract().response().getBody().jsonPath().get("description"), is(notNullValue()));
        assertThat(then().extract().response().getBody().jsonPath().get("creationDate"), is(notNullValue()));
        assertThat(then().extract().response().getBody().jsonPath().get("place"), is(notNullValue()));
        assertThat(then().extract().response().getBody().jsonPath().get("id"), is(notNullValue()));
        assertThat(then().extract().response().getBody().jsonPath().get("eventQuestionnaires$"), is(notNullValue()));
    }
}
