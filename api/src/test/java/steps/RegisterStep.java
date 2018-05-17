package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import dtos.register.RegisterUserDTO;
import net.thucydides.core.annotations.Steps;
import services.RegisterService;
import utils.Utils;

import static net.serenitybdd.rest.SerenityRest.then;
import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.MatcherAssert.assertThat;

public class RegisterStep {
    @Steps
    RegisterService registerService = new RegisterService();
    Object body;

    @Given("^Estefania has the register information$")
    public void estefaniaHasValidData() {
        body = RegisterUserDTO.getRandomRegisterUser();
    }

    @When("^she sends a request to the registration service$")
    public void sheSendARequestToTheRegistrationService() {
        registerService.sendRequest(body);
    }

    @Given("^Estefania has the following data \"([^\"]*)\", \"([^\"]*)\" and \"([^\"]*)\"$")
    public void estefaniaHasTheFollowingDataAnd(String email, String password, String verificationPassword) {
        body = new RegisterUserDTO(email, password, verificationPassword);
    }

    @Then("^the system should retrieve \"([^\"]*)\"$")
    public void theSystemShouldRetrieve(String error) {
        assertThat(then().extract().response().getBody().jsonPath().get("error"), equalTo(error));
    }

    @And("^existent \"([^\"]*)\"$")
    public void existent(String field) {
        registerService.sendRequest(body);
        if (field == "email") {
            ((RegisterUserDTO) body).setDocument(Utils.getRandomNumeric());
        } else if (field == "document") {
            ((RegisterUserDTO) body).setEmail(Utils.getRandomEmail());
        }
    }

    @Given("^Estefania has valid data and existent \"([^\"]*)\"$")
    public void estefaniaHasValidDataAndExistent(String field) {
        body = RegisterUserDTO.getRandomRegisterUser();
    }

    @Given("^Estefania does not send any information$")
    public void estefaniaDoesNotSendAnyInformation() {
        body = RegisterUserDTO.getEmptyRegisterUser();
    }
}
