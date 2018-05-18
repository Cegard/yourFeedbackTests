package steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import dtos.editProfile.EditProfileDTO;
import dtos.login.LoginUserDTO;
import dtos.register.RegisterUserDTO;
import net.serenitybdd.core.Serenity;
import net.thucydides.core.annotations.Steps;
import services.EditService;
import services.LoginService;
import services.RegisterService;
import utils.Utils;

import static net.serenitybdd.rest.SerenityRest.then;
import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.MatcherAssert.assertThat;

public class EditProfile {

    @Steps
    RegisterService registerService = new RegisterService();
    @Steps
    EditService editService = new EditService();
    Object body;

    @Given("^Estefania	has an active session$")
    public void estefaniaHasAnActiveSession()  {
        RegisterUserDTO registerUserDTO = RegisterUserDTO.getRandomRegisterUser();
        registerService.sendRequest(registerUserDTO);
        Serenity.setSessionVariable("email").to(registerUserDTO.getEmail());
        Serenity.setSessionVariable("password").to(registerUserDTO.getPassword());
        body = LoginUserDTO.getLoginUserWith(Serenity.sessionVariableCalled("email"), Serenity.sessionVariableCalled("password"));
    }


    @And("^she fills the register information$")
    public void sheFillsTheRegisterInformation() {
        body= EditProfileDTO.getRandomRegisterUser();
    }

    @When("^she sends a request to the edit profile service$")
    public void sheSendsARequestToTheEditProfileService() throws Throwable {
        editService.sendRequest(body);
    }


    @And("^she requests to edit her profile with \"([^\"]*)\", \"([^\"]*)\" and \"([^\"]*)\"$")
    public void sheRequestsToEditHerProfileWithAnd(String email, String password, String validatePassword) throws Throwable {
     body= EditProfileDTO.getRandomEditUserWith(email,password,validatePassword);
    }

    @Then("^the system should retrieve \"([^\"]*)\" message$")
    public void theSystemShouldRetrieveMessage(String error) throws Throwable {
        assertThat(then().extract().response().getBody().jsonPath().get("error"), equalTo(error));
    }

    @And("^she request to modify with an existent \"([^\"]*)\"$")
    public void sheRequestToModifyWithAnExistent(String field) throws Throwable {
        editService.sendRequest(body);
        if (field == "email") {
            ((EditProfileDTO)body).setDocument(Utils.getRandomNumeric());
        } else if (field == "document") {
            ((EditProfileDTO) body).setEmail(Utils.getRandomEmail());
        }
    }

    @And("^she does not send any information$")
    public void sheDoesNotSendAnyInformation() throws Throwable {
        body=EditProfileDTO.getEmptyEditUser();
    }
}
