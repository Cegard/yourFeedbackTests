package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import dtos.login.LoginUserDTO;
import dtos.register.RegisterUserDTO;
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
    public void estefaniaHasAnAccount() throws Throwable {
        RegisterUserDTO registerUserDTO = RegisterUserDTO.getRandomRegisterUser();
        registerService.sendRequest(registerUserDTO);
        Serenity.setSessionVariable("email").to(registerUserDTO.getEmail());
        Serenity.setSessionVariable("password").to(registerUserDTO.getPassword());
    }

    @And("^she fills the login information$")
    public void sheFillsTheLoginInformation() throws Throwable {
        body = LoginUserDTO.getLoginUserWith(Serenity.sessionVariableCalled("email"), Serenity.sessionVariableCalled("password"));
    }

    @Given("^Estefania has the login information$")
    public void estefaniaHasTheLoginInformation() {
        RegisterUserDTO registerUserDTO = RegisterUserDTO.getRandomRegisterUser();
        body = LoginUserDTO.getLoginUserWith(registerUserDTO.getEmail(), registerUserDTO.getPassword());
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
