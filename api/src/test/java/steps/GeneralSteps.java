package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

import static net.serenitybdd.rest.SerenityRest.then;
import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.notNullValue;

public class GeneralSteps {
    @Then("^the service should response with a token$")
    public void theServiceShouldResponseWithAToken() {
        String token = (then().extract().response().getBody().jsonPath().get("token"));
        assertThat(token, is(notNullValue()));
    }

    @And("^status code \"([^\"]*)\"$")
    public void statusCode(String statusCode) {
        String responseCode = String.valueOf(then().extract().statusCode());
        assertThat(responseCode, equalTo(statusCode));
    }

    @Then("^the system should retrieve status code \"([^\"]*)\"$")
    public void theSystemShouldRetrieveStatusCode(String statusCode) {
        String responseCode = String.valueOf(then().extract().statusCode());
        assertThat(responseCode, equalTo(statusCode));
    }

    @Then("^the system should retrieve error \"([^\"]*)\"$")
    public void theSystemShouldRetrieveError(String error) {
        assertThat(then().extract().response().getBody().jsonPath().get("error"), equalTo(error));
    }
}
