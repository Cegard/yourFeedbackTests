package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import dtos.login.LoginUserDTO;
import dtos.profile.ProfileDTO;
import net.thucydides.core.annotations.Steps;
import services.LoginService;
import services.RegisterService;

import static net.serenitybdd.rest.SerenityRest.then;
import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.notNullValue;

public class GeneralSteps {
    @Steps
    RegisterService registerService = new RegisterService();
    @Steps
    LoginService loginService = new LoginService();

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
        assertThat(then().extract().response().asString(), equalTo(error));
    }

    @Given("^Estefania	has an active session$")
    public void estefaniaHasAnActiveSession() {
        ProfileDTO profileDTO = ProfileDTO.getRandomProfile();
        registerService.sendRequest(profileDTO);
        LoginUserDTO loginUserDTO = LoginUserDTO.getLoginUserWith(profileDTO.getEmail(), profileDTO.getPassword());
        loginService.sendRequest(loginUserDTO);
    }
}
