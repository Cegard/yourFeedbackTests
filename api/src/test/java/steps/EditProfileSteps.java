package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import dtos.profile.ProfileDTO;
import net.thucydides.core.annotations.Steps;
import services.EditService;
import utils.Utils;

import static net.serenitybdd.rest.SerenityRest.then;
import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.notNullValue;

public class EditProfileSteps {
    @Steps
    EditService editService = new EditService();
    Object body;

    @And("^she fills the register information$")
    public void sheFillsTheRegisterInformation() {
        body = ProfileDTO.getRandomProfile();
    }

    @When("^she sends a request to the edit profile service$")
    public void sheSendsARequestToTheEditProfileService() {
        editService.sendRequest(body);
    }

    @Then("^the service should response with the profile$")
    public void theServiceShouldResponseWithTheProfile() {
        assertThat(then().extract().response().getBody().jsonPath().get("email"), is(notNullValue()));
    }

    @And("^she requests to edit her profile with \"([^\"]*)\", \"([^\"]*)\" and \"([^\"]*)\"$")
    public void sheRequestsToEditHerProfileWithAnd(String email, String password, String validatePassword) {
        body = ProfileDTO.getRandomProfileWith(email, password, validatePassword);
    }

    @Then("^the system should retrieve \"([^\"]*)\" message$")
    public void theSystemShouldRetrieveMessage(String error) {
        String responseCode = String.valueOf(then().extract().response().getBody().prettyPeek().jsonPath());
        System.out.println(responseCode+ "hollaaa");
        assertThat(then().extract().response().getBody().prettyPrint(), equalTo(error));
    }

    @And("^she request to modify with an existent \"([^\"]*)\"$")
    public void sheRequestToModifyWithAnExistent(String field) {
        body = ProfileDTO.getRandomProfile();
        editService.sendRequest(body);
        if (field == "email") {
            ((ProfileDTO) body).setDocument(Utils.getRandomNumeric());
        } else if (field == "document") {
            ((ProfileDTO) body).setEmail(Utils.getRandomEmail());
        }
    }

    @And("^she does not send any information$")
    public void sheDoesNotSendAnyInformation() {
        body = ProfileDTO.getEmptyProfile();
    }
}
