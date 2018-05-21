package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import dtos.login.LoginUserDTO;
import dtos.profile.ProfileDTO;
import net.serenitybdd.core.Serenity;
import net.thucydides.core.annotations.Steps;
import services.LoginService;
import services.RegisterService;

public class LoginSteps {
    @Steps
    RegisterService registerService = new RegisterService();
    @Steps
    LoginService loginService = new LoginService();
    Object body;

    @Given("^Estefania has an account$")
    public void estefaniaHasAnAccount() {
        ProfileDTO profileDTO = ProfileDTO.getRandomProfile();
        registerService.sendRequest(profileDTO);
        Serenity.setSessionVariable("email").to(profileDTO.getEmail());
        Serenity.setSessionVariable("password").to(profileDTO.getPassword());
    }

    @And("^she fills the login information$")
    public void sheFillsTheLoginInformation() {
        body = LoginUserDTO.getLoginUserWith(Serenity.sessionVariableCalled("email").toString(), Serenity.sessionVariableCalled("password").toString());
    }

    @Given("^Estefania has the login information$")
    public void estefaniaHasTheLoginInformation() {
        ProfileDTO profileDTO = ProfileDTO.getRandomProfile();
        body = LoginUserDTO.getLoginUserWith(profileDTO.getEmail(), profileDTO.getPassword());
        registerService.sendRequest(body);
    }

    @When("^she sends a request to the login service$")
    public void sheSendsARequestToTheLoginService() {
        loginService.sendRequest(body);
    }

    @Given("^Estefania has invalid login information$")
    public void estefaniaHasInvalidLoginInformation() {
        body = LoginUserDTO.getRandomLoginUser();
    }

    @And("^she doesn't fill \"([^\"]*)\"$")
    public void sheDoesnTFill(String field) {
        body = new LoginUserDTO();
    }
}
